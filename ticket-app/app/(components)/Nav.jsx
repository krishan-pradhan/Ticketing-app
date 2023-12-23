import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const Nav = () => {
  return (
    <>
    <nav className="flex gap-2  items-center">
            <Link href="/"> <FontAwesomeIcon icon={faHome} className="icon"/> </Link>
            <Link href="/TicketPage/new"> <FontAwesomeIcon icon={faTicket} className="icon"/> </Link>
    </nav>
    </>
  )
}

export default Nav