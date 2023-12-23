import React from 'react'

const StatusDisplay = ({ status }) => {
  let getColor = (status) =>{
    let color = "text-gray-700";
    switch (status.toLowerCase()) {
      case "done":
        color= "bg-green-600";
        return color;
      case "started":
        color="bg-yellow-600";
        return color;
      case "not started":
        color="bg-red-600"
        return color;
    }
    return color;
  }
  return (
    <>
        <span className={`inline-block rounded-full py-1 text-xs font-semibold text-white px-3 ${getColor(status)}`}>
            {status}
        </span>
    </> 
  )
}

export default StatusDisplay