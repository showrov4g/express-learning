import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"

const TaskModal = () => {
    const form = useForm();
    const onSubmit =()=>{};


    
    return (
        <div>
            <Dialog>
                <form>
                    <DialogTrigger asChild>
                        <Button variant="outline">Open Dialog</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Add task</DialogTitle>
                        </DialogHeader>
                        <Form {...form}>
                            <form action="" onSubmit={form.handleSubmit(onSubmit)}>
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Username</FormLabel>
                                            <FormControl>
                                                <Input placeholder="shadcn" {...field} />
                                            </FormControl>
                                            <FormDescription>This is your public display name.</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                            </form>
                            {/* =================== */}
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DialogClose>
                                <Button type="submit">Save changes</Button>
                            </DialogFooter>
                        </Form>
                    </DialogContent>
                </form>
            </Dialog>

        </div>
    )
}

export default TaskModal