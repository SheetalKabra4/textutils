import React,{useState} from 'react'

export default function Textform(props) {
    const[text, setText] = useState("");
    //const[isCopied, setIsCopied] = useState(false);
    const handleUpperCaseEvent = ()=>{
        let textValue = text.toUpperCase();
        setText(textValue);
        props.showAlert('Converted to uppercase!', 'success');
    };
    const handleLowerCaseEvent = ()=>{
        let textValue = text.toLowerCase();
        setText(textValue);
        props.showAlert('Converted to lowercase!', 'success');
    };
    // const onCopyText = ()=>{
    //     setIsCopied(true);
    //     setTimeout(()=>{
    //         setIsCopied(false);
    //     }, 2000);
    // }
    const handleCopyText = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert('Copied to clipboard!', 'success');
    };
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra spaces removed!', 'success');
    };
    const handleClearEvent = ()=>{
        let textValue = "";
        setText(textValue);
        props.showAlert('Text has been cleared!', 'success');
    };
    const handleOnChangeEvent = (event)=>{
        setText(event.target.value);
    };

    return (
        <>
            <div className="container" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
                <h1 className="mb-2">{props.heading}</h1>
                <div className="my-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChangeEvent} 
                    style={{backgroundColor: props.colorArray.backgroundColorTextForm,color:props.mode === 'dark' ? 'white' : 'black'}}></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary" onClick={handleUpperCaseEvent}>Convert to Upper Case</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowerCaseEvent}>Convert to Lower Case</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearEvent}>Clear Text</button>
                
                {/* <CopyToClipboard text={text} onCopy={onCopyText}>
                    <div className="copy-area">
                    <button className="btn btn-primary">Copy To Clipboard</button>
                        <span className={`copy-feedback ${isCopied ? "active" : ""}`}>
                            {isCopied ? "Copied!" : ""} 
                        </span>
                    </div>
                </CopyToClipboard> */}
            </div>
            <div className="container my-3" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes to read.</p>
                <h2>Preview</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length> 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}
