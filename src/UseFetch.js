import React, { useState, useEffect } from "react";

export default function UseFetch() {
  const [users, setUsers] = useState([]); // empty state
  const [albums, setAlbums] = useState([]);
  const [selectUser, setSelectUser] = useState(null);





    useEffect(() => {
      if ((selectUser != null) && (albums.length > 0)) {
        console.log(selectUser);

      }
    }, [selectUser]);

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

  //   Move click handler into <User /> as a prop
  //   Is this related to react stale closure issues?
  const UserList = () =>  {

    return (
      <div>
        {users.map((user) => (
          // Without the `key`, React will fire a key warning
          <User
            handler={() => {
              setSelectUser(user);
              }
           }
            // albums={getMyAlbums(user)}
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

  const predicate = (user) => {
    return (album) => {
      // return user.id === drillUserId(album);
      return user.id === album.userId;
    };
  }
  let myAlbums = albums.filter(predicate(selectUser));
  return (
    <>
     <div>User id: {selectUser.username}</div>

     <h1>{myAlbums.length} Albums!</h1>
     <button
        onClick={() => {
        setSelectUser(null);
        }}> Back to User List
     </button>
     {myAlbums.map((album) => {
         return <Album key={album.id} id ={album.id} title={album.title} />;
       })}

    </>);

}


  return (
    <div>
      <h1>Running Fetch..</h1>
      <ToggleDisplay />
    </div>
  ); // end-user prompt)
} //END useFetch1 component




function User(myProps) {
  return <div onClick={myProps.handler}>{myProps.username}</div>;
}

function Album(props) {
  return (
    <>
      <div>Name: {props.title}</div>
      <div>ID: {props.id}</div>
    </>
  );
}
