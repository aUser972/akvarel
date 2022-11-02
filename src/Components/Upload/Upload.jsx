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
          <div
            className='aside__form-upload__radio'
            key={type.id}
          >
            <input
              className="aside__form-upload__radio_input"
              id={type.name}
              type="radio"
              value={type.name}
              name='upload'
            />
            <label
              htmlFor={type.name}
            >
              {type.name}
            </label>
          </div>

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