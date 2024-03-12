 const query=`
query{
    Page(page:1, perPage:10){
      media{
        title {
          english
          native
        }
        bannerImage
       description
      }
    }
  }
`

export const 
    options = {
        method: 'POST',
        mode:'cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({query: query})
    };
