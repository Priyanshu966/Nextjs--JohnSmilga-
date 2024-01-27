import prisma from "@/utils/db";

const TaskList = async () => {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  // tasks.length = 0;

  if(tasks.length === 0){
    return <div>
      <h2>There is no task to display...</h2>
    </div>
  }

  return <ul className='grid gap-y-6 py-4'>
    {tasks.map((task) =>{
      const {content,id} = task;
      return (
        <li
          key={id}
          className="w-full border-2 border-slate-600 h-12 flex items-center px-5 justify-between rounded-md"
        >
          <h2>{content}</h2>
          <div className='flex space-x-6'>
            <button className="badge badge-success flex">edit</button>
            <button className="badge badge-error">delete</button>
          </div>
        </li>
      );
    })}
    
  </ul>;
};
export default TaskList;
