import React from 'react';
import Trash from '../images/trash.png';
import Share from '../images/share.png';
import FavMemeCSS from './FavMemeCard.module.css';

export default function FavMemeCard(props) {


    const memeIMG = document.getElementById('memeIMG');

    function trashBtnClicked(){
    
      let locmeme = JSON.parse(localStorage.getItem("localMemesStored"));
      let index = locmeme.indexOf(props.imgurl);
      locmeme.splice(index,1);

      if(locmeme.length !== 0){
        localStorage.setItem("localMemesStored",JSON.stringify(locmeme));
      }else{
        localStorage.clear();
      }
      window.location.reload(false);

    }

    function copyMemeUrl() {
      let input = document.createElement("input");
      input.setAttribute("value", props.imgurl);
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.parentNode.removeChild(input);
    }


  return (
    <div className={FavMemeCSS.box}>
      <img
        id="memeIMG"
        className={FavMemeCSS.memeImg}
        src={props.imgurl}
        alt="meme"
      />
      <div className={FavMemeCSS.divbutton}>
        <img
          src={Share}
          className={FavMemeCSS.shareImg}
          onClick={copyMemeUrl}
          alt="share"
        />
        <img
          id="trashBtn"
          src={Trash}
          className={FavMemeCSS.trashImg}
          onClick={trashBtnClicked}
          alt="delete"
        />
      </div>
    </div>
  );
}
