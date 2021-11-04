import React, { useState, useContext, useEffect } from "react"; // useContext may be unneeded

export default function UseFetch() {
  const [users, setUsers] = useState([]); // empty state
  const [albums, setAlbums] = useState([]);
  const [selectUser, setSelectUser] = useState(null);

  useEffect(() => {
    console.log(`selectUser: ${selectUser}`);
  }, [selectUser]);

  useEffect(() => {
    // here we're creating variables in which will be used as resources to pull
    const url = "https://jsonplaceholder.typicode.com/"; // website resource
    const resource = "users"; // metadata of specific resource ("users") to pull from

    // using fetch function to get the url and resource
    fetch(url + resource)
      /* where does this come from?

            Hypothesis: collecting a data file from site that happens to be response.json
            and shifting through the data items, then logging them to display on console
             */
      .then((response) => response.json())
      // console display of information
      .then((json) => {
        setUsers(json);
      })
      .catch((myError) => {
        console.log(myError);
      });
  }, []); // don't fire useEffect every time data changes

  // const MYJSX = () => {
  //     //
  //     return users.length > 0 ? <User username = {users[0]["username"]} /> : <div>No users available</div>;
  // }

  // const UserList = () => {
  //     return ()
  // }

  function UserList() {
    return (
      <div>
        {users.map((user) => (
          // Without the `key`, React will fire a key warning
          <User
            onClick={(user) => {
              setSelectUser(user);
            }}
            key={user.id}
            username={user.username}
          />
        ))}
      </div>
    );
  }

  const DisplayUsers = () => {
    if (users.length > 0) {
      return <UserList />;
    } else {
      return <div>No users available</div>;
    }
  };

  const ToggleDisplay = (props) => {
    // return <div>TODO: toggle list of users versus user + their albums</div>;
    return <>{selectUser ? <DisplayUserAlbums /> : <DisplayUsers />}</>;
  };

  const DisplayUserAlbums = () => {
    return (
      <>
        <div>User id: {selectUser.username}</div>
        <button
          onClick={() => {
            setSelectUser(null);
          }}
        >
          User list
        </button>
      </>
    );
  };

  return (
    <div>
      <h1>Running Fetch..</h1>
      <ToggleDisplay />
    </div>
  ); // end-user prompt)
}

function User(myProps) {
  return <div>{myProps.username}</div>;
}
