import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleloClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }
    
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Textbox is Cleared", "success");

    }
    const handleCopyClick = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied to Clipboard", "success");
      }
const handleExtraSpaces = () => {
    let newtext = text.split(/ [  ]+/);
    setText(newtext.join(" "));
    props.showAlert("Removed Extra Spaces from Text", "success");
}
    const handleUpChange = (event) => {
        setText(event.target.value);
    }
// const handleCapClick = (word) => {
    //     const lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase() + lower.slice(1);
    // }
    // const handleBoldClick = () => {
    //     let newText = text.bold();
    //     setText(newText);
    // }
    // const handleItalicClick = () => {
    //     let newText = text.italics();
    //     setText(newText);
    // }
    return (
        <>
        <div className= "container">
        <h1  style={{color: props.mode === 'dark' ? 'white': '#2C2C32'}}>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="10" style={{backgroundColor: props.mode === 'dark' ? 'grey': 'white', color: props.mode === 'dark' ? 'white': '#2C2C32'}} value={text} onChange={handleUpChange} placeholder="Type or Paste any Text here to Change Text case"></textarea>
        </div>
    <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleUpClick}>UPPERCASE</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleloClick}>lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    {/* <button className="btn btn-primary mx-1" onClick={handleCapClick}>Capitalize</button>
    <button className="btn btn-primary mx-1" onClick={handleBoldClick}>Bold</button>
    <button className="btn btn-primary mx-1" onClick={handleItalicClick}>Italic</button>  */}
    
        </div>
        <div className= "container my-3" style={{color: props.mode === 'dark' ? 'white': '#2C2C32'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").filter((element) => {return element.length!= 0}).length} Words - {text.length} Characters in your Text</p>
            <p>{0.008 * text.split(" ").filter((element) => {return element.length!= 0}).length} Minutes to Read</p>
            <h2>Text Preview</h2>
            <p>{text.length>0 ? text:"Enter Something in Textbox to Preview!"}</p>
        </div>
        </>
    )
}
