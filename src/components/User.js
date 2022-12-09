import React from "react";

const User = ({ users }) => {
  return (
    <>
      <h1>Users</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <ul style={{ listStyle: "none", color: "red" }}>
              <li>{user.address.street}</li>
              <li>{user.address.suite}</li>
              <li>{user.address.city}</li>
            </ul>
            {/* <ul>
              {user.address.map((add) => {
                return <li>{add.street}</li>;
              })}
            </ul> */}

            {/* {user.address.map((add) => {
              return (
                <ul>
                  <li>{add.street}</li>
                  <li>{add.suite}</li>
                </ul>
              );
            })} */}
          </div>
        );
      })}
    </>
  );
};

export default User;
