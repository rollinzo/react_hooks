import React, { useState, useContext, useEffect } from "react"; // useContext may be unneeded

export default function UseFetch() {
  const [users, setUsers] = useState([]); // empty state
  const [albums, setAlbums] = useState([]);
  const [selectUser, setSelectUser] = useState(null);

  //   useEffect(() => {
  //     if (selectUser && albums) {
  //       console.log(`selectUser: ${selectUser}`);
  //       console.log(`getMyAlbums(): ${getMyAlbums(selectUser)}`);
  //     }
  //   }, [selectUser]);

  useEffect(() => {
    // here we're creating variables in which will be used as resources to pull
    const url = "https://jsonplaceholder.typicode.com/"; // website resource
    let resource = "users"; // metadata of specific resource ("users") to pull from

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

    //   Get album info
    resource = "albums";
    fetch(url + resource)
      .then((response) => response.json())
      .then((json) => {
        setAlbums(json);
        console.log(albums);
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

  //   Tried to use closure idea
  //   function UserList() {
  //     return (
  //       <div>
  //         {users.map((user) => (
  //           // Without the `key`, React will fire a key warning
  //           <User
  //             onClick={(user) => {
  //               return () => {
  //                 setSelectUser(user);
  //               };
  //             }}
  //             key={user.id}
  //             username={user.username}
  //           />
  //         ))}
  //       </div>
  //     );
  //   }

  //   Move click handler into <User /> as a prop
  //   Is this related to react stale closure issues?
  function UserList() {
    return (
      <div>
        {users.map((user) => (
          // Without the `key`, React will fire a key warning
          <User
            handler={() => {
              setSelectUser(user);
            }}
            // albums={getMyAlbums(user)}
            key={user.id}
            username={user.username}
          />
        ))}
      </div>
    );
  }

  function getMyAlbums(user) {
    const drillUserId = ({ myId: album }) => {
      return album.id;
    };
    const predicate = (user) => {
      return (album) => {
        return user.id === drillUserId(album);
      };
    };
    return albums.filter(predicate);
  }

  // BETTER EXAMPLE
  // Douglas Crockford - JavaScript the good parts
  // Might be related to React stale closure problem

  //   var add_the_handlers = function (nodes) {
  //     var helper = function (i) {
  //       return function (e) {
  //         alert(i);
  //       };
  //     };
  //     var i;
  //     for (i = 0; i < nodes.length; i += 1) {
  //       nodes[i].onclick = helper(i);
  //     }
  //   };

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
        {getMyAlbums().map((album) => {
          return <Album key={album.id} name={album.name} />;
        })}
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
  return <div onClick={myProps.handler}>{myProps.username}</div>;
}

function Album(props) {
  return (
    <>
      <div>Name: {props.name}</div>
      <div>ID: {props.id}</div>
    </>
  );
}
