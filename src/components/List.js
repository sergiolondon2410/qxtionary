import React from "react";
import Option from "./Option";

function List() {
  return (
      <ul class="flex flex-col bg-gray-300 p-4">
        <Option />
        <Option />
        <Option />
        <Option />
      </ul>
  ); 
}

export default List;