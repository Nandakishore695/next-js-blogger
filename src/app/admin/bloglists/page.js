"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import imag from "../../../../assets/Minus-icon.png"

export default function Bloglists() {
    const [apiResponse, setApiResponse] = useState([]);
  const url = "https://next-js-blogger-beta.vercel.app/";
  
  useEffect(()=>{
    getBlogLits();
  },[]);

  const getBlogLits = async() =>{
      try {
        const response = await axios.get(`${url}/api/blogs`)
        setApiResponse(response.data.response);
      } catch (error) {
        toast.error(error.message);
      }
  }

  const handleRemoveBlogList = async (idd) =>{
     try {
      const response = await axios.delete(`${url}/api/blogs/?idd=${idd}`);
      if(response.data.success === true){
        getBlogLits()
      toast.success("Email Removed Successfully");
      } 
    } catch (error) {
      toast.error(error.message);
    } 
  }

  return (
    <div className="p-5">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="capitalize">All Blogs</h1>
      <div className="border-1 my-2 p-2">
        <div className="grid grid-cols-4 lg:gap-4 lg:text-start text-center">
          <div className="uppercase lg:p-2 font-bold">Category</div>
          <div className="uppercase lg:p-2 font-bold">blogtitle</div>
          <div className="uppercase lg:p-2 font-bold">date</div>
          <div className="uppercase lg:p-2 font-bold">action</div>
        </div>
        {apiResponse.map((item, index)=> {
          return (
            <div className="grid grid-cols-4 lg:gap-4 my-4 border-b-1 lg:py-4" key={index}>
          <div className="capitalize p-2">{item.blogCategory}</div>
          <div className="capitalize p-2">{item.blogTitle}</div>
          <div className="capitalize p-2">{item.createDate}</div>
          <div className=""><button className="shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] border-black-600 border-2 px-4 py-2 rounded-2xl" onClick={()=>handleRemoveBlogList(item._id)}>Remove</button></div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
