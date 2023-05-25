"use client"
import React,{ useState } from "react";
import Image from "next/image";
import { newTodo } from "@/lib/drizzle";
import { useRouter } from "next/navigation";


export default function AddTodo(){

    const [task,setTask] = useState<newTodo | null>(null)
    const {refresh} = useRouter();

    const handleSubmit = async () => {
        try{
            if(task){
                const res = await fetch ("/api/todo",{
                    method:"POST",
                    body:JSON.stringify({
                        task: task.task
                    })
                })

                console.log(res.ok)
                refresh()
                setTask({task: ""})
            }
        }
        catch(err){
            console.log("error")
        }
    }

    return(
        <div>
            <form className="w-full flex  ">
                <input onChange={(e) => setTask({task: e.target.value})} className="w-full px-4 py-2 border rounded-full mx-4 focus:outline-secondary" type="text" />
                <button type="button" onClick={handleSubmit} className="shrink-0 mx-4 bg-gradient-to-b from-primary to-secondary rounded-full p-4">
                    <Image src="/Vector.png" alt="vector" width="20" height="20" />
                </button> 
            </form>
        </div>
    )
}