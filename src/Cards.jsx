const Cards = (props) => {
  let index = props.index;

  return (
    <>
      <div className="card">
        <p>Roll: {props.el.rollValue}</p>
        <p>Name: {props.el.nameValue}</p>
        <button className="deleteBtn" onClick={() => props.deleteHandler(index)}>X</button>
      </div>
    </>
  );
};

export default Cards;
