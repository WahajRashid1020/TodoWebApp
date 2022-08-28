import React, { useEffect, useState } from "react";
import "./style.css";
const getlocalData = () => {
  const list = localStorage.getItem("Todos");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};
const Mytodo = () => {
  const [inputdata, setinputdata] = useState("");
  const [items, setitems] = useState(getlocalData());
  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (!inputdata) alert("Fill it");
    else {
      const newItem = {
        id: new Date().getTime().toString(),
        name: inputdata,
      };
      setitems([...items, newItem]);
      setinputdata("");
    }
  };
  const deleteItem = (index) => {
    const updatedItems = items.filter((current) => {
      return current.id !== index;
    });
    setitems(updatedItems);
  };
  const removeAll = () => {
    setitems([]);
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
            {items.map((currentItem) => {
              return (
                <div className="eachItem" key={currentItem.id}>
                  <h3>{currentItem.name}</h3>
                  <div className="todo-btn">
                    <i className="far fa-edit add-btn"></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => deleteItem(currentItem.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove all"
              onClick={removeAll}
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mytodo;
