// import { db } from '@vercel/postgres';
import { NextRequest, NextResponse } from "next/server";
import {Todo,newTodo,db,todoTable} from "@/lib/drizzle";
import {sql} from "@vercel/postgres"

export async function GET(request: NextRequest){
    
    
    try{
        await sql`CREATE TABLE IF NOT EXISTS Todos(id serial,Task varchar(255))`
        const res = await db.select().from(todoTable)

        console.log(res);

        //console.log(res)
        // console.log(res.rows.find((item) => item.id === 1));
        return NextResponse.json({data: res})
    }
    catch(err){
        console.log(err);
        console.log((err as {message:string}).message);
        return new NextResponse("error")
    }
}

export async function POST(request:NextRequest){
    const req = await request.json();
    try{
        if (req.task){
            const res = db.insert(todoTable).values({
                task: req.task
            }).returning();

            console.log(res);

            return NextResponse.json({message:"Data Added Successfully"})
        }
        else{
            throw new Error("Task field is required")
        }
    }
    catch(error){
        return NextResponse.json({message: (error as {message:string}).message})
    }
}