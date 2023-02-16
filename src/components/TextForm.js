import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    if(text==="")
      props.showAlert("Write something first", "warning");
    else{
      setText(text.toUpperCase());
    }
  }

  const handleLowClick = ()=>{
    if(text==="")
      props.showAlert("Write something first", "warning");
    else{
      setText(text.toLowerCase());
    }
  }

  const handleClear = ()=>{
    setText("");
  }

  const handleOnChange = (event)=>{
    console.log("Handle on change");
    setText(event.target.value);
  }

  const [text, setText] = useState("");
  return (
    <>
      <div className='container my-3'>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">{props.heading}</label>
          <textarea className={`form-control text-${props.mode ==="light"?"dark":"light"}`} id="myBox" rows="6" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === "dark"?"gray" : "white"}}></textarea>
        </div>

        <button className='btn btn-primary mx-2 my-2' onClick={handleUpClick} >Convert to UPPERCASE</button>
        <button className='btn btn-primary mx-2 my-2' onClick={handleLowClick} >Convert to lowercase</button>
        <button className='btn btn-danger mx-2 my-2' onClick={handleClear} >Clear Text</button>
      </div>

      <div className='container'>
        <p>Yor text has {text.split(" ").length} words and {text.length} characters</p>
      </div>
    </>
  );
}
