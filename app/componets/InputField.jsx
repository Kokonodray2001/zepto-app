"use client";
import React, { useState } from "react";
import ListItem from "./ListItem";
import Tag from "./Tag";
export default function InputField() {
  //sample data
  const users = [];
  for (let i = 1; i <= 10; i++) {
    const userObject = {
      name: `User ${i}`,
      email: `user${i}@example.com`,
      image: `/assets/Images/img.jpeg`,
    };

    users.push(userObject);
  }
  const [searchArr, setSearchArr] = useState(users);
  const [userArray, setUserArray] = useState(users);
  const [selectedUser, setSelectedUser] = useState([]);

  //function to update userArray
  const removeItem = (index) => {
    const updatedSelectedUsers =
      selectedUser.length > 0 ? [...selectedUser] : [];
    updatedSelectedUsers.push(userArray[index]);
    setSelectedUser(updatedSelectedUsers);
    console.log(updatedSelectedUsers);

    const updatedUsers = [...userArray];
    updatedUsers.splice(index, 1);
    setUserArray(updatedUsers);

    setSearchArr(updatedUsers);
  };

  //function to delete tags
  const removeTag = (index) => {
    const updateUserArray = userArray.length > 0 ? [...userArray] : [];
    updateUserArray.push(selectedUser[index]);
    setUserArray(updateUserArray);

    const updatedSelectedUsers = [...selectedUser];
    updatedSelectedUsers.splice(index, 1);
    setSelectedUser(updatedSelectedUsers);

    setSearchArr(updateUserArray);
  };
  const [listVisible, setListVisible] = useState("invisible");

  const selectFromList = (query) => {
    setListVisible("visible");
    setSearchArr(userArray);
    const search = searchArr.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchArr(search);
  };

  return (
    <div>
      <div className=' flex items-center  justify-evenly border-b-2 border-b-blue-600'>
        {" "}
        {selectedUser.map((user, index) => (
          <Tag
            key={index}
            imagepath={user.image}
            userName={user.name}
            onCLickFunc={() => removeTag(index)}
          />
        ))}
        <div className='flex flex-col'>
          <input
            className=' flex border-0 min-h-min outline-none w-96'
            onChange={(e) => {
              selectFromList(e.target.value);
            }}
            placeholder='Add people'
          ></input>
          <div
            className={`${listVisible} shadow-lg w-fit max-h-48 overflow-y-scroll scroll-p-2 absolute mt-8`}
          >
            <ul>
              {userArray.map((user, index) => (
                <li
                  key={index}
                  className='hover:bg-slate-200 cursor-pointer'
                  onClick={() => {
                    removeItem(index);
                  }}
                >
                  <ListItem
                    name={user.name}
                    eamil={user.email}
                    imgpath={user.image}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
