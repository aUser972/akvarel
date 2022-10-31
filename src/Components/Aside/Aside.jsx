import { CheckboxFilter } from "../CheckboxFilter/CheckboxFilter";
import { Slider } from "../Slider/Slider";
import { Upload } from "../Upload/Upload";

export const Aside = () => {
  const VARIABLES = {
    title: 'Название нашего крутого сервиса',
    submitValue: 'Рассчитать'
  };
  const DISTRICTS = [{
    id: 0,
    name: 'Выбрать все'
  }, {
    id: 1,
    name: 'Куркино'
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
  }, {
    id: 9,
    name: 'Северный {САО}'
  }, {
    id: 10,
    name: 'Аэропорт'
  }, {
    id: 11,
    name: 'Беговой'
  }, {
    id: 12,
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
    name: 'Восточный'
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
    id: 127,
    name: 'Внуковское'
  }, {
    id: 128,
    name: 'Воскресенское'
  }, {
    id: 129,
    name: 'Десёновское'
  }, {
    id: 130,
    name: 'Кокошкино'
  }, {
    id: 131,
    name: 'Марушкинское'
  }, {
    id: 132,
    name: 'Московский'
  }, {
    id: 133,
    name: 'Мосрентген'
  }, {
    id: 134,
    name: 'Рязановское'
  }, {
    id: 135,
    name: 'Сосенское'
  }, {
    id: 136,
    name: 'Филимонковское'
  }, {
    id: 137,
    name: 'Щербинка'
  }, {
    id: 138,
    name: 'Вороновское'
  }, {
    id: 139,
    name: 'Киевский'
  }, {
    id: 140,
    name: 'Кленовское'
  }, {
    id: 141,
    name: 'Краснопахорское'
  }, {
    id: 142,
    name: 'Михайлово-Ярцевское'
  }, {
    id: 143,
    name: 'Новофедоровское'
  }, {
    id: 144,
    name: 'Первомайское'
  }, {
    id: 145,
    name: 'Роговское'
  }, {
    id: 146,
    name: 'Троицк'
  }, {
    id: 147,
    name: 'Щаповское'
  }];
  const ADMIN_DISTRICTS = [{
    id: 0,
    name: 'Выбрать все'
  }, {
    id: 1,
    name: 'Северо-Западный'
  }, {
    id: 2,
    name: 'Северный'
  }, {
    id: 3,
    name: 'Северо-Восточный'
  }, {
    id: 4,
    name: 'Западный'
  }, {
    id: 5,
    name: 'Центральный'
  }, {
    id: 6,
    name: 'Восточный'
  }, {
    id: 7,
    name: 'Юго-Западный'
  }, {
    id: 8,
    name: 'Южный'
  }, {
    id: 9,
    name: 'Юго-Восточный'
  }, {
    id: 10,
    name: 'Зеленоградский'
  }, {
    id: 11,
    name: 'Новомосковский'
  }, {
    id: 12,
    name: 'Троицкий'
  }]
  const MODS = [
    { id: 0, name: 'Выбрать все' },
    { id: 1, name: 'Точки' },
    { id: 2, name: 'Секторы' },
    { id: 3, name: 'Тепловая карта' }
  ]
  const FILTER = [
    { id: 1, name: 'Учитывать киоски' },
    { id: 2, name: 'Учитывать спортивные площадки' },
    { id: 3, name: 'Учитывать объекты культуры' },
    { id: 4, name: 'Учитывать данные моб. операторов' }
  ]

  const handlerOpen = () => {

    const asideClose = document.querySelector('.aside__close')
    const aside = document.querySelector('.aside')
    if (aside.classList.value.includes('open')) {
      aside.classList.remove('open')
      asideClose.classList.remove('open')
    } else {
      aside.classList.add('open')
      asideClose.classList.add('open')
    }
  }
  return (

    <aside className="aside open">
      <div className="aside__inner">

        <h1 className="aside__title">{VARIABLES.title}</h1>
        <form className="aside__form">
          <CheckboxFilter DATA={ADMIN_DISTRICTS} selector="admin-district" title='Административные округа' />
          <CheckboxFilter DATA={DISTRICTS} selector="district" title='Районы' />
          <CheckboxFilter DATA={FILTER} selector="filter" title='Фильтры' />
          <CheckboxFilter DATA={MODS} selector="map-mod" title='Режим отображения' />
          <input
            className="aside__form__submit button_green"
            type="submit"
            value={VARIABLES.submitValue} />
        </form>
        <Slider />
        <Upload />
      </div>
      <div
        className="aside__close open"
        onClick={handlerOpen}
      >
        <span></span>
      </div>
    </aside>

  )
}