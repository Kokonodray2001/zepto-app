"use client";
import React, { useEffect, useState } from "react";
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
  const [userArray, setUserArray] = useState(users);
  const [selectedUser, setSelectedUser] = useState([]);
  const [searchArr, setSearchArr] = useState(users);
  const [keyCount, setKeyCount] = useState(0);
  useEffect(() => {
    setSearchArr(userArray);
  }, [userArray]);
  //function to update userArray
  const removeItem = (findUser) => {
    const updatedSelectedUsers =
      selectedUser.length > 0 ? [...selectedUser] : [];
    updatedSelectedUsers.push(findUser);
    setSelectedUser(updatedSelectedUsers);
    // console.log(updatedSelectedUsers);

    const updatedUsers = userArray.filter((user) => user !== findUser);
    //updatedUsers.splice(index, 1);
    setUserArray(updatedUsers);
  };

  //function to delete tags
  const removeTag = (findUser) => {
    const updateUserArray = userArray.length > 0 ? [...userArray] : [];
    updateUserArray.push(findUser);
    setUserArray(updateUserArray);
    // console.log(userArray);
    // const updatedSelectedUsers = [...selectedUser];
    // updatedSelectedUsers.splice(index, 1);
    const updatedSelectedUsers = selectedUser.filter(
      (user) => user !== findUser
    );
    setSelectedUser(updatedSelectedUsers);
    //console.log(selectedUser);
  };
  const [listVisible, setListVisible] = useState("invisible");

  //function to handle deletion by backSpace
  const handleBackSpaces = (e) => {
    if (e.key === "Backspace" && e.target.value === "") {
      setKeyCount((prevCount) => prevCount + 1);
    }
    if (keyCount + 1 === 2) {
      console.log("Two Backspaces pressed");
      // Reset the key count
      const LastTag = selectedUser[selectedUser.length - 1];
      if (LastTag != null) {
        removeTag(LastTag);
      }
      setKeyCount(0);
    }
  };

  const selectFromList = (query) => {
    setListVisible("visible");
    //  setSearchArr(userArray);
    //console.log(userArray);
    const search = userArray.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchArr(search);
  };

  return (
    <div className=' flex  flex-wrap w-6/12 items-center  border-b-2 border-b-blue-600'>
      {" "}
      {selectedUser.map((user, index) => (
        <Tag
          key={index}
          imagepath={user.image}
          userName={user.name}
          onCLickFunc={() => removeTag(user)}
        />
      ))}
      <div className='flex flex-col'>
        <input
          onKeyDown={handleBackSpaces}
          className=' flex border-0 min-h-min outline-none w-fit'
          onChange={(e) => {
            selectFromList(e.target.value);
          }}
          placeholder='Add people'
        ></input>
        <div
          className={`${listVisible} shadow-lg w-fit max-h-48 overflow-y-scroll scroll-p-2 absolute mt-8`}
        >
          <ul>
            {searchArr.map((user, index) => (
              <li
                key={index}
                className='hover:bg-slate-200 cursor-pointer'
                onClick={() => {
                  removeItem(user);
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
  );
}
