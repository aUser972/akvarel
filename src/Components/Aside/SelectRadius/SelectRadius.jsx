import { useContext } from "react"
import { CustomCircle } from "../../CustomCircleContext"


export const SelectRadius = () => {
  const { setCustomCircle } = useContext(CustomCircle)
  const VARIABLES = {
    labelText: 'Введите радиус окружности:',
    btnText: 'Выбрать область'
  }
  const getRadius = () => {
    const radius = document.querySelector('.aside__select-radius__select_input')
    return radius.valueAsNumber ? radius.valueAsNumber : 0
  }
  const handlerSelectRadius = (event) => {
    event.preventDefault()
    setCustomCircle({
      data: {
        objectType: '',
        maxConsumers: '',
        minConsumers: '',
        Longtitude: '',
        Lattitude: '',
        Radius: getRadius(),
        numberPosts: '',
      },
      checked: true
    })
  }

  return (
    <div className="aside__select-radius">
      <div className="aside__select-radius__inner">
        <div className="aside__select-radius__select">
          <label >
            {VARIABLES.labelText}
            <input
              className="aside__select-radius__select_input"
              type="number"
              min="0"
              placeholder="0 метров"
              step="10"
            />
          </label>
        </div>
        <button
          className="aside__select-radius_btn button_green"
          onClick={(event) => handlerSelectRadius(event)}
        >
          {VARIABLES.btnText}
        </button>
      </div>
    </div>
  )
}