"use client"
import React, { useState } from "react";
import Image from "next/image";
import { assets } from "../../../../assets/assets";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";

export default function AddBlogs() {
  const { upload_area} = assets;    
  const options = [
    { value: 'reactjs', label: 'React Js' },{ value: 'nextjs', label: 'Next Js' },
    { value: 'expressjs', label: 'Express Js' },{ value: 'git', label: 'Git' },]; 
  const [data,  setData] = React.useState({blogImage: upload_area, blogTitle: "", blogDescription: "", blogCategory: "reactjs"});
  const url = "https://next-js-blogger-beta.vercel.app";
  const [imagePreviewUrl, setImagePreviewUrl] = useState(upload_area);

    const handleInput = (event) => {      
        const { name, value, files } = event.target;
        if(files){
          setImagePreviewUrl(URL.createObjectURL(files[0]));
          setData({...data,[name]: files[0]});
        }
        setData({...data,[name]: value});
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
      try {
        await axios.post(`${url}/api/blogs` , data, {headers: {'Content-Type': 'application/json'},});
        setData({blogImage: "", blogTitle: "", blogDescription: "", blogCategory: ""});
        setImagePreviewUrl(upload_area);
        toast.success("New Blog Save Successfully ");
      } catch (error) {
        toast.error(error.message);
      }
    }
    
  return (
    <div>
        <Toaster position="top-center" reverseOrder={false} />
      <form action="post" onSubmit={handleSubmit} className="p-5">
        <label htmlFor="uploadThumbnail" className="cursor-pointer">Upload Thumbnail
        <Image src={imagePreviewUrl} alt="thumbnail"  htmlFor="uploadThumbnail"  width={100} height={64}/>
        </label>
        <br />
        <input type="file" name="blogImage" id="uploadThumbnail" hidden onChange={handleInput}  value={data?.blogImage} />
        <br />
        <label htmlFor="blogTitle" className="my-4">Blog Title</label>
        <br />
        <input type="text" name="blogTitle" id="blogTitle" className="border-2 pr-12 p-2 rounded" placeholder="Type here" autoComplete="off" onChange={handleInput} value={data?.blogTitle}/>
        <br />
        <label htmlFor="blogDescription">Blog Description</label>
        <br />
        <input type="message" name="blogDescription" id="blogDescription" className="border-2 pb-[64px] px-2 pr-12 rounded" placeholder="write content here" autoComplete="off" onChange={handleInput} value={data?.blogDescription}/>
        <br />
        <label htmlFor="blogCategory">Blog Category</label>
        <br />
        <select id="blogCategory" name="blogCategory" className="border-2 px-8 rounded py-2 " onChange={handleInput}  value={data?.blogCategory}>
          {options.map((option) => (
            <option key={option.value} value={option?.value}>
            {option.label}
          </option> ))}
          </select>
        <br />
        <button className="border-2 border-solid shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] block my-5 p-2 w-32 flex items-center justify-center rounded-xl" type="submit">Add Blog</button>
      </form>
    </div>
  );
}
