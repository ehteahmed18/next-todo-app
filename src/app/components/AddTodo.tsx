"use client"
import React,{ useState } from "react";
import Image from "next/image";
import { newTodo } from "@/lib/drizzle";


export default function AddTodo(){

    const [task,setTask] = useState<newTodo | null>(null)

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
            }
        }
        catch(err){
            console.log("error")
        }
    }

    return(
        <div>
            <form className="w-full flex gap-x-4">
                <input onChange={(e) => setTask({task: e.target.value})} className="w-full px-2 py-2 border rounded-full focus:outline-secondary" type="text" />
                <button onClick={handleSubmit} className="shrink-0 bg-gradient-to-b from-primary to-secondary rounded-full p-4">
                    <Image src="/Vector.png" alt="vector" width="20" height="20" />
                </button> 
            </form>
        </div>
    )
}