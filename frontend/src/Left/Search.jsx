import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import UserGetAllUsers from '../context/UserGetAllUsers.jsx';
import useConversation from '../context/stateMangement/useConversation.js';

function Search() {
  const [search, setSearch] = useState("");
  const [allUser, loading] = UserGetAllUsers();
  const { setSelectedConversation } = useConversation();
  console.log(allUser);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    const conversation = allUser.find((User) => 
      User.fullname.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      alert("User not found");
    }
  };

  return (
    <div className="px-6 py-4">
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-3 border-gray-700">
          <label className="border-[1px] border-gray-700 bg-slate-900 rounded-lg p-3 flex items-center gap-2 w-[80%]">
            <input
              type="text"
              className="grow outline-none bg-transparent"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
          <button type="submit">
            <IoSearch className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
