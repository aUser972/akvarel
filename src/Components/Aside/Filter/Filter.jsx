// import { useEffect, useState } from "react"
import { CheckboxFilter } from "../CheckboxFilter/CheckboxFilter"

export const Filter = () => {
  const VARIABLES = {
    title: 'Фильтры',
    filters: [
      { id: 1, name: 'Размещать в киосках' },
      { id: 2, name: 'Размещать в спортивных сооружениях' },
      { id: 3, name: 'Размещать в объектах культуры' },
      { id: 4, name: 'Размещать в жилых домах' }
    ]
  }

  return (
    <>
      <label className="aside__filter__title">{VARIABLES.title}</label>
      <CheckboxFilter DATA={VARIABLES.filters} selector="filter" />
    </>
  )
}