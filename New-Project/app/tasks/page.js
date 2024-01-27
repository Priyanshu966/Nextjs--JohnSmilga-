import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import Link from "next/link";

const TasksPage = () => {
  return (
    <div className='max-w-6xl px-6 mx-auto'>
      <div className="max-w-xl mx-auto  py-10 md:mx-0">
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
};
export default TasksPage;
