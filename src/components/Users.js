import React from 'react';
import User from './User';
import Filter from './Filter';

const Users = () => {
  const [users, setUsers] = React.useState([]);
  const [filtered, setFiltered] = React.useState([]);

  let url = 'https://dummyjson.com/users';

  const fetchUsers = async () => {
    let res = await fetch(url);
    let data = await res.json();

    console.log(data);
    setUsers(data.users);
    setFiltered(data.users);
  };

  React.useEffect(() => {
    fetchUsers();
  }, [url]);

  const userFiltered = (userString) => {
    let filteredString = users.filter((el) => (el.firstName).toLowerCase().includes(userString));
    setFiltered(filteredString);
  };

  return (
    <div>
      <Filter inChange={userFiltered}/>
      {
        filtered.map((el) => 
        <div>
          <User name={el.firstName + ' ' + el.lastName} image={el.image}/>
        </div>)
      }
    </div>
  );
};
export default Users