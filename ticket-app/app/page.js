import TicketCard from "./(components)/TicketCard"

const getTickets = async () =>{
  const apiUrl = process.env.API_URL;
  try{
    const res = await fetch(`${apiUrl}/api/Tickets`,{
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
    <div className="container mx-auto px-5 mt-5 ">
      {/* {tickets && uniqueCategories?.map((uniqueCategory, index) =>(
        <div key={index} className="lg:mb-8 mb-4 lg:pb-8 pb-4 border-b border-b-slate-700">
          <h2 className="lg:text-3xl text-2xl mb-2">{uniqueCategory}</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tickets.filter((ticket) => ticket.category === uniqueCategory ).map((filteredTicked, itemIndex) =>(
              <TicketCard id={itemIndex} key={itemIndex} ticket={filteredTicked} />
            ))}
          </div>
        </div>
      ))} */}
      <div>home page</div>
    </div>
    </>
  )
}

export default Dashboard