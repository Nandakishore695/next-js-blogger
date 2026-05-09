"use client";
// import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { assets } from "../../../../assets/assets";
import { useParams } from "next/navigation";

export default function BlogView() {
    const [apiResponse, setApiResponse] = useState({});
    const params= useParams();
    const id = params.id 
    const { profile_icon, facebook_icon, twitter_icon, googleplus_icon
 } = assets;
  

  useEffect(()=>{
      getBlogVeiw();
  },[id]);

  const getBlogVeiw = async () =>{
    try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_LOCALHOST_URL}/api/blogs/?id=${id}`);
    setApiResponse(response.data.response);      
    console.log(response.data.response);      
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <article className="text-center items-center my-8">
      <h1 className="text-4xl font-bold text-wrap my-8">{apiResponse?.blogTitle}</h1>
      {/* <Image src={profile_icon} className="m-auto mt-8"/> */}
      <p>Alex Bennett</p>
      <div className="my-8">
        {/* <Image src={apiResponse.image} width={800} className="border-4 border-neutral-300 m-auto"/> */}
        <h2 className="mt-4 text-2xl px-[440px] text-justify font-bold">Introduction :</h2>
        <p className="mt-4 px-[440px] text-justify"> 
          {apiResponse?.blogDescription}
        </p>
      </div>
      <div className="px-[440px] my-8">
        <p className="text-start font-bold">Share this article on social media</p>
        <ul className="flex text-start my-4">
          {/* <li><Image src={facebook_icon}/></li>
          <li><Image src={twitter_icon}/></li>
          <li><Image src={googleplus_icon}/></li> */}
        </ul>
      </div>
    </article>
  );
}
