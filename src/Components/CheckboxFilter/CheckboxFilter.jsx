import { useReducer } from "react"

function reducer(state, action) {
  switch (action.type) {
    case 'shortData':
      return {
        data: state.data.filter(item => item.id <= 5),
        fullMode: true
      }
    case 'fullData':
      return {
        data: action.payload,
        fullMode: false
      }

    default:
      throw new Error()
  }
}

export const CheckboxFilter = ({ DATA, selector, title }) => {
  const VARIABLES = {
    btnHidden: 'Свернуть',
    btnVisible: 'Показать все'
  }

  const [state, dispatch] = useReducer(reducer, { data: DATA.filter(item => item.id <= 4), fullMode: true })
  return (
    <div className={`aside__${selector}`}>
      <label className="aside__filter__title">{title}</label>
      <div
        className={`aside__${selector}__inner`}
        name={selector}
      >
        {
          state.data.map(item =>
            <div
              className={`aside__${selector}__item`}
              key={item.id}
            >
              <input
                className={`aside__${selector}__item_input`}
                type="checkbox"
                key={item.id}
                name={selector}
                value={item.name}
              />
              {item.name}
            </div>)
        }
      </div>
      {
        state.data.length >= 5 ? state.fullMode ? (<div className="aside__btn" onClick={() => dispatch({ type: 'fullData', payload: DATA })}>{VARIABLES.btnVisible}</div>) : (<div className="aside__btn" onClick={() => dispatch({ type: 'shortData' })}>{VARIABLES.btnHidden}</div>) : <></>
      }

    </div>
  )
}