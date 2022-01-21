import React, { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(
      "https://5c3755177820ff0014d92711.mockapi.io/users"
    );
    if (!response.ok) {
      throw Error("Произошла ошибка!");
    }
    const json = await response.json();
    setUsers(json);
  };
  return (
    <div>
      <button onClick={getUsers}>Получить список пользователей</button>
      {users.map((el) => {
        return (
          <div
            style={{
              marginBottom: 40,
              border: "1px solid black",
              textAlign: "center",
            }}
            key={el.id}
          >
            <p>{el.name}</p>
            <p>{el.email}</p>
            <p>{el.phone}</p>
            <p>{el.position}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
