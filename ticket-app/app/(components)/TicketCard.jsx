import Link from "next/link"
import DeleteBlock from "./DeleteBlock"
import PriorityBlock from "./PriorityBlock"
import ProgressDisplay from "./ProgressDisplay"
import StatusDisplay from "./StatusDisplay"


const TicketCard = ({ticket}) => {
  const apiUrl = process.env.API_URL;
  const formatTimeStamp = (timestamp)=> {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", options);
    return formattedDate;
  }
  return (
    <>
      <div className="">
        <div className="mx-auto flex flex-col border border-slate-700 hover:shadow-xl hover:scale-105 duration-300 ease rounded gap-5 h-full py-10 px-5">
          <div className=" flex justify-between items-center">
            <PriorityBlock priority={ticket.priority}/> 
            <div>
              <DeleteBlock id={ticket._id}/>
            </div> 
          </div>
           <Link href={`${apiUrl}/TicketPage/${ticket._id}`} title="Click To edit" className="flex flex-col gap-3">
            <h4 className=" lg:text-2xl text-sm border-b border-slate-400 mb-2">{ticket.title}</h4>
            <p>{ticket.description}</p>
            <div className="flex items-center justify-between">
              <div className=" flex flex-col ">
                <p className="text-xs my-2">{formatTimeStamp(ticket.createdAt)}</p>       
                <ProgressDisplay progress={ticket.progress}/>
              </div>
              <div className="flex">
                <StatusDisplay status={ticket.status}/>
              </div> 
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default TicketCard