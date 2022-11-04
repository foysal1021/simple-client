import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Updated = () => {
  const data = useLoaderData();
  const [updatedUser, setUpdatedUser] = useState(data);

  const UpdatedUser = (event) => {
    event.preventDefault();
    console.log(updatedUser);

    fetch(`http://localhost:5000/user/add/${data._id}`, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const updatedChange = (event) => {
    const name = event.target.name;
    const Value = event.target.value;
    const NewUpdatedUser = { ...updatedUser };
    NewUpdatedUser[name] = Value;
    setUpdatedUser(NewUpdatedUser);

    // console.log(name, Value);
  };

  return (
    <div>
      <h1> updated user </h1>
      <form onSubmit={UpdatedUser}>
        <input
          onChange={updatedChange}
          type="text"
          placeholder="name"
          name="name"
          defaultValue={data.name}
        ></input>
        <br></br>
        <input
          onChange={updatedChange}
          type="email"
          defaultValue={data.email}
          placeholder="email"
          name="email"
        ></input>
        <br></br>

        <input
          onChange={updatedChange}
          type="text"
          placeholder="addrage"
          defaultValue={data.addrage}
          name="addrage"
        ></input>

        <br></br>
        <button> Updated user </button>
      </form>
    </div>
  );
};

export default Updated;
