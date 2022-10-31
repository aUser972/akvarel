export const Upload = () => {
  const VARIABLES = {
    submit: 'Выгрузить'
  }
  const UPLOAD_TYPE = [
    { id: 1, name: 'PDF' },
    { id: 2, name: 'Excel' }
  ]
  return (
    <form className="aside__form-upload">
      {
        UPLOAD_TYPE.map(type =>
          <p
            className="aside__form-upload__item"
            key={type.id}
          >
            <input
              className="aside__form-upload__radio"
              type="radio"
              key={type.id}
              value={type.name}
            />
            {type.name}
          </p>
        )
      }
      <input
        className="aside__form-upload__submit button_green"
        type="submit"
        placeholder={VARIABLES.submit}
      />
    </form>
  )
}