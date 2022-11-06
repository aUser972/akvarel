import { useContext, useState } from "react";
import { CheckboxFilter } from "../CheckboxFilter/CheckboxFilter";
import { Slider } from "../Slider/Slider";
import { Upload } from "../Upload/Upload";
import { Context } from "../context";
import { Mode } from "../Mode/Mode";

export const Aside = () => {
  // Скелет для формирования отправки данных на бэк
  const dataStructure = {
    "AdministrativeDistricts": [],
    "Area": [],
    "objectType": [],
    "calculationModel": ""
  }
  const [dataFilter, setDataFilter] = useState(dataStructure)
  const { setData } = useContext(Context)
  const [activeAreaFilter, setActiveAreaFilter] = useState([{ id: 0, name: 'Выбрать все' }])
  // Данные фильтров
  const VARIABLES = {
    title: 'Название нашего крутого сервиса',
    submitValue: 'Рассчитать',
    titleFilter: 'Фильтры',
    titleDistrictsFilter: 'Административные округа',
    titleAreaFilter: 'Районы',
    titleMapMode: 'Режим отображения'
  };
  const DISTRICS_FILTER = [{
    id: 0,
    name: 'Выбрать все',
    area: []
  }, {
    id: 1,
    name: 'Северо-Западный',
    area: [{
      id: 1,
      name: 'Куркино',
    }, {
      id: 2,
      name: 'Митино'
    }, {
      id: 3,
      name: 'Покровское-Стрешнево'
    }, {
      id: 4,
      name: 'Северное Тушино'
    }, {
      id: 5,
      name: 'Строгино'
    }, {
      id: 6,
      name: 'Хорошево-Мневники'
    }, {
      id: 7,
      name: 'Щукино'
    }, {
      id: 8,
      name: 'Южное Тушино'
    }
    ]
  }, {
    id: 2,
    name: 'Северный',
    area: [{
      id: 9,
      name: 'Аэропорт'
    }
      , {
      id: 10,
      name: 'Беговой'
    }, {
      id: 11,
      name: 'Бескудниковский'
    }, {
      id: 13,
      name: 'Войковский'
    }, {
      id: 14,
      name: 'Восточное Дегунино'
    }, {
      id: 15,
      name: 'Западное Дегунино'
    }, {
      id: 16,
      name: 'Головинский'
    }, {
      id: 17,
      name: 'Дмитровский'
    }, {
      id: 18,
      name: 'Коптево'
    }, {
      id: 19,
      name: 'Левобережный'
    }, {
      id: 20,
      name: 'Молжаниновский'
    }, {
      id: 21,
      name: 'Савеловский'
    }, {
      id: 22,
      name: 'Сокол'
    }, {
      id: 23,
      name: 'Тимирязевский'
    }, {
      id: 24,
      name: 'Ховрино'
    }, {
      id: 25,
      name: 'Хорошевский'
    }]
  }, {
    id: 3,
    name: 'Северо-Восточный',
    area: [{
      id: 26,
      name: 'Алексеевский'
    }, {
      id: 27,
      name: 'Алтуфьевский'
    }, {
      id: 28,
      name: 'Бабушкинский'
    }, {
      id: 29,
      name: 'Бибирево'
    }, {
      id: 30,
      name: 'Бутырский'
    }, {
      id: 31,
      name: 'Лианозово'
    }, {
      id: 32,
      name: 'Лосиноостровский'
    }, {
      id: 33,
      name: 'Марфино'
    }, {
      id: 34,
      name: 'Марьина Роща'
    }, {
      id: 35,
      name: 'Останкинский'
    }, {
      id: 36,
      name: 'Отрадное'
    }, {
      id: 37,
      name: 'Ростокино'
    }, {
      id: 38,
      name: 'Свиблово'
    }, {
      id: 39,
      name: 'Северное Медведково'
    }, {
      id: 40,
      name: 'Южное Медведково'
    }, {
      id: 41,
      name: 'Северный'
    }, {
      id: 42,
      name: 'Ярославский'
    }]
  }, {
    id: 4,
    name: 'Западный',
    area: [{
      id: 43,
      name: 'Внуково'
    }, {
      id: 44,
      name: 'Дорогомилово'
    }, {
      id: 45,
      name: 'Крылатское'
    }, {
      id: 46,
      name: 'Кунцево'
    }, {
      id: 47,
      name: 'Можайский'
    }, {
      id: 48,
      name: 'Ново-Переделкино'
    }, {
      id: 49,
      name: 'Очаково-Матвеевское'
    }, {
      id: 50,
      name: 'Проспект Вернадского'
    }, {
      id: 51,
      name: 'Раменки'
    }, {
      id: 52,
      name: 'Солнцево'
    }, {
      id: 53,
      name: 'Тропарево-Никулино'
    }, {
      id: 54,
      name: 'Филевский Парк'
    }, {
      id: 55,
      name: 'Фили-Давыдково'
    }]
  }, {
    id: 5,
    name: 'Восточный',
    area: [{
      id: 66,
      name: 'Богородское'
    }, {
      id: 67,
      name: 'Вешняки'
    }, {
      id: 68,
      name: 'Восточное Измайлово'
    }, {
      id: 69,
      name: 'Северное Измайлово'
    }, {
      id: 70,
      name: 'Восточное'
    }, {
      id: 71,
      name: 'Гольяново'
    }, {
      id: 72,
      name: 'Ивановское'
    }, {
      id: 73,
      name: 'Измайлово'
    }, {
      id: 74,
      name: 'Косино-Ухтомский'
    }, {
      id: 75,
      name: 'Метрогородок'
    }, {
      id: 76,
      name: 'Новогиреево'
    }, {
      id: 77,
      name: 'Новокосино'
    }, {
      id: 78,
      name: 'Перово'
    }, {
      id: 79,
      name: 'Преображенское'
    }, {
      id: 80,
      name: 'Соколиная Гора'
    }, {
      id: 81,
      name: 'Сокольники'
    }]
  }, {
    id: 6,
    name: 'Центральный',
    area: [{
      id: 56,
      name: 'Арбат'
    }, {
      id: 57,
      name: 'Басманный'
    }, {
      id: 58,
      name: 'Замоскворечье'
    }, {
      id: 59,
      name: 'Красносельский'
    }, {
      id: 60,
      name: 'Мещанский'
    }, {
      id: 61,
      name: 'Пресненский'
    }, {
      id: 62,
      name: 'Таганский'
    }, {
      id: 63,
      name: 'Тверской'
    }, {
      id: 64,
      name: 'Хамовники'
    }, {
      id: 65,
      name: 'Якиманка'
    }]
  }, {
    id: 7,
    name: 'Юго-Западный',
    area: [{
      id: 82,
      name: 'Академический'
    }, {
      id: 83,
      name: 'Гагаринский'
    }, {
      id: 84,
      name: 'Зюзино'
    }, {
      id: 85,
      name: 'Коньково'
    }, {
      id: 86,
      name: 'Котловка'
    }, {
      id: 87,
      name: 'Ломоносовский'
    }, {
      id: 88,
      name: 'Обручевский'
    }, {
      id: 89,
      name: 'Северное Бутово'
    }, {
      id: 90,
      name: 'Южное Бутово'
    }, {
      id: 91,
      name: 'Теплый Стан'
    }, {
      id: 92,
      name: 'Черемушки'
    }, {
      id: 93,
      name: 'Ясенево'
    }]
  }, {
    id: 8,
    name: 'Южный',
    area: [{
      id: 94,
      name: 'Бирюлево Восточное'
    }, {
      id: 95,
      name: 'Бирюлево Западное'
    }, {
      id: 96,
      name: 'Братеево'
    }, {
      id: 97,
      name: 'Даниловский'
    }, {
      id: 98,
      name: 'Донской'
    }, {
      id: 99,
      name: 'Зябликово'
    }, {
      id: 100,
      name: 'Москворечье-Сабурово'
    }, {
      id: 101,
      name: 'Нагатино-Садовники'
    }, {
      id: 102,
      name: 'Нагатинский Затон'
    }, {
      id: 103,
      name: 'Нагорный'
    }, {
      id: 104,
      name: 'Орехово-Борисово Северное'
    }, {
      id: 105,
      name: 'Орехово-Борисово Южное'
    }, {
      id: 106,
      name: 'Царицыно'
    }, {
      id: 107,
      name: 'Чертаново Северное'
    }, {
      id: 108,
      name: 'Чертаново Центральное'
    }, {
      id: 109,
      name: 'Чертаново Южное'
    }]
  }, {
    id: 9,
    name: 'Юго-Восточный',
    area: [{
      id: 110,
      name: 'Выхино-Жулебино'
    }, {
      id: 111,
      name: 'Капотня'
    }, {
      id: 112,
      name: 'Кузьминки'
    }, {
      id: 113,
      name: 'Лефортово'
    }, {
      id: 114,
      name: 'Люблино'
    }, {
      id: 115,
      name: 'Марьино'
    }, {
      id: 116,
      name: 'Некрасовка'
    }, {
      id: 117,
      name: 'Нижегородский'
    }, {
      id: 118,
      name: 'Печатники'
    }, {
      id: 119,
      name: 'Рязанский'
    }, {
      id: 120,
      name: 'Текстильщики'
    }, {
      id: 121,
      name: 'Южнопортовый'
    }]
  }, {
    id: 10,
    name: 'Зеленоградский',
    area: [{
      id: 122,
      name: 'Крюково'
    }, {
      id: 123,
      name: 'Матушкино'
    }, {
      id: 124,
      name: 'Савёлки'
    }, {
      id: 125,
      name: 'Силино'
    }, {
      id: 126,
      name: 'Старое Крюково'
    }]
  }]
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
    { id: 1, name: 'Учитывать киоски' },
    { id: 2, name: 'Учитывать спортивные площадки' },
    { id: 3, name: 'Учитывать объекты культуры' },
    { id: 4, name: 'Учитывать данные моб. операторов' }
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
  // Подготовка результатов фильтров
  const dataPrepair = (event) => {
    setDataFilter({
      "AdministrativeDistricts": getResultFilter('.aside__districtsFilter__item_input'),
      "Area": getResultFilter('.aside__areaFilter__item_input'),
      "objectType": getResultFilter('.aside__filter__item_input'),
      "calculationModel": getModeFilter(),
      "minConsumers": getConsumers('min'),
      "maxConsumers": getConsumers('max')
    })
  }

  // Здесь надо произвести коннект с бэком и отправку dataFilter
  const handlerSubmit = (event) => {
    event.preventDefault()

    fetch("http://127.0.0.1:8000", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': ' application/json',
        'X-API-SERVER': '85499f9f'
      },
      body: JSON.stringify(dataFilter)
    })
      .then(response =>
        response.json()
      )
      .then(data =>
        setData(data)
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
            selector - класс, title - заголовок фильтра, dataFilter - для сохранения данных при выборе значения фильтра,
            setDataFilter - для изменения состояния данных при выборе значения фильтров
        */}
          <CheckboxFilter DATA={DISTRICS_FILTER} selector="districtsFilter" title={VARIABLES.titleDistrictsFilter} setActiveAreaFilter={setActiveAreaFilter} />
          <CheckboxFilter DATA={activeAreaFilter} selector="areaFilter" title={VARIABLES.titleAreaFilter} setActiveAreaFilter={setActiveAreaFilter} />
          <CheckboxFilter DATA={FILTER} selector="filter" title={VARIABLES.titleFilter} setActiveAreaFilter={setActiveAreaFilter} />
          <Mode DATA={MODS} selector="map-mod" title={VARIABLES.titleMapMode} />
          {/* Отправка формы фильтров */}
          <input
            className="aside__form__submit button_green"
            type="submit"
            value={VARIABLES.submitValue}
            onClick={dataPrepair}
          />
        </form>
        {/* Язычок */}
        <Slider />
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