export const Slider = () => {
  const VARIABLES = {
    title: "Пороговые значения"
  }
  const CONSUMERS = [
    {
      id: 1,
      title: 'мин.',
      value: 0
    },
    {
      id: 2,
      title: 'макс.',
      value: 1
    }
  ]

  return (
    <form className="aside__form-consumer">
      <h2 className="aside__form-consumer__title">{VARIABLES.title}</h2>
      <div className="aside__form-consumer__inputs">
        {
          CONSUMERS.map(consumer =>
            <label
              className="aside__form-consumer__inputs__label"
              key={consumer.id}
            >
              {consumer.title}
              <input
                className="aside__form-consumer__inputs__input"
                type="number"
                min='0'
                max='1'
                step='0.1'
                placeholder='0'
              />
            </label>
          )
        }
      </div>
    </form>
  )
}