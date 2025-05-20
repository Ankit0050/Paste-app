import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value,setValue]=useState('');

  const [searchParams,setSearchParams]=useSearchParams();
  const pasteId=searchParams.get("pasteId");

  const dispatch=useDispatch();

  function createPaste(){
    const paste={
        title:title,
        content:value,
        _id:pasteId || Date.now().toString(36), 
        createAt:new Date().toISOString(),
    }
    if(pasteId){
        //update
        dispatch(updateToPastes(paste));
    }
    else{
        //create
        dispatch(addToPastes(paste));
    }

    //after creation
    setTitle("");
    setValue("");
    setSearchParams({});
  }

  return (
    <div>
    <div className="flex flex-row gap-5 place-content-between ">
      <input 
        type="text"
        placeholder="enter title here"
        className="p-1 rounded-2xl mt-4 place-content-evenly w-[68%] pl-5 "
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        
      />

      <button onClick={createPaste} className="p-2 rounded-2xl mt-4 place-content-evenly" >
        {pasteId ?"Update My Paste"
            : "Create My Paste"}
      </button>
    </div>
    <div>
        <textarea className="mt-8 rounded-2xl min-w-[500px]  p-4" 
        name="text" value={value} placeholder="enter your content here"  onChange={(e)=>setValue(e.target.value)} rows={20}></textarea>
    </div>
    </div>
  );
};

export default Home;
