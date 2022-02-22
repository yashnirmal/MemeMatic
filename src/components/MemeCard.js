import React from 'react';
import MemeCSS from './MemeCard.module.css';
import whiteHeart from '../images/bordered_heart.png';
import blueHeart from '../images/blue_heart.png';
import Share from '../images/share.png';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




toast.configure();
export default function MemeCard(props) {

  function likeBtnClicked(event){

    // setting the blueHeart image
    const element = event.target;
    element.setAttribute("src",blueHeart);


    if (localStorage.getItem("localMemesStored") == null) {
      localStorage.setItem("localMemesStored",'[]');
    }

    let locmeme = JSON.parse(localStorage.getItem("localMemesStored"));
    locmeme.push(props.imgurl);
    
    localStorage.setItem("localMemesStored",JSON.stringify(locmeme));
    
    //Toast Notification
    //Maybe
    
  }

  function copyMemeUrl(){
    let input = document.createElement('input');
    input.setAttribute('value',props.imgurl);
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    input.parentNode.removeChild(input);
  }

  return (
    <div className={MemeCSS.box}>
      <img className={MemeCSS.memeImg} src={props.imgurl} alt="meme" />
      <div className={MemeCSS.divbutton}>
        <img
          className={MemeCSS.shareImg}
          onClick={copyMemeUrl}
          src={Share}
          alt="share"
        />
        
        <img
          id="heartIMG"
          className={MemeCSS.likeImg}
          onClick={likeBtnClicked}
          src={whiteHeart}
          alt="like" />
      </div>
    </div>
  );
}
