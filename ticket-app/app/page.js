import TicketCard from "./(components)/TicketCard"

const getTickets = async () =>{
  try{
    const res = await fetch("http://localhost:3000/api/Tickets",{
      cache: "no-store"
    });
    return res.json();
  }catch(error){
   console.log("Failed to get Ticket", error)
  }
}
const Dashboard = async () => {
  const { tickets } = await getTickets();
  
  const uniqueCategories = [
    ...new Set(tickets?.map(({category}) => category)),
  ]
  return (
    <>
    <div className="container mx-auto">
      {tickets && uniqueCategories?.map((uniqueCategory, index) =>(
        <div key={index} className="mb-4">
          <h2>{uniqueCategory}</h2>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {tickets.filter((ticket) => ticket.category === uniqueCategory ).map((filteredTicked, itemIndex) =>(
              <TicketCard id={itemIndex} key={itemIndex} ticket={filteredTicked} />
            ))}
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default Dashboard