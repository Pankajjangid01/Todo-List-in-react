import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("incomplete");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, { text: task, completed: status === "completed" }]);
    setTask("");
    setStatus("incomplete");
    toast.success("Task added successfully!");
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    toast.error("Task removed!");
  };

  const toggleCompletion = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
    const taskStatus = tasks[index].completed ? "incompleted" : "completed";
    toast.info(`Task marked as ${taskStatus}!`);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  return (
    <div className="w-[500px]  mx-auto mt-10 p-6 bg-white rounded-lg shadow-md flex flex-col">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
      <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
      <div className="flex flex-col mb-4 gap-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
          className="p-2 border border-gray-300 rounded-md"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="incomplete">Incomplete</option>
          <option value="completed">Completed</option>
        </select>
        <button
          onClick={addTask}
          className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600 mx-auto"
        >
          Add Task
        </button>
      </div>
      <div className="mb-4 flex justify-center gap-4">
        <label className="flex items-center">
          <input
            type="radio"
            value="all"
            checked={filter === "all"}
            onChange={handleFilterChange}
            className="mr-2"
          />
          All
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            value="completed"
            checked={filter === "completed"}
            onChange={handleFilterChange}
            className="mr-2"
          />
          Completed
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            value="incomplete"
            checked={filter === "incomplete"}
            onChange={handleFilterChange}
            className="mr-2"
          />
          Incomplete
        </label>
      </div>
      <ul className="flex-grow overflow-y-auto">
        {filteredTasks.map((task, index) => (
          <li
            key={index}
            className={`p-2 border-b border-gray-300 flex justify-between items-center ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
          >
            <span
              onClick={() => toggleCompletion(index)}
              className="cursor-pointer"
            >
              {task.text}
            </span>
            <button
              onClick={() => removeTask(index)}
              className="ml-4 p-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
