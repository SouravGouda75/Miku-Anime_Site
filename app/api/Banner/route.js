import { NextResponse } from 'next/server'
 import { options } from '@/constants/API'
export async function GET() {
    let res=await fetch(process.env.NEXT_PUBLIC_API_URI,options)
        res=await res.json()
    return Response.json(res.data.Page.media)
}