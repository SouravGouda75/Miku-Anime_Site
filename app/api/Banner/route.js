import { NextResponse } from 'next/server'
 import { options } from '@/constants/API'
export async function GET() {
    // let res=await fetch(process.env.NEXT_PUBLIC_API_URI,options)
    let res=await fetch('https://graphql.anilist.co',options)
        res=await res.json()
    return Response.json(res.data.Page.media)
}