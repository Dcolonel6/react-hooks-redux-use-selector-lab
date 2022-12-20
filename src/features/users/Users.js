import React from "react";
// add any needed imports here
import { useSelector  } from "react-redux";

function Users() {
  const users = useSelector(state => state.users)
  return (
    <div>
      <ul>
        Users!
        {
          /* Write code here that displays the usernames of all users in the Redux store */
          users.map((user,index) => <li key={user.username+""+index}>{user.username}</li>)
        }
        {
          /* In addition, display the total number of users curently in the store */
          <span>{`Total Users: ${users.length}`}</span>
        }
      </ul>
    </div>
  );
}

export default Users;
