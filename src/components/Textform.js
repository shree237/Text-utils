import React, { useState } from 'react';

export default function Textform(props) {


  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to uppercase', 'success');
  };

  const handleLowclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lowercase', 'success');
  };

  const handleClearclick = () => {
    setText('');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    let textArea = document.getElementById('myBox');
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
    props.showAlert('Copied to clipboard', 'success');
  };

  const removeSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert('Removed extra spaces', 'success');
  };

  const [text, setText] = useState('');

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-center">
          <button disabled={text.length===0} className="btn btn-primary mx-2 mb-2" onClick={handleUpclick}>
            Convert to uppercase
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 mb-2" onClick={handleLowclick}>
            Convert to lowercase
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 mb-2" onClick={handleClearclick}>
            Clear text
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 mb-2" onClick={handleCopy}>
            Copy text
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 mb-2" onClick={removeSpace}>
            Remove extra spaces
          </button>
        </div>
      </div>
      <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h3>your text summary</h3>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{(0.008 * text.split(' ').length).toFixed(2)} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : 'Enter something to preview it here'}</p>
      </div>
    </>
  );
}
