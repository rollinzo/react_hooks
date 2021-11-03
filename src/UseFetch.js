import React, {useState, useContext, useEffect} from "react"; // useContext may be unneeded

export default function UseFetch () {
    const [users, setUsers] = useState([]); // empty state
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
            .then((json) => {setUsers((json));})
            .catch((myError) => {console.log(myError)});
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
              {users.map(user => (
              // Without the `key`, React will fire a key warning
              <User key={user.id} username = {user.username}/>
            ))}
          </div>
        );
      }

    const MyJsx = () => {
        if (users.length > 0) {
            return <UserList />
        } else {
            return <div>No users available</div>;
        }
    }

    return (<div>
                <h1>Running Fetch..</h1>
                <UserList />
            </div>); // end-user prompt)
        
}

function User(myProps) {
    return <div>{myProps.username}</div>;
}
