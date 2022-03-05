import './QuessRequest.scss';

function QuessRequest({ initialValue, changeValue }) {
  return (
    <input
      className="quess__input"
      type="text"
      placeholder="Please, enter your name"
      value={initialValue}
      onChange={(e) => changeValue(e.target.value)}
    />
  );
}

export default QuessRequest;
