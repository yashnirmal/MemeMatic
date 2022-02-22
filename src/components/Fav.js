import React from 'react';
import FavMemeCard from './FavMemeCard';
import Nothing from './Nothing';

export default function Fav() {

  let localmemes;
  let isEmpty = false;
  function getLocalMemes(){
    if(localStorage.getItem("localMemesStored") !== null) {
      localmemes = JSON.parse(localStorage.getItem("localMemesStored"));
    }else{
      isEmpty = true;
    }
  }
    
  function deleteAll(){
    localStorage.clear();
    window.location.reload(false);
  }

  getLocalMemes();

  return !isEmpty ? (
    <div className="container my-3">
      <div className="row">
        {localmemes.map((meme, index) => {
          return (
            <div className="col-xl-4 my-5">
              <FavMemeCard imgurl={meme} index={index}/>
            </div>
          );
        })}
      </div>
      <button onClick={deleteAll} >Delete All</button>
    </div>
  ) : (
    <Nothing />
  );
}
