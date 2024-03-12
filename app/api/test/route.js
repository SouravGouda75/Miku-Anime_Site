import { NextResponse } from 'next/server'
 import { options } from '@/constants/API'
export async function GET() {
    let res=await fetch(process.env.NEXT_PUBLIC_API_URI,options)
        res=await res.json()
       let dataset=res.data.Page.media
        dataset.forEach(element => {
           console.log(element); 
        });
    return Response.json({msg:"Success"})
}  