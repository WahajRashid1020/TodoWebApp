import React, { useEffect, useState } from "react";
import "./style.css";

const getLocalstotage = () => {
  const list = localStorage.getItem("todos");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const PracticeTodos = () => {
  const [writingdata, setwritingdata] = useState(""); //inputdata
  const [itemslist, setitemslist] = useState(getLocalstotage());
  const [isedited, setisedited] = useState("");
  const [toggle, settoggle] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(itemslist));
  }, [itemslist]);

  const editItem = (index) => {
    const editedItems = itemslist.find((current) => {
      return current.id === index;
    });
    setwritingdata(editedItems.name);
    setisedited(index);
    settoggle(true);
  };

  const addItems = () => {
    if (!writingdata) {
      alert("Please fill data");
    } else if (writingdata && toggle) {
      setitemslist(
        itemslist.map((current) => {
          if (current.id === isedited) {
            return { ...current, name: writingdata };
          }
          return current;
        })
      );
      setwritingdata([]);
      setisedited(null);
      settoggle(false);
    } else {
      const newItem = {
        id: new Date().getTime().toString(),
        name: writingdata,
      };
      setitemslist([...itemslist, newItem]);
      setwritingdata("");
    }
  };
  const deleteItem = (index) => {
    const updated = itemslist.filter((current) => {
      return current.id !== index;
    });
    setitemslist(updated);
  };
  const removeAll = () => {
    setitemslist([]);
  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todologo" />
            <figcaption>Add Your List Here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Item"
              className="form-control"
              value={writingdata}
              onChange={(e) => setwritingdata(e.target.value)}
            />
            {toggle ? (
              <i className="fa fa-edit add-btn" onClick={addItems}></i>
            ) : (
              <i className="fa fa-plus add-btn" onClick={addItems}></i>
            )}
          </div>
          <div className="showItems">
            {itemslist.map((current) => {
              return (
                <div className="eachItem" key={current.id}>
                  <h3>{current.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      onClick={() => editItem(current.id)}
                    ></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => deleteItem(current.id)}
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

export default PracticeTodos;
