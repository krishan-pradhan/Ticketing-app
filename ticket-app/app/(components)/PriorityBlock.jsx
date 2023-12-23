import { faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const PriorityBlock = ({priority}) => {
  return (
    <>
        <div className='flex justify-start align-baseline'>
            <FontAwesomeIcon icon={faFire} className={`pr-1 ${priority > 1 ? "text-red-400":"text-slate:400"}`}/>
            <FontAwesomeIcon icon={faFire} className={`pr-1 ${priority > 2 ? "text-red-400":"text-slate:400"}`}/>
            <FontAwesomeIcon icon={faFire} className={`pr-1 ${priority > 3 ? "text-red-400":"text-slate:400"}`}/>
        </div>
    </>
  )
}

export default PriorityBlock