// import { useEffect, useState } from "react"
import { CheckboxFilter } from "../CheckboxFilter/CheckboxFilter"

export const Filter = () => {
  const VARIABLES = {
    title: 'Фильтры',
    filters: [
      { id: 1, name: 'Учитывать киоски' },
      { id: 2, name: 'Учитывать спортивные площадки' },
      { id: 3, name: 'Учитывать объекты культуры' },
      { id: 4, name: 'Учитывать данные моб. операторов' }
    ]
  }

  return (
    <>
      <label className="aside__filter__title">{VARIABLES.title}</label>
      <CheckboxFilter DATA={VARIABLES.filters} selector="filter" />
    </>
  )
}