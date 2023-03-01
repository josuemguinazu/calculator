export const Buttons = ({ btn, handleClick }) => {
  const isNumber = (value) => {
    return isNaN(value);
  };

  return (
    <div onClick={() => handleClick(btn)} className={`btn ${isNumber(btn) ? 'number' : 'operator'}`}>
      <div>{btn}</div>
    </div>
  );
};
