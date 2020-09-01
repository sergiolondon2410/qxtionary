import React from "react";
import Option from "./Option";

function List() {
  return (
    <div>
      <ul class="flex flex-col bg-gray-300 p-4">
        <Option />
        <li class="border-gray-400 flex flex-row mb-2">
          <div class="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">B.</div>
            <div class="flex-1 pl-1 mr-16">
              <div class="font-medium">Training</div>
              <div class="text-gray-600 text-sm">1h</div>
            </div>
            <div class="text-gray-600 text-xs">10:00 AM</div>
          </div>
        </li>
        <li class="border-gray-400 flex flex-row mb-2">
          <div class="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">C.</div>
            <div class="flex-1 pl-1 mr-16">
              <div class="font-medium">Study</div>
              <div class="text-gray-600 text-sm">4h</div>
            </div>
            <div class="text-gray-600 text-xs">1:00 PM</div>
          </div>
        </li>
        <li class="border-gray-400 flex flex-row mb-2">
          <div class="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">D.</div>
            <div class="flex-1 pl-1 mr-16">
              <div class="font-medium">Study</div>
              <div class="text-gray-600 text-sm">4h</div>
            </div>
            <div class="text-gray-600 text-xs">1:00 PM</div>
          </div>
        </li>
      </ul>
    </div>
  ); 
}

export default List;