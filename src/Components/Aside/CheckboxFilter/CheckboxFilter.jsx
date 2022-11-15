export const CheckboxFilter = ({ DATA, selector, title, setActiveAreaFilter }) => {

  //При клике на текст возле инпута провоцируется клик по инпуту
  const handlerClickItem = (event) => {
    if (event.target.nodeName === 'DIV') {
      event.target.children[0].click()
    }
  }

  // Получение районов из данных
  const getArea = name => {
    const district = DATA.filter(district => district.name === name)
    return district[0].area
  }

  // Обработчик клика по фильтрам
  const handlerChange = (event) => {
    const item = event.target
    const allInputs = document.querySelectorAll(`.${item.className}`)
    // Выбор всех эелементов при клике на 'Выбрать все'
    if (item.defaultValue === 'Выбрать все') {
      allInputs.forEach(input => {
        input.checked = item.checked ? true : false
      })
    }

    // Добавление районов при выборе административного округа
    if (item.name === 'districtsFilter') {
      // const all = document.querySelector(`.${item.className}`)
      const area = [DATA[0]]
      allInputs.forEach(input => {
        if (input.checked && input.defaultValue !== 'Выбрать все') area.push(...getArea(input.defaultValue))
      })
      setActiveAreaFilter(area)
    }
  }
  return (
    // Раздел фильтра
    <div className={`aside__${selector}`}>
      {/* Заголовок раздела фильтра */}
      <h2 className="aside__filter__title">{title}</h2>

      {/* Оболочка раздела фильтра */}
      <div
        className={`aside__${selector}__inner`}
        name={selector}
        onChange={handlerChange}
      >
        {
          // Перебор массива с данными по фильтрам
          // Если административные округа не выбраны выводим "Выберите административный округ"
          DATA.length === 1 ? <p style={{ fontSize: '12px' }}>Выберите административный округ</p> :
            DATA.map(item =>
              <div
                className={`aside__${selector}__item`}
                key={item.id}
                onClick={handlerClickItem}
              >
                <input
                  className={`aside__${selector}__item_input`}
                  type="checkbox"
                  key={item.id}
                  name={selector}
                  value={item.name}

                />
                {item.name}
              </div>
            )
        }
      </div>
    </div>
  )
}