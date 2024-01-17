"use client";
import React, { useState } from "react";
import List from "./List";

export default function InputField() {
  const [listVisible, setListVisible] = useState("invisible");
  const selectFromList = (e) => {
    setListVisible("visible");
  };
  return (
    <div>
      <input
        className=' flex border-0 min-h-min outline-none w-96 border-b-2 border-b-blue-600'
        onChange={(e) => {
          selectFromList(e);
        }}
      ></input>
      <div className={`${listVisible}`}>
        <List />
      </div>
    </div>
  );
}
