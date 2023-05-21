import { Todo } from "@/lib/drizzle"

const getData = async () => {
    try {
        const res = await fetch("http://127.0.0.1:3000/api/todo", {
            method: "GET",
            cache:"no-store",
            headers: {
                "Content-type": "appliation/json"
            }
        })
        if (!res.ok) {
            throw new Error("FAiled to fetch data")
        }
        const result = await res.json()
        
        return result
    } catch (err) {
        console.log(err)
    }
}




export default async function TodoList() {

    const res: { data: Todo[] } = await getData()


    return (
        <>
            {
                res.data.map((item) => {
                    return (
                        <div className="flex gap-x-4 px-3 py-3 items-center rounded-lg bg-white/80 my-4 mx-4 ">
                            {/* Circle */}
                            <div className="h-3 w-3 bg-secondary rounded-full"></div>
                            {/* Task */}
                            <p className="text-lg font-medium">{item.task}</p>
                        </div>
                    )
                })
            }

        </>
    )
}