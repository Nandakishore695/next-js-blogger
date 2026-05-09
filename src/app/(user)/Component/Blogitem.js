"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import toast, { Toaster } from 'react-hot-toast';
import Link from "next/link";
import axios from "axios";
import { assets } from "../../../../assets/assets";
import TabsNavigation from "./Tabs-Navigation";

const BlogItems = () => {
  const { arrow } = assets;
  const [emailId, setEmailId] = useState({ "isEmailId": "" });
  const [apiResponse, setApiResponse] = useState([]);
  const [filterResponse, setFilterResponse] = useState([]);
  const [types, setTypes] = useState("all");
  // const url = "" ;
  const baseUrl = 'http://localhost:3000/' || 'https://next-js-blogger-beta.vercel.app';

  useEffect(() => {
    getBlogLits();
  }, []);

  const handleEmailSubscribe = (event) => {
    const { name, value } = event.target;
    setEmailId({ ...emailId, [name]: value });
  };

  const handleSubmitEmailSubscribe = async (event) => {
    event.preventDefault();
    try {
      if (!emailId.isEmailId) {
        toast.error("Empty value pls provide");
      }
      else {
        await axios.post(`${baseUrl}/api/email`, emailId, { headers: { 'Content-Type': 'application/json' }, });
        setEmailId({ isEmailId: "" });
        toast.success("You Have Email Subscribe");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getBlogLits = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/blogs`);
      setApiResponse(response.data);
      setFilterResponse(response.data);
    } catch (error) {
      toast.error(error.message);
    }
  }

  const handleMenu = (type) => {
    setTypes(type)
    const result = apiResponse.filter((item) => item.blogcategory === type);
    type === "all" ? setFilterResponse(apiResponse) : setFilterResponse(result);
  }

  return (
    <>
      <main>
        <Toaster position="top-center" reverseOrder={false} />

        <div className="px-4 pb-5 text-center">
          <h1 className="display-5 fw-bold text-body-emphasis">Latest Blogs</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4 fw-normal">
              A powerful app for professional publishers to create, share, and grow a business around their content.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <form className="d-flex justify-content-center gap-2" action="post" >
                <input type="text" className="form-control form-control-lg border border-dark" placeholder="Enter your email..." name="isEmailId" onChange={handleEmailSubscribe} value={emailId.isEmailId} autoComplete="off" spellCheck="false" />
                <button type="submit" className="btn btn-outline-dark btn-lg px-4">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center gap-2 mb-5">
          <TabsNavigation handleMenu={handleMenu} types={types} />
        </div>

      </main>
      {/* <main classNameName="px-5 text-center my-8">

        <form
          classNameName="flex justify-center gap-4"
          action="post"
          onSubmit={handleSubmitEmailSubscribe}
        >
          <input
            type="text"
            placeholder="Enter your email..."
            classNameName="border-solid border-2 p-4 shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] rounded-2xl focus:outline-0"
            name="isEmailId"
            onChange={handleEmailSubscribe}
            value={emailId.isEmailId}
            autoComplete="off"
          />
          <button classNameName="border-solid border-2 p-4 shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] rounded-2xl cursor-pointer" type="submit">Subscribe</button>
        </form>
      </main> */}

      {/* <section classNameName="flex justify-center mt-8">
        <button classNameName={`p-2 lg:p-4 mx-2  ${types === "all" ? 'bg-black text-white' : 'bg-white text-black'} cursor-pointer rounded-2xl hover:border`} onClick={() => handleMenu("all")}>All</button>
        <button classNameName={`p-2 lg:p-4 mx-2  ${types === "reactjs" ? 'bg-black text-white' : 'bg-white text-black'} cursor-pointer rounded-2xl hover:border`} onClick={() => handleMenu("reactjs")}>React JS</button>
        <button classNameName={`p-2 lg:p-4 mx-2  ${types === "nextjs" ? 'bg-black text-white' : 'bg-white text-black'} cursor-pointer rounded-2xl hover:border`} onClick={() => handleMenu("nextjs")}>Next JS</button>
        <button classNameName={`p-2 lg:p-4 mx-2  ${types === "expressjs" ? 'bg-black text-white' : 'bg-white text-black'} cursor-pointer rounded-2xl hover:border`} onClick={() => handleMenu("expressjs")}>Express Js</button>
        <button classNameName={`p-2 lg:p-4 mx-2  ${types === "git" ? 'bg-black text-white' : 'bg-white text-black'} cursor-pointer rounded-2xl hover:border`} onClick={() => handleMenu("git")}>Git</button>
      </section> */}

      <section>
        {filterResponse.map((item, index) => {
          return (
            <div className="container" key={index}>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" >
                <div className="col" >
                  <div className="card shadow-sm">
                    <svg aria-label="Placeholder: Thumbnail" className="bd-placeholder-img card-img-top" height="225" preserveAspectRatio="xMidYMid slice" role="img" width="100%" xmlns="http://www.w3.org/2000/svg">
                      <title>
                        Placeholder
                      </title>
                      <rect width="100%" height="100%" fill="#55595c">
                      </rect>
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        {item.blogCategory}
                      </text>
                    </svg>
                    {/* <Image src={item.blogimage} width={200} height={200} alt='logs' /> */}
                    <div className="card-body">
                      <h2>{item.blogtitle}</h2>
                      <p className="card-text">
                        {item.blogdescription}
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">
                            View
                          </button>
                        </div>
                        <small className="text-body-secondary">
                          {item.createdate}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </section>
    </>
  );
};
export default BlogItems;