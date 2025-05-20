import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useMemo } from "react";


const Paste = () => {
  const pastes = useSelector((state) => state.paste.Pastes);
  const dispatch = useDispatch();

  const [searchTerm,setSearchTerm] = useState('');


  return(
    <div>
        <input type="search" placeholder="search here" value={searchTerm} 
        onChange={(e)=>setSearchTerm(e.target.value)} className="p-2 rounded-2xl min-w-[600px] mt-5" />
    </div>
  )
}

export default Paste    
