"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/navigation";

const DeleteBlock = ({id}) => {
  const router = useRouter();

  const deleteTicket = async () =>{
    const res = await fetch(`api/Tickets/${id}`,{
      method: "DELETE",
    });
    if(res.ok){
      router.refresh();
    }
  };
  return (
    <>
        <FontAwesomeIcon onClick={deleteTicket} icon={faTrashAlt} className=" text-red-400 hover:cursor-pointer hover:text-red-300"/>
    </>
  )
}

export default DeleteBlock