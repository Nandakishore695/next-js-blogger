"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";


export default function Subscriptions() {
  const url = "https://next-js-blogger-beta.vercel.app/";
  const [apiResponse, setApiResponse] = useState([]);

  useEffect(() => {
    getSubscuribe();
  }, []);

  const getSubscuribe = async () => {
    try {
      const response = await axios.get(`${url}/api/email`);
      setApiResponse(response.data.response);
    } catch (error) {
      toast.error(error.message);
    }
  }

  const handleRemoveSubscription = async (idd) =>{
     try {
      const response = await axios.delete(`${url}/api/email/?idd=${idd}`);
      if(response.data.success === true){
        getSubscuribe()
      toast.success("Email Removed Successfully");

      } 
    } catch (error) {
      toast.error(error.message);
    } 
  }

  return (
    <div className="p-5">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="capitalize">All Subscription</h1>
      <div className="border-1 my-2 p-2">
        <div className="grid grid-cols-3 gap-4">
          <div className="uppercase p-2 font-bold">email Subscription</div>
          <div className="uppercase p-2 font-bold">date</div>
          <div className="uppercase p-2 font-bold">action</div>
        </div>
        {apiResponse.map((item, index) => {
          return (
            <div className="grid grid-cols-3 gap-4 my-4 border-b-1 lg:py-4" key={index}>
              <>
                <div className="lowercase p-2">{item.isEmailId}</div>
                <div className="capitalize p-2">{item.createDate}</div>
                <div className=""><button className="shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] border-black-600 border-2 px-4 py-2 rounded-2xl" onClick={()=>handleRemoveSubscription(item._id)}>Remove</button></div>
              </>
            </div>
          );
        })}
      </div>
    </div>
  );
}
