import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const Nav = () => {
  return (
    <>
    <div className=" border-b border-slate-700 bg-slate-300">
      <div className="container mx-auto px-5">
        <nav className="flex gap-5  items-center justify-center py-3 ">
                <Link href="/"> <FontAwesomeIcon icon={faHome} className="icon text-2xl"/> </Link>
                <Link href="/TicketPage/new"> <FontAwesomeIcon icon={faTicket} className="icon text-2xl"/> </Link>
        </nav>
      </div>
    </div>
    </>
  )
}

export default Nav