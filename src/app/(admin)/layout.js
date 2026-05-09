import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { assets } from '../../../assets/assets'

export default function layout({ children }) {
  const { add_icon, blog_icon, email_icon } = assets;
  return (
    <>
      {/* <div>
        <div className="grid xl:grid-cols-4  gap-1 my-4">
          <div className="flex justify-around lg:block border-2 xl:place-items-end place-items-center">
            <Link className="border-2 border-solid shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] block my-5 lg:p-2 p-1 lg:w-48 flex items-center justify-start  rounded-xl" href="/admin-dashboard/addblogs" title="Add Blog"><Image src={add_icon} alt="addBlog" className='lg:mx-2' />Add Blog</Link>
            <Link className="border-2 border-solid shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] block my-5 lg:p-2 p-1 lg:w-48 flex items-center justify-start rounded-xl" href="/admin-dashboard/bloglists"><Image src={blog_icon} alt="addBlog" className='lg:mx-2' />Blogger List</Link>
            <Link className="border-2 border-solid shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] block my-5 lg:p-2 p-1 lg:w-48 flex items-center justify-start rounded-xl" href="/admin-dashboard/subscriptions"><Image src={email_icon} alt="addBlog" className='lg:mx-2' />Subscriber</Link>
          </div>
        </div>
      </div> */}


      <div className="container-fluid col-xxl-12 px-4">
        <div className="row flex-lg g-5">
          <div className="col-lg-4 border border-dark">
            <div className="d-grid gap-2 mb-4 mb-lg-3 pt-5">
              <Link href="/admin-dashboard/addblogs" type="button" className="btn btn-dark btn-lg px-4 me-md-2 fw-bold">
               Add Blog
              </Link>
              <Link href="/admin-dashboard/bloglists" type="button" className="btn btn-outline-dark btn-lg px-4">
                Blog List
              </Link>
              <Link href="/admin-dashboard/subscriptions" type="button" className="btn btn-outline-dark btn-lg px-4">
                Subscriber
              </Link>
            </div>
          </div>
          <div className="col-10 col-sm-8 col-lg-8 border border-dark">
            {children}
          </div>

        </div>
      </div>
    </>
  )
}