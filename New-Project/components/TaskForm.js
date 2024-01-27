const TaskForm = () => {
  return (
    <form className="">
      <div className="join w-full">
        <input
          className="input input-bordered join-item w-full bg-slate-950"
          placeholder="Type Here"
          type="text"
          name="content"
          required
        />
        <button type="submit" className="btn join-item btn-accent">
          create task
        </button>
      </div>
    </form>
  );
}
export default TaskForm