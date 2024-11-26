import { NextResponse } from 'next/server'
import { options } from '@/constants/API'
export async function GET() {
    const res=await fetch('https://api.jikan.moe/v4/anime/1/news')
      const ans=await res.json()
      return Response.json({msg:'success',data:ans.data})    
}  
// export async function GET() {
//     let res=await fetch(process.env.NEXT_PUBLIC_API_URI,options)
//         res=await res.json()
//        let dataset=res.data.Page.media
//         dataset.forEach(element => {
//            console.log(element); 
//         });
//     return Response.json({msg:"Success"})
// }  