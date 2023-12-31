import TicketForm from "@/app/(components)/TicketForm"

const getTicketById = async (id) => {
  const apiUrl = process.env.API_URL;
  const res = await fetch(`${apiUrl}/api/Tickets/${id}`,{
    cache: "no-store"
  })
  if(!res.ok){
    throw new Error('Failed to get Ticket.');
  }
  return res.json();
}

const TicketPage = async ({ params }) => {
  const  EDITMODE = params.id === "new" ? false : true;
  let updateTicketData = {};

  if(EDITMODE){
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
  }else{
    updateTicketData = {
      _id: "new"
    }
  }
  return (
    <>
    <div className="container mx-auto px-5 flex justify-center mt-5">
      <TicketForm ticket={updateTicketData} />
    </div>
    </> 
  )
}

export default TicketPage