export const Mode = ({ DATA, selector, title }) => {

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
                />
                {item.name}
              </label>
            </div>
          )
        }
      </div>
    </div>
  )
}