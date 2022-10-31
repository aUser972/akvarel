export const Slider = () => {

  return (
    <form className="aside__form-slider">
      <input
        type="range"
        min='0'
        max='100'
        step='2'
        value='50' />
    </form>
  )
}