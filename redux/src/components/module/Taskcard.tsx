import { CheckCheck, Trash2 } from "lucide-react"
import { Button } from "../ui/button"
import type { ITask } from "@/types";
import { cn } from "@/lib/utils";
import TaskModal from "./TaskModal";

interface IProps{
  task: ITask;
}

const Taskcard = ({task}: IProps) => {
  return (
    <div>
          <div className="border px-5 py-3 rounded-md ">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
         
            <div className={cn('size-3 rounded-full',{
              "bg-green-500": task.priority=== "low",
              "bg-yellow-500": task.priority=== "medium",
              "bg-red-500": task.priority=== "high",
            })}>
                <h1>{task.title}</h1>
                
            </div>
            <div className='flex gap-3 items-center'>
                <Button variant={"link"} className="p-0 text-red-500">
                        <Trash2/>
                </Button>
                <CheckCheck/>
            </div>
        </div>
      </div>
      <p className="mt-5">{task.description}</p>
    </div>
    </div>
  )
}

export default Taskcard