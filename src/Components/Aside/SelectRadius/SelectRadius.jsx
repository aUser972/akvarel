import { useContext } from "react"
import { CustomCircle } from "../../CustomCircleContext"


export const SelectRadius = () => {
  const { customCircle, setCustomCircle } = useContext(CustomCircle)
  const VARIABLES = {
    labelText: 'Введите радиус окружности:',
    btnText: 'Выбрать область',
    btnCancelText: 'Отменить выбор'
  }
  const getRadius = () => {
    const radius = document.querySelector('.aside__select-radius__select_input')
    return radius.valueAsNumber ? radius.valueAsNumber : 0
  }
  const handlerSelectRadius = (event) => {
    event.preventDefault()
    if (customCircle) {
      setCustomCircle(null)
      const radius = document.querySelector('.aside__select-radius__select_input')
      radius.valueAsNumber = 0
    } else {
      setCustomCircle({
        objectType: '',
        maxConsumers: '',
        minConsumers: '',
        Longtitude: '',
        Lattitude: '',
        Radius: getRadius(),
        numberPosts: '',
      })
    }
  }

  return (
    <div className="aside__select-radius">
      <div className="aside__select-radius__inner">
        <h2 className="aside__select-radius__title">
          {VARIABLES.labelText}
        </h2>
        <div className="aside__select-radius__select">
          <input
            className="aside__select-radius__select_input"
            id="select-radius__input"
            type="number"
            min="0"
            placeholder="0 метров"
            step="10"
          />
          <button
            className="aside__select-radius__select_btn button_green"
            onClick={(event) => handlerSelectRadius(event)}
          >
            {customCircle ? VARIABLES.btnCancelText : VARIABLES.btnText}
          </button>
        </div>
      </div>
    </div >
  )
}