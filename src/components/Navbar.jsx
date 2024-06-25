import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
//https://youtu.be/SBuZSalHLe0?si=AlJ8ivXdlKzV5slB&t=2575
// function Navbar() {
//   const [Task, setTask] = useState("");
//   const [AllTask, setAllTask] = useState(() => {
//     const localValue = localStorage.getItem("AllTask");
//     if (localValue == null) return [];

//     return JSON.parse(localValue);
//   });
//   const [Finished, setFinished] = useState(() => {
//     const value = localStorage.getItem("Finished");
//     if (!value) return true;
//     return JSON.parse(value);
//   });

//   useEffect(() => {
//     localStorage.setItem("AllTask", JSON.stringify(AllTask));
//     // console.log(localStorage);
//   }, [AllTask]);

//   const handleAdd = () => {
//     // console.log("Task is ${Task}");
//     if (Task === "") return;
//     setAllTask([...AllTask, { id: uuidv4(), Task, isCompleted: false }]);
//     setTask("");

//     // console.log(AllTask);
//   };
//   const handleEdit = (id) => {
//     let editString = AllTask.filter((work) => work.id === id);
//     setTask(editString[0].Task);
//     let newTask = AllTask.filter((task) => task.id !== id);
//     setAllTask(newTask);
//   };

//   const handleDelet = (id) => {
//     // console.log(id);
//     // let newTask = [...AllTask];
//     let newTask = AllTask.filter((task) => task.id !== id);
//     setAllTask(newTask);
//   };
//   const handleInput = (e) => {
//     setTask(e.target.value);
//     // console.log(e.target.value);
//     // console.log("task " + Task);
//   };
//   const toggle = (e) => {
//     const id = e.target.getAttribute("data-id");
//     // console.log(`Toggling task with id: ${id}`);
//     const index = AllTask.findIndex((item) => {
//       // console.log(item);
//       return item.id === id;
//     });
//     // console.log("index is : ${index}");
//     let newTasks = [...AllTask];
//     newTasks[index].isCompleted = !newTasks[index].isCompleted;
//     // console.log(`newTask tasks: `, newTasks);
//     setAllTask(newTasks);
//   };

//   const togglFinish = () => {
//     setFinished(!Finished);
//     localStorage.setItem(`Finished`, !Finished);
//     console.log(localStorage.getItem(`Finished`));
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       handleAdd();
//     }
//   };

//   return (
//     <div className="">
//       <div className="items-center flex justify-center flex-grow mx-auto my-2">
//         <h1 className=" text-5xl font-serif font-bold underline">ToDo List</h1>
//       </div>

//       <div className="  min-h-[85vh] mx-5">
//         <div>
//           <h2 className="m-2 font-bold font-serif text-2xl underline">Add Task</h2>
//           <input
            
//             onKeyDown={handleKeyDown}
//             onChange={handleInput}
//             value={Task}
//             className="w-1/2 m-2 font-serif "
//             type="text"
//           />
//           <button
//             onClick={handleAdd}
//             className="m-2 font-serif text-white hover:bg-blue-600 bg-blue-500 font-bold rounded-xl p-3 py-1"
//           >
//             Add
//           </button>
//         </div>
//         <div className="finish font-serif mx-2 font-bold">
//           <input
//             type="checkbox"
//             onClick={togglFinish}
//             checked={Finished}
//             className="font-bold"
//           />{" "}
//           Finished Task
//         </div>
//         <h2 className="m-2 font-bold text-xl font-serif underline">Your_Tasks</h2>
//         <div className="tasks">
//           {AllTask.length === 0 && (
//             <div className="font-bold mx-2 ">No Task Currently</div>
//           )}
//           {AllTask.map((item) => {
//             return (
//               (Finished || !item.isCompleted) && (
//                 <div className=" task  flex flex-wrap mx-2 my-3 " key={item.id}>
//                   <input
//                     className=""
//                     onChange={toggle}
//                     data-id={String(item.id)}
//                     checked={item.isCompleted}
//                     type="checkbox"
//                     name=""
//                     id=""
//                   />

//                   <div
//                     className={` break-words w-1/2 font-serif font-medium mx-2 ${
//                       item.isCompleted ? "line-through" : ""
//                     }`}
//                   >
//                     {item.Task}
//                   </div>
//                   <div className="buttons">
//                     <button
//                       onClick={() => handleEdit(item.id)}
//                       className="mx-1 font-serif border border-black text-white  hover:bg-blue-600 bg-blue-500  font-bold text-xs rounded-xl p-3 py-1"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelet(item.id)}
//                       className="mx=1 font-serif border border-black text-white  hover:bg-blue-600 bg-blue-500  text-xs font-bold rounded-xl p-3 py-1"
//                     >
//                       Delet
//                     </button>
//                   </div>
//                 </div>
//               )
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }


function Navbar() {
  const [Task, setTask] = useState("");
  const [AllTask, setAllTask] = useState(() => {
    const localValue = localStorage.getItem("AllTask");
    if (localValue === null) return [];

    return JSON.parse(localValue);
  });
  const [Finished, setFinished] = useState(() => {
    const value = localStorage.getItem("Finished");
    return value ? JSON.parse(value) : true; // default to true if localStorage value is not present
  });

  useEffect(() => {
    localStorage.setItem("AllTask", JSON.stringify(AllTask));
  }, [AllTask]);

  const handleAdd = () => {
    if (Task.trim() === "") return; // prevent adding empty tasks
    setAllTask([...AllTask, { id: uuidv4(), Task, isCompleted: false }]);
    setTask("");
  };

  const handleEdit = (id) => {
    const editString = AllTask.find((work) => work.id === id);
    if (editString) {
      setTask(editString.Task);
      const newTask = AllTask.filter((task) => task.id !== id);
      setAllTask(newTask);
    }
  };

  const handleDelet = (id) => {
    const newTask = AllTask.filter((task) => task.id !== id);
    setAllTask(newTask);
  };

  const handleInput = (e) => {
    setTask(e.target.value);
  };

  const toggle = (e) => {
    const id = e.target.getAttribute("data-id");
    const index = AllTask.findIndex((item) => item.id === id);
    let newTasks = [...AllTask];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setAllTask(newTasks);
  };

  const togglFinish = () => {
    setFinished(!Finished);
    localStorage.setItem("Finished", !Finished);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="relative">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="fixed z-0 w-full h-full object-cover"
        style={{ minWidth: "100%", minHeight: "100%" }}
      >
        <source src="/black.mp4" type="video/mp4" />
        {/* Add additional source elements for broader compatibility */}
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className="text-5xl font-bold underline">ToDo List</h1>
        <div className="min-h-[85vh] mx-5">
          <div>
            <h2 className="m-2 font-bold text-2xl underline">Add Task</h2>
            <input
              onKeyDown={handleKeyDown}
              onChange={handleInput}
              value={Task}
              className="w-1/2 m-2 text-gray-950"
              type="text"
            />
            <button
              onClick={handleAdd}
              className="m-2 text-white hover:bg-blue-600 bg-blue-500 font-bold rounded-xl p-3 py-1"
            >
              Add
            </button>
          </div>
          <div className="finish mx-2 font-bold">
            <input
              type="checkbox"
              onClick={togglFinish}
              checked={Finished}
              className="mr-2"
            />
            Finished Task
          </div>
          <h2 className="m-2 font-bold text-xl underline">Your Tasks</h2>
          <div className="tasks">
            {AllTask.length === 0 && (
              <div className="font-bold mx-2">No Task Currently</div>
            )}
            {AllTask.map((item) => (
              (Finished || !item.isCompleted) && (
                <div className="task flex flex-wrap mx-2 my-3" key={item.id}>
                  <input
                    className=""
                    onChange={toggle}
                    data-id={item.id}
                    checked={item.isCompleted}
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <div
                    className={`break-words w-1/2 font-medium mx-2 ${
                      item.isCompleted ? "line-through" : ""
                    }`}
                  >
                    {item.Task}
                  </div>
                  <div className="buttons">
                    <button
                      onClick={() => handleEdit(item.id)}
                      className="mx-1 border border-black text-white hover:bg-blue-600 bg-blue-500 font-bold text-xs rounded-xl p-3 py-1"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelet(item.id)}
                      className="mx-1 border border-black text-white hover:bg-blue-600 bg-blue-500 font-bold text-xs rounded-xl p-3 py-1"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Navbar;
