import { useContext, useState } from "react";
import { CheckboxFilter } from "./CheckboxFilter/CheckboxFilter";
import { Consumer } from "./Consumer/Consumer";
import { Upload } from "./Upload/Upload";
import { PointsContext } from "../PointsContext";
import { Mode } from "./Mode/Mode";
import { NumberPostamats } from "./NumberPostamats/NumberPostamats";
import { SelectRadius } from "./SelectRadius/SelectRadius";
import { CustomCircle } from "../CustomCircleContext";
import { DISTRICS_FILTER } from "./districsAPI"

export const Aside = () => {
  // Скелет для формирования отправки данных на бэк
  const dataStructure = {
    "AdministrativeDistricts": [],
    "Area": [],
    "objectType": [],
    "calculationModel": ""
  }
  const [dataFilter, setDataFilter] = useState(dataStructure)
  const { points, setPoints } = useContext(PointsContext)
  const [activeAreaFilter, setActiveAreaFilter] = useState([{ id: 0, name: 'Выбрать все' }])
  const { customCircle, setCustomCircle } = useContext(CustomCircle)
  // Данные фильтров
  const VARIABLES = {
    title: 'MOSTOMAT FROM RBF',
    submitValue: 'Рассчитать',
    titleNumberPosts: 'Количество постаматов',
    titleFilter: 'Объекты для размещения',
    titleDistrictsFilter: 'Административные округа',
    titleAreaFilter: 'Районы',
    titleMapMode: 'Режим отображения'
  };

  const MODS = [
    {
      id: 1,
      name: 'Точки',
      value: 'Model1'
    },
    {
      id: 2,
      name: 'Тепловая карта',
      value: 'Model2'
    }
  ]
  const FILTER = [
    { id: 1, name: 'МФЦ' },
    { id: 2, name: 'Спортивный объект' },
    { id: 3, name: 'Библиотека' },
    { id: 4, name: 'Жилой дом' },
    { id: 5, name: 'Киоск' },
    { id: 6, name: 'Объект культуры' }
  ]


  // Скрытие/открытие бокового меню
  const handlerOpen = () => {
    const asideClose = document.querySelector('.aside__close')
    const aside = document.querySelector('.aside')
    aside.classList.toggle('open')
    asideClose.classList.toggle('open')
  }

  // Поиск по классу объекта и проверка состояния: выбран элемент или нет(checked)
  const getResultFilter = (selector) => {
    const inputs = document.querySelectorAll(selector)
    const descriptionArray = []
    inputs.forEach(input => {
      if (input.checked && input.value !== 'Выбрать все') descriptionArray.push(input.value)
    })
    return descriptionArray
  }
  const getModeFilter = () => {
    const inputs = document.querySelectorAll('.aside__map-mod__item_input')
    let result = ''
    inputs.forEach(input => {
      if (input.checked) result = input.value
    })
    return result
  }

  const getConsumers = (type) => {
    const consumers = document.querySelectorAll('.aside__form-consumer__inputs__input')
    return type === 'min' ? (consumers[0].value === '' ? '0' : consumers[0].value) : (consumers[1].value === '' ? '1' : consumers[1].value)
  }

  const getNumberPosts = () => {
    const numberPosts = document.querySelector('.aside__number-posts__input')
    return numberPosts.value ? numberPosts.value : '0'
  }
  // Подготовка результатов фильтров
  const dataPrepair = () => {
    if (customCircle) {
      setDataFilter({
        ...customCircle,
        objectType: getResultFilter('.aside__filter__item_input'),
        maxConsumers: getConsumers('max'),
        minConsumers: getConsumers('min'),
        numberPosts: getNumberPosts(),
      })
    } else {
      setDataFilter({
        "AdministrativeDistricts": getResultFilter('.aside__districtsFilter__item_input'),
        "Area": getResultFilter('.aside__areaFilter__item_input'),
        "objectType": getResultFilter('.aside__filter__item_input'),
        "calculationModel": getModeFilter(),
        "minConsumers": getConsumers('min'),
        "maxConsumers": getConsumers('max'),
        "numberPosts": getNumberPosts()
      })
    }
  }

  // Здесь надо произвести коннект с бэком и отправку dataFilter
  const handlerSubmit = (event) => {
    event.preventDefault()
    const URL = customCircle ? '/circle' : '/district'
    customCircle && setCustomCircle(null)

    fetch(`http://46.173.219.98:8001${URL}`, {
      method: "POST",
      headers: {
        'Content-Type': ' application/json',
      },
      body: JSON.stringify(dataFilter)
    })
      .then(response =>
        response.json()
      )
      .then(data =>
        setPoints({
          ...points,
          data
        })
      );
  }

  return (
    // Боковое меню
    <aside className="aside open">
      <div className="aside__inner">
        <h1 className="aside__title">{VARIABLES.title}</h1>
        <form className="aside__form" onSubmit={handlerSubmit}>
          {/* Компоненты создания разделов фильтров
            Передаем: DATA - массив названий районов, административных округов, фильтров...,
            selector - класс, title - заголовок фильтра, dataFilter - для сохранения данных при выборе значения фильтра
        */}
          <CheckboxFilter DATA={DISTRICS_FILTER} selector="districtsFilter" title={VARIABLES.titleDistrictsFilter} setActiveAreaFilter={setActiveAreaFilter} />
          <CheckboxFilter DATA={activeAreaFilter} selector="areaFilter" title={VARIABLES.titleAreaFilter} setActiveAreaFilter={setActiveAreaFilter} />
          <SelectRadius />
          <CheckboxFilter DATA={FILTER} selector="filter" title={VARIABLES.titleFilter} setActiveAreaFilter={setActiveAreaFilter} />
          <NumberPostamats title={VARIABLES.titleNumberPosts} />
          <Consumer />
          <Mode DATA={MODS} selector="map-mod" title={VARIABLES.titleMapMode} />
          {/* Отправка формы фильтров */}
          <input
            className="aside__form__submit button_green"
            type="submit"
            value={VARIABLES.submitValue}
            onClick={dataPrepair}
          />
        </form>
        {/* Выгрузка */}
        <Upload />
      </div>
      {/* Кнопка скрытия бокового меню */}
      <div
        className="aside__close open"
        onClick={handlerOpen}
      >
        <span></span>
      </div>
    </aside>

  )
}
