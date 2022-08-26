import React, { useState } from "react";
import "./style.css";
const Mytodo = () => {
  const [inputdata, setinputdata] = useState("");
  const [items, setitems] = useState([]);
  const addItem = () => {
    if (!inputdata) alert("Fill it");
    else setitems([...items, inputdata]);
    setinputdata("");
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todologo" />
            <figcaption>Add List Here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Item"
              className="form-control"
              value={inputdata}
              onChange={(e) => setinputdata(e.target.value)}
            />
            <i className="fa fa-plus add-btn" onClick={addItem}></i>
          </div>
          <div className="showItems">
            {items.map((currentItem, index) => {
              return (
                <div className="eachItem" key={index}>
                  <h3>{currentItem}</h3>
                  <div className="todo-btn">
                    <i className="far fa-edit add-btn"></i>
                    <i className="far fa-trash-alt add-btn"></i>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove all">
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mytodo;
