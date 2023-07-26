
import React,{useState} from 'react'

export default function Textform(props) {

    const handleUpclick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase', 'success')
    }
    const handleLowclick = ()=>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert('Converted to lowercase', 'success')
  }
    const handleClearclick = ()=>{
      setText('');
  }
    const handleOnChange = (event)=>{
        setText(event.target.value);   
    }
    const handleCopy = ()=>{
      let text= document.getElementById('myBox')
      text.select()
      navigator.clipboard.writeText(text.value)
      props.showAlert('Copied to clipboard', 'success')
    }

    const removeSpace = ()=> {
      let newText= text.split(/[  ]+/);
      setText(newText.join(' '))
      props.showAlert('Removed extra spaces', 'success')
    }


    const [text, setText]= useState('');
   

  return (
   <> 
   <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h3>{props.heading}</h3>
            <div className="mb-3">
              <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpclick}>Convert to uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleLowclick}>Convert to lowercase</button>
            <button className='btn btn-primary mx-2' onClick={handleClearclick}>Clear text</button>
            <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy text</button>
            <button className='btn btn-primary mx-2' onClick={removeSpace}>Remove extra spaces</button>
    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
      <h3>your text summery</h3>
      <p> {text.split(" ").length}words and  {text.length}characters</p>
      <p>{0.008 * text.split(" ").length}Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
   </>
  )
}
