import { useState } from "react"

import gradientImg from '../../../img/gradient.png'

export const Mode = ({ DATA, selector, title }) => {
  const [gradient, setGradient] = useState(false)
  // const termalMap = 
  // console.log(termalMap)
  return (
    <div className={`aside__${selector}`}>
      {/* Заголовок раздела фильтра */}
      <h2 className="aside__filter__title">{title}</h2>

      {/* Оболочка раздела фильтра */}
      <div
        className={`aside__${selector}__inner`}
        name={selector}
      >
        {
          DATA.map(item =>
            <div
              className={`aside__${selector}__item`}
              key={item.id}
            >
              <label
                className={`aside__${selector}__item_label`}
              >
                <input
                  className={`aside__${selector}__item_input`}
                  type="radio"
                  name={selector}
                  value={item.value}
                  onChange={(event) => event.target.value === 'Model2' ? setGradient(true) : setGradient(false)}
                />
                {item.name}
              </label>
            </div>
          )

        }
        {
          gradient &&
          <div
            className={`aside__${selector}__gradient`}
          >
            <div
              className={`aside__${selector}__gradient_img`}
            >
              <img src={gradientImg} alt="gradientImage" />
            </div>
            <div className={`aside__${selector}__gradient_value`}>
              <span>0</span>
              <span>1</span>
            </div>
          </div>
        }
      </div>
    </div>
  )
}