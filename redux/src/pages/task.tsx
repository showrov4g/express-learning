import Taskcard from "@/components/module/Taskcard"
import TaskModal from "@/components/module/TaskModal"
import { userAppSelector } from "@/redux/hook"
import { selectTask } from "@/redux/task/taskSlice"





const Task = () => {
  const tasks =  userAppSelector(selectTask)


  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <TaskModal/>
      {
        tasks.map((task,index)=>(<Taskcard key={index} task={task}></Taskcard>))
      }

    </div>
  )
}

export default Task