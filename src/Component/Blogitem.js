"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import toast, { Toaster } from 'react-hot-toast';
import Link from "next/link";
import axios from "axios";
import { assets } from "../../assets/assets";

const BlogItems = () => {
  const { arrow } = assets;
  const [emailId, setEmailId] = useState({"isEmailId":""});
  const [apiResponse, setApiResponse] = useState([]);
  const [filterResponse, setFilterResponse] = useState([]);
  const [types, setTypes] = useState("all");
  const url = "https://next-js-blogger-beta.vercel.app";

  useEffect(()=>{
    getBlogLits();
  },[]);
    
  const handleEmailSubscribe = (event) => {
    const {name, value } = event.target;
    setEmailId({...emailId, [name]: value});
  };

  const handleSubmitEmailSubscribe = async (event) => {
    event.preventDefault();
    try {
      if(!emailId.isEmailId){
      toast.error("Empty value pls provide");
      }
      else{     
        await axios.post(`${url}/api/email` , emailId,{headers: {'Content-Type': 'application/json'},});
        setEmailId({isEmailId:""});
        toast.success("You Have Email Subscribe");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  
  const getBlogLits = async() =>{
      try {
        const response = await axios.get(`${url}/api/blogs`);
        setApiResponse(response.data.response);
        setFilterResponse(response.data.response);
      } catch (error) {
        toast.error(error.message);
      }
  }

  const handleMenu = (type) => {
    setTypes(type)
    const result = apiResponse.filter((item) => item.blogCategory.toLowerCase() === type);
    type === "all" ? setFilterResponse(apiResponse):setFilterResponse(result);  
  }

  return (
    <>
      <main className="px-5 text-center my-8">
      <Toaster position="top-center" reverseOrder={false} />
        <h1 className="font-medium text-6xl ">Latest Blogs</h1>
        <p className="text-clip my-8">
          A powerful app for professional publishers to create, share, and grow
          a business around their content.
        </p>
        <form
          className="flex justify-center gap-4"
          action="post"
          onSubmit={handleSubmitEmailSubscribe}
        >
          <input
            type="text"
            placeholder="Enter your email..."
            className="border-solid border-2 p-4 shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] rounded-2xl focus:outline-0"
            name="isEmailId"
            onChange={handleEmailSubscribe}
            value={emailId.isEmailId}
            autoComplete="off"
          />
          <button className="border-solid border-2 p-4 shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] rounded-2xl cursor-pointer"type="submit">Subscribe</button>
        </form>
      </main>

      <section className="flex justify-center mt-8">
        <button className={`p-2 lg:p-4 mx-2  ${types === "all"? 'bg-black text-white' : 'bg-white text-black'} cursor-pointer rounded-2xl hover:border`} onClick={()=>handleMenu("all")}>All</button>
        <button className={`p-2 lg:p-4 mx-2  ${types === "reactjs"? 'bg-black text-white' : 'bg-white text-black'} cursor-pointer rounded-2xl hover:border`} onClick={()=>handleMenu("reactjs")}>React JS</button>
        <button className={`p-2 lg:p-4 mx-2  ${types === "nextjs"? 'bg-black text-white' : 'bg-white text-black'} cursor-pointer rounded-2xl hover:border`} onClick={()=>handleMenu("nextjs")}>Next JS</button>
        <button className={`p-2 lg:p-4 mx-2  ${types === "expressjs"? 'bg-black text-white' : 'bg-white text-black'} cursor-pointer rounded-2xl hover:border`} onClick={()=>handleMenu("expressjs")}>Express Js</button>
        <button className={`p-2 lg:p-4 mx-2  ${types === "git"? 'bg-black text-white' : 'bg-white text-black'} cursor-pointer rounded-2xl hover:border`} onClick={()=>handleMenu("git")}>Git</button>
      </section>
      <section className="grid lg:grid-cols-3 gap-4 p-5">
        {filterResponse.map((item, index) => {
          return (
          <div className="border-solid border-2 m-2 h-auto hover:shadow-[-8px_8px_5px_0px_rgba(0,0,0,1)] rounded" key={index}>
            <div className="p-4">
               <p className="underline underline-offset-8 text-2xl lg:text-lg lg:bg-black lg:w-30 lg:text-white p-2 my-2 flex items-center justify-center rounded-2xl capitalize">
              {item.blogCategory} 
            </p>
            <h2 className="my-2 py-2  text-2xl lg:text-4xl font-bold">{item.blogTitle}</h2>
            <p className="my-2 py-2 text-justify">{item.blogDescription}</p>
              <p className="flex gap-2 border-2 w-34 p-2 shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] rounded-2xl">
              <Link href={`/blogs/${item._id}`} >Read more </Link>
              {/* <Image src={arrow} alt="arrow" /> */}
            </p>
            </div>
          </div>
          )})}
      </section>
    </>
  );
};
export default BlogItems;