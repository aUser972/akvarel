export const NumberPostamats = ({ title }) => {

  return (
    <div className="aside__number-posts">
      <h2 className="aside__number-posts__title">
        {title}
      </h2>
      <div className="aside__number-posts__inner">
        <input
          className="aside__number-posts__input"
          type="number"
          placeholder="0"
          min='0'
        />
      </div>
    </div>
  )
}