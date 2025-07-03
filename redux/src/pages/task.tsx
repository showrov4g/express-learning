import { UserAppSelector } from "@/redux/hook"
import { selectTask } from "@/redux/task/taskSlice"


const {}= UserAppSelector(selectTask)

const task = () => {
  return (
    <div>task</div>
  )
}

export default task