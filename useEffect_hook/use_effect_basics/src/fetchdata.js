import { useState, useEffect } from "react";
import './index.css'

const url = 'https://api.github.com/users'


const FetchData = () => {
    const [users, setUsers] = useState([])

    const getUsers = async () => {

        const response = await fetch(url)
        const users = await response.json()
        setUsers(users)
        // !setUsers(users) =>
        //  we cannot use  setUsers DIRECT becuase the work of state is to preserve the value and trigger the useEffect. on setusers(users) will make an infinite loop with useEffect as it will update the state of users and userEffect also trigger the getUsers method. Make sure to add antidependecy array to userEffect []

        console.log(users)

    }

    useEffect(() => {
        getUsers()
    }, [])
    return (

        <>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default FetchData;