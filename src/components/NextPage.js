import React from 'react';
import './NextPage.module.css';

export default function NextPage(props) {

  function btnClicked(){
    props.moreMemeClicked();
  }
  return (
    <div>
        <button onClick={btnClicked}>Load More Memes</button>
    </div>
  )
}
