"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]); // for submiting a data  and render
    console.log(mainTask);
    settitle("");
    setdesc("");
  };

  const deletHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setMainTask(copytask);
  };

  let renderTask = <h2>No Task Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-8">
          <div className="flex items-center justify-between mb-5 w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-lg font-medium">{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deletHandler(i);
            }}
            className="bg-red-700 text-white rounded py-2 px-4 font-bold"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white p-5  text-5x1 font-bold text-center">
        My Todo List
      </h1>

      <form onSubmit={submitHandler} className="text-center">
        <input
          type="text"
          className="text-2x1 border-zinc-700 border-4 m-8 px-4 py-2 text"
          placeholder="Enter Task here"
          value={title} //two way binding//
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        <input
          type="text"
          className="text-2x1 border-zinc-700 border-4 m-8 px-4 py-2"
          placeholder="Enter Description here"
          value={desc} //two way binding//
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />

        <button className="bg-black text-white px-4 py-3 text-2x1 font-blod rounded m-5 ">
          Add Task
        </button>
      </form>

      <hr />

      <div className="p-8 bg-slate-200">
        <ul className=" text-center">{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
