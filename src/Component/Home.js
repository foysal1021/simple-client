import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const users = useLoaderData();
  const [displayUser, setDispalyUser] = useState(users);

  console.log(users);

  const itemsDelete = (user) => {
    fetch(`http://localhost:5000/user/add/${user._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaningUser = displayUser.filter(
            (usr) => usr._id !== user._id
          );
          setDispalyUser(remaningUser);
        }
      });
  };

  return (
    <div>
      <h1> Total User : {displayUser.length}</h1>
      <div className=" user-container">
        {displayUser.map((user) => (
          <div
            key={user._id}
            className="user-info"
            style={{ background: "teal", margin: "20px" }}
          >
            <p> user name :{user.name}</p>
            <p> user email :{user.email} </p>

            <Link to={`/updated/${user._id}`}>
              <button> updated </button>
            </Link>

            <button style={{ color: "red" }} onClick={() => itemsDelete(user)}>
              {" "}
              X{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
