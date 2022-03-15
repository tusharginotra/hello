import React,{useState} from 'react'

export default function TextForm(props) {
    const [Text, setText] = useState("");
    const handleOnClick = () =>{
        console.log("on clicked ");
        let newText = Text.toUpperCase() ;
        setText(newText);
        props.showAlert("Converted to Upper Case","success")
      
    }
    const handleOnLoClick = () =>{
      console.log("on clicked ");
      let newText = Text.toLowerCase() ;
      setText(newText);
      props.showAlert("Converted to Lower Case","success")
    
    }
    const handleOnClearClick = () =>{
      console.log("on clicked ");
      
      setText("");
      props.showAlert("Cleared text","success")
    }
    const handleOnChange = (event) => {
        console.log("on changed ");
        setText(event.target.value);
    }
    const handleCopy = ()=>{
      console.log("Text copied");
      var text =  document.getElementById("mytextarea");
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text has been Copied to clipboard","success");
    }
    const handleExtraSpace = () =>{
      var newText = Text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces has been removed","success");
    }


  return (
    <>
    <div style={ { color:props.mode==='dark'?'white':'#042743'}}>
      <div className="mb-3" >
          <h2 className = "mb-2 my-2 mt-2" > {props.heading} </h2>
        
        <textarea className="form-control" value ={Text} style={ {backgroundColor:props.mode==='dark'?'#2c427a':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="mytextarea" rows="5"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" disabled= {Text.length===0} onClick={handleOnClick}> Convert to Upper Case</button>
        <button className="btn btn-primary mx-2 my-1" disabled= {Text.length===0} onClick={handleOnLoClick}> Convert to Lower Case</button>
        <button className="btn btn-primary mx-2 my-1" disabled= {Text.length===0} onClick={handleOnClearClick}> Clear All </button>
        <button className="btn btn-primary mx-2 my-1" disabled= {Text.length===0} onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2 my-1" disabled= {Text.length===0} onClick={handleExtraSpace}>Remove Extra Spaces</button>
      </div>
      <div className="contain my- 3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>Output is : </h1>
      <p> {Text.split(" ").filter((element)=>{return element.length!==0 }).length} words and {Text.length} characters </p>
      
      <p>{Text.length * 0.08} minutes to Read your paragraph.</p>
      <h2>Preview</h2>
      <p> {Text.length>0?Text:'Nothing to Preview'}</p>
    </div>
    </>
  )
}
