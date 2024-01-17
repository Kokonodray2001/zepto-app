import React from "react";
import ListItems from "./ListItem";
export default function List() {
  const userArray = [];
  for (let i = 1; i <= 10; i++) {
    const userObject = {
      name: `User ${i}`,
      email: `user${i}@example.com`,
      image: `/assets/Images/img.jpeg`,
    };

    userArray.push(userObject);
  }
  return (
    <div className='shadow-md w-fit max-h-48 overflow-y-scroll scroll-p-2'>
      <ul>
        {userArray.map((user) => (
          <li key={"first"} className='hover:bg-slate-200'>
            <ListItems
              name={user.name}
              eamil={user.email}
              imgpath={user.image}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
