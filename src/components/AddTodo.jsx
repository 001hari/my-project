

function AddTodo() {
  return (
    <div className=" border-2 border-black h-96 m-5">
      <h2 className="m-2">Add Task</h2>
      <input className='w-1/2 m-1' type="text" />
      <button className="m-1" >submit</button>
      <h2 className="m-1">Your_Task</h2>
      <button className="m-1">Edit</button>
      <button className="m-1">Delet</button>
    </div>
    
  )
}

export default AddTodo
