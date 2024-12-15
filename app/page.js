"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (title === "") {
      alert("Add something in Task");
    } else {
      setMainTask([...mainTask, { title, desc }]);
      setTitle("");
      setDesc("");
    }
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = (
    <li className="text-gray-500 text-center">No Task Available</li>
  );

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li
          key={i}
          className="flex items-center justify-between mb-4 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="flex items-start flex-col w-2/3">
            <h5 className="text-2xl font-semibold text-gray-800">{t.title}</h5>
            <h6 className="text-lg text-gray-600">{t.desc}</h6>
          </div>
          <button
            onClick={() => deleteHandler(i)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-bold transition-colors"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="bg-black text-white p-6 text-3xl font-bold text-center shadow-lg">
        Kartik's TodoList
      </h1>
      <div className="max-w-2xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg">
        <form onSubmit={submitHandler} className="space-y-4">
          <input
            type="text"
            className="text-xl border border-gray-300 rounded-lg w-full px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter Title here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="text-xl border border-gray-300 rounded-lg w-full px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter Description here"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white w-full px-4 py-3 text-xl font-bold rounded-lg transition-colors">
            Add Task
          </button>
        </form>
      </div>
      <hr className="my-8" />
      <div className="max-w-2xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
        <ul className="space-y-4">{renderTask}</ul>
      </div>
    </div>
  );
};

export default page;
