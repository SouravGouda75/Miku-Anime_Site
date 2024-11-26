"use client"
import React, { useEffect, useState } from 'react'
// import demo from '../../../constants/demo'
import Newscard from '../news/newscard'

const News = () => {
  const [data, setData] = useState({})
    useEffect( () => {
      const run=async()=>{
        // const anime = await fetch('https://api.jikan.moe/v4/anime')
        // const anidata = await anime.json()
        var ann = []

        // const page = anidata.pagination.last_visible_page;
        const page = 2
        var currentpage = 1
        while(currentpage <= page){
          const anime = await fetch(`https://api.jikan.moe/v4/anime?page=${currentpage}`)
          const anidata = await anime.json()
          currentpage++
          ann = Object.assign(ann, anidata.data)
        }

        
        var newsdata = []
        for(var i = 0; i<ann.length; i++){
            let obj = ann[i].mal_id
            // console.log(obj)
            const res=await fetch(`https://api.jikan.moe/v4/anime/${obj}/news`)
            const ans=await res.json()
            if(!ans == []){
              newsdata = Object.assign(newsdata, ans.data)
            }
        }
        setData(await newsdata)
      }
    
        run()
    }, [])
  return (
    <div>
      <div> 
      {console.log(data)}
      { 
      Array.from(data).map(element=>{
        console.log(element)
        return(
          <Newscard key={element.mal_id}
          description={element.excerpt}
          title={element.title}
          images={element.images.jpg.image_url}/>
        )})
      }
      </div>
      </div>
  )
}


export default News;