
import React, { useState } from 'react';
import { useEffect } from 'react';

const App = () => {


const [dados, setDados] = useState("")



 useEffect(()=> {
    fetch("https://graph.salescloud.is/",{
        method: "Post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          query:`
          query {
  
            itemsList(organization:"4c81a36a-3ba0-4300-94e3-cb7007a6a8a6"){
              title
              images{
                file{
                  sources{
                    original
                  }
                }
              }
            }
            
          }
          `
        })
    })
      .then(response => {
        return response.json()
      })
      .then((data)=> {
       setDados(data)
       console.log(dados.data.itemsList)
      })
 }, [])


  return (
    <div>
     
     {dados.data.itemsList.map((item)=> {
        return( 
          <div>
          <h1>{item.title}</h1>
          <img src={`${item.images[0].file.sources.original}`} alt="food" style={{width: "200px",}}/>
        </div>
        )
      })}

    </div>
  );
}

export default App;
