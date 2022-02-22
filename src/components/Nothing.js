import React from 'react';
import SpongeBob from '../images/spongebob.gif';

export default function Nothing() {
  return (
    <div style={{marginTop:"100px"}}>
        <img src={SpongeBob} alt="gif" />
        <h1 style={{marginTop:"20px"}} >Nothing to show</h1>
    </div>
  )
}
