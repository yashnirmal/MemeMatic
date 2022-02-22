import React, { useState } from 'react'
import MemeCard from './MemeCard';
import NextPage from './NextPage';


export default function Home() {

  let [memes, setMemes] = useState([]);

  function fetchMemes(){

    fetch('https://meme-api.herokuapp.com/gimme')
    .then((promise)=>{
      return promise.json();
    })
    .then((meme)=>{
      if(memes.indexOf(meme.url)===-1){
        setMemes([...memes,meme.url]);
      }else{
        fetchMemes();
      }
    })
    .catch(()=>{
      console.log("error while loading a meme");
    })
  }

  if (memes.length <= 14) {
      fetchMemes();
  }

  function moreMemeClicked(){
    setMemes([]);
  }

  return (
    <div className="container my-3">
      <div className="row">
        {memes.map((meme, index) => {
          return (
            <div className="col-xl-4 my-5">
              <MemeCard imgurl={meme} index={index}  />
            </div>
          );
        })}
      </div>
      <NextPage moreMemeClicked={moreMemeClicked} />
    </div>
  );
}
