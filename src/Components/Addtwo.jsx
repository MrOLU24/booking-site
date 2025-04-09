
const Addtwo = ({ count, setCount}) => {
    const handleClick = () => setCount(count - 1);
  
    return (
      <div>
        <h2>{count}</h2>
        <button onClick={handleClick}>Increment -</button>
      </div>
    );
  };
  
  export default Addtwo;
  