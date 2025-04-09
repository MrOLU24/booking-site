const Addone = ({ counter, setCounter }) => {
  const handleClick = () => setCounter(counter + 1);

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={handleClick}>Increment +</button>
    </div>
  );
};

export default Addone;
