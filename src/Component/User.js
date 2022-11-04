import React, { useState } from "react";

const User = () => {
  const [user, setUser] = useState({});

  const adduser = (event) => {
    event.preventDefault();
    console.log(user);

    fetch("http://localhost:5000/user/add", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((req) => req.json())
      .then((data) => {
        if (data.insertedId) {
          // alert("user added //succesfully");
        }
        console.log(data);
      });
  };

  const handelBlur = (event) => {
    // console.log(event);
    const name = event.target.name;
    const Value = event.target.value;
    // console.log(name, Value);
    const newUser = { ...user };
    newUser[name] = Value;
    setUser(newUser);
  };

  return (
    <div>
      <form onSubmit={adduser}>
        <input
          onBlur={handelBlur}
          type="text"
          placeholder="name"
          name="name"
        ></input>
        <br></br>
        <input
          onBlur={handelBlur}
          type="email"
          placeholder="email"
          name="email"
        ></input>
        <br></br>

        <input
          onBlur={handelBlur}
          type="text"
          placeholder="addrage"
          name="addrage"
        ></input>

        <br></br>
        <button> add user </button>
      </form>
    </div>
  );
};

export default User;
