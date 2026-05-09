// import connectDb from "@/library/config/db";
// import { UserEmail } from "@/library/model/Email_Model";
// import { NextResponse } from "next/server";

// export async function POST(request){
//     try {
//         await connectDb();
//         const { isEmailId } = await request.json();
//         const response = await UserEmail.create({isEmailId});
//         return NextResponse.json({message: "New Subscribe", success: true, response});
//     } catch (error) {
//         return NextResponse.json({"message": error.message,  success: false})
//     }
// }

// export async function GET() {
//     try {
//         await connectDb();
//         const response = await UserEmail.find();        
//         return NextResponse.json({message: "New Subscribe", success: true, response});        
//     } catch (error) {
//         return NextResponse.json({"message":error.message, success: false})
//     }
// }

// export async function DELETE(request) {
//     try {
//         await connectDb();
//         const emailId= request.nextUrl.searchParams.get("idd");
//         const response = await UserEmail.findByIdAndDelete(emailId);
//         return NextResponse.json({message: "Email Removed", success: true, response});
//     } catch (error) {
//         return NextResponse.json({"message": error.message, success: false});
//     }
// }