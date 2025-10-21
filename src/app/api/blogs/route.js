import connectDb from "@/library/config/db";
import { NewBlog } from "@/library/model/Blogs";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDb();
    const { blogImage, blogTitle, blogDescription, blogCategory } = await request.json();
    const blog = await NewBlog.create({blogImage,blogTitle,blogDescription,blogCategory,});
    return NextResponse.json({message: "Blog created successfully",success: true, blog});
  } catch (error) {
    return NextResponse.json(
      {message: "Error creating blog",error: error.message, success: false  });
  }
}

export async function GET(request) {

  try {
    await connectDb();
      const id = request.nextUrl.searchParams.get("id");
    if(id){
    const response = await NewBlog.findById(id);
    return NextResponse.json({message: "Blog Detail", success: true, response})
    }
    else{
 const response = await NewBlog.find();
     return NextResponse.json({message: "Blog created successfully",success: true, response});
    }
    
  } catch (error) {
    return NextResponse.json({message: error.message, success: false})
  }
}

export async function DELETE(request) {  
  try {
    await connectDb();
    const idd = request.nextUrl.searchParams.get("idd");
    const response = await NewBlog.findByIdAndDelete(idd);
    return NextResponse.json({message: "Removed Blog Item", success: true, response});
  } catch (error) {
    return NextResponse.json({message: error.message, success: false});
  }
}