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
        router.refresh();
        router.push("/");
    }
  return (
    <>
        <div>
            <form method="post" onSubmit={handleSubmit} action="" >
            <h3>{EDITMODE ? "Create Your Ticket" : "Update Your Ticket"} </h3>
                <div>
                    <label htmlFor="title">Title</label>
                    <input className=" text-zinc-900" type="text" id="title" name="title" onChange={handleChange} required={true} value={formData.title}/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea className=" text-zinc-900" type="text" id="description" name="description" onChange={handleChange} required={true} value={formData.description} rows={5}/>
                </div>
                <div>
                    <label htmlFor="category">Category</label>
                    <select className=" text-zinc-900" name="category" id="category" value={formData.category} onChange={handleChange} required={true}>
                        <option value="Hardware Problem">Hardware Problem</option>
                        <option value="Software Problem">Software Problem</option>
                        <option value="Project">Project</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="priority">1</label>
                    <input className=" text-zinc-900" type="radio" id="priority-1" name="priority" onChange={handleChange} value={1} checked={formData.priority == 1}/>
                </div>
                <div>
                    <label htmlFor="priority">2</label>
                    <input type="radio" id="priority-2" name="priority" onChange={handleChange} value={2} checked={formData.priority == 2}/>
                </div>
                <div>
                    <label htmlFor="priority">3</label>
                    <input  type="radio" id="priority-2" name="priority" onChange={handleChange} value={3} checked={formData.priority == 3}/>
                </div>
                <div>
                    <label htmlFor="progress">Progress</label>
                    <input className=" text-zinc-900" type="range" id="progress" name="progress" value={formData.progress} min="0" max="100" required={true} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="status">Status</label>
                    <select className=" text-zinc-900" name="status" id="status" value={formData.status} onChange={handleChange}>
                        <option value="not Started">Not Started</option>
                        <option value="Started"> Started</option>
                        <option value="done">Done</option>
                    </select>
                </div>
                <input value={EDITMODE ? "Create Ticket" : "Submit Ticket"} type="submit" className=" bg-green-500 p-2 hover:cursor-pointer"/>
            </form>
        </div>
    </>
  )
}

export default TicketForm;