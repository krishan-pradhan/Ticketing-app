"use client";

import { useRouter } from "next/navigation"
import React, { useState } from "react";

const TicketForm = ({ticket}) => {
    const EDITMODE = ticket._id === "new"? false: true;
    const router = useRouter();

    const startingTicketData = {
        title: "",
        description: "",
        priority: 1,
        progress: 0,
        status: "not started",
        category: "Hardware Problem"
    }

    if(EDITMODE){
        startingTicketData["title"] = ticket.title;
        startingTicketData["description"] = ticket.description;
        startingTicketData["priority"] = ticket.priority;
        startingTicketData["progress"] = ticket.progress;
        startingTicketData["status"] = ticket.status;
        startingTicketData["category"] = ticket.category;
    }
    const [formData, setFormData] = useState(startingTicketData);
    
    const handleChange = (e) =>{
        const value = e.target.value;
        const name = e.target.name;
        setFormData((prevState) => ({ ...prevState, [name]: value, }))
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(EDITMODE){
            const res = await fetch(`/api/Tickets/${ticket._id}`,{
                method: "PUT",
                body: JSON.stringify({formData}),
                "content-type": "application/json"
            });
            if(!res.ok){
                throw new Error("failed to Update ticket");
            }
        }else{
            const res = await fetch("/api/Tickets",{
                method: "POST",
                body: JSON.stringify({formData}),
                "content-type": "application/json"
            });
            if(!res.ok){
                throw new Error("failed to create ticket");
            }
        }
        router.push("/");
        router.refresh();
    }
  return (
    <>
        <div className=" lg:w-[800px] bg-slate-700 px-10 py-5 w-full">
            <form method="post" onSubmit={handleSubmit} action="" className="flex flex-col gap-5 items-start">
            <h2 className="lg:text-3xl text-2xl font-semibold">{EDITMODE ? "Create Your Ticket" : "Update Your Ticket"} </h2>
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="title">Title</label>
                    <input className=" text-zinc-900 pl-4 py-3 rounded border border-sky-200" type="text" id="title" name="title" onChange={handleChange} required={true} value={formData.title} placeholder="Title"/>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="description">Description</label>
                    <textarea className=" text-zinc-900  rounded border border-sky-200" type="text" id="description" name="description" onChange={handleChange} required={true} value={formData.description} rows={5} placeholder=""/>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="category">Category</label>
                    <select className=" text-zinc-900 pl-4 py-3 rounded border border-sky-200" name="category" id="category" value={formData.category} onChange={handleChange} required={true}>
                        <option value="Hardware Problem">Hardware Problem</option>
                        <option value="Software Problem">Software Problem</option>
                        <option value="Project">Project</option>
                    </select>
                </div>
                <div>
                    <h5>Priority</h5>
                    <div className="flex gap-2">
                        <label htmlFor="priority">1</label>
                        <input className=" text-zinc-900" type="radio" id="priority-1" name="priority" onChange={handleChange} value={1} checked={formData.priority == 1}/>
                    </div>
                    <div className="flex gap-2">
                        <label htmlFor="priority">2</label>
                        <input type="radio" id="priority-2" name="priority" onChange={handleChange} value={2} checked={formData.priority == 2}/>
                    </div>
                    <div className="flex gap-2">
                        <label htmlFor="priority">3</label>
                        <input  type="radio" id="priority-2" name="priority" onChange={handleChange} value={3} checked={formData.priority == 3}/>
                    </div>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="progress">Progress {formData.progress}%</label>
                    <input className=" text-zinc-900" type="range" id="progress" name="progress" value={formData.progress} min="0" max="100" required={true} onChange={handleChange} />
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="status">Status</label>
                    <select className=" text-zinc-900 pl-4 py-3 rounded border border-sky-200" name="status" id="status" value={formData.status} onChange={handleChange}>
                        <option value="not Started">Not Started</option>
                        <option value="Started"> Started</option>
                        <option value="done">Done</option>
                    </select>
                </div>
                <input value={EDITMODE ? "Create Ticket" : "Submit Ticket"} type="submit" className=" bg-green-500 p-2 hover:cursor-pointer rounded"/>
            </form>
        </div>
    </>
  )
}

export default TicketForm;