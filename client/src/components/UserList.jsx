import React from "react";

const UserList = ({ users }) => (
  <div className="w-1/4 bg-gray-100 p-4 border-r">
    <h3 className="font-bold text-lg mb-2">Online Users</h3>
    <ul className="space-y-1">
      {users.map((user) => (
        <li key={user.id} className="text-gray-700">
          {user.username}
        </li>
      ))}
    </ul>
  </div>
);

export default UserList;
