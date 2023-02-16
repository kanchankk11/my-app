import React, { useState } from 'react'
import coverPhoto from '../cover.jpg'

export default function About(props) {
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  });

  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const [btnType, setBtnType] = useState("btn btn-dark");

  const toggleStyle = ()=> {
    if(myStyle.backgroundColor == 'white'){
      setMyStyle({
         color: 'white',
         backgroundColor: 'black'
      });

      setBtnText("Disable Dark Mode")
      setBtnType("btn btn-light");
    }
    else{
      setMyStyle({
         color: 'black',
         backgroundColor: 'white'
      });
      setBtnText("Enable Dark Mode")
      setBtnType("btn btn-dark");
    }
  }
  return (
    <>
    <div className="container">
      <div className="card mb-3">
        <img className="card-img-top img-fluid" src={coverPhoto} alt="Card image cap" />
        <div className={`card-body text-${props.mode ==="light"?"dark":"light"}`} style={{backgroundColor: props.mode === "dark"?"#1F1E1F" : "white"}}>
            <h5 className="card-title">About Us</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
    </>
  )
}
