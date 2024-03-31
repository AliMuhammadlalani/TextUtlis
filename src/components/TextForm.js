import React , {useState} from 'react'
export default function TextForm(props) {

  const handleUpclick=()=>{
    const newtext= text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UpperCase!","success")
  }

  const handleOnchange=(event)=>{
    setText(event.target.value);
 
   }

  const handlelowclick=()=>{
    const newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to LowerCase!","success")

  }

  const handleclearclick=()=>{
    const newtext="";
    setText(newtext);
    props.showAlert("Text Cleared!","success")

  }

  const handlesentenceclick= ()=>{
    const newtext=text.charAt(0).toUpperCase()+text.slice(1).toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Sentence Case!","success")

  }

  const copyText = () => {
   navigator.clipboard.writeText(text)
    props.showAlert("Copied to Clipboard","success")
  };

  const [text, setText]=useState("");
 
  return (
  <>
    <div className='container'>
        <h1 className='mb-3' style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
        <div className="mb-2">
     <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#242462':'white', color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnchange} id="mybox" rows="8"></textarea> 
     {/* onChange mostly humare kaam ayega usay hum use karainge textarea mai input mai aur yeh humne isi liyai listen kiya takai hum type kar saqain textarea mai and q kai humnai value ko as a state variable use kya hai */}
     </div>
     <button disabled={text.length===0} btn className="btn btn-primary  my-1" onClick={handleUpclick}>Convert to UpperCase</button>
     <button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlelowclick}>Convert to LowerCase</button>
     <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclearclick}>Clear Text</button>
     <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlesentenceclick}>Sentence Case</button>
     <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
    </div>
    <div className="container my-5"  style={{color:props.mode==='dark'?'white':'black'}}>
      <h2 >Text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length>0}).length} Words and {text.replace(/\s/g, '').length} Characters</p>
      <p>{0.008* text.split(/\s+/).filter((element)=>{return element.length>0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{`${text===''?'Nothing to Preview':text}`}</p>
    </div>
    </>
  )
}
