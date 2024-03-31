    import React, {useState} from 'react'

    export default function About(props) {
        // let mystyle={
        //     color:props.mode==='dark'?'white':'black',
        //     backgroundColor:props.mode==='dark'?'#1c4160':'white'
        // }
        // let mystyle2={
        //     color:props.mode==='success'?'white':'black',
        //     backgroundColor:props.mode==='success'?'#0c5835':'white'
        // }
    return (
        <div  className='container' >
            <h1 className='my-3' style={{color:props.mode==='dark'?'white':'black', backgroundColor:props.mode==='dark'?'#1c4160':'white'}}>About Us</h1>
        <div className="accordion" id="accordionExample" >
    <div className="accordion-item" style={{color:props.mode==='dark'?'white':'black' , backgroundColor:props.mode==='dark'?'#1c4160':'white'}}>
        <h2 className="accordion-header">
        <button className="accordion-button"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{color:props.mode==='dark'?'white':'black' , backgroundColor:props.mode==='dark'?'#1c4160':'white'}}>
         <strong>Word Counting</strong>
        </button>
        </h2>
        <div id="collapseOne"  className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        TextUtils provides functions to accurately count the number of words in a given text, accounting for different languages, punctuation, and formatting.
        </div>
        </div>
    </div>
    <div className="accordion-item" style={{color:props.mode==='dark'?'white':'black' , backgroundColor:props.mode==='dark'?'#1c4160':'white'}}>
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{color:props.mode==='dark'?'white':'black' , backgroundColor:props.mode==='dark'?'#1c4160':'white'}}>
            <strong>Character Counting</strong>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" >
        With TextUtils, you can easily calculate the total number of characters in a text, excluding or including specific characters based on your requirements.
        </div>
        </div>
    </div>
    <div className="accordion-item" style={{color:props.mode==='dark'?'white':'black' , backgroundColor:props.mode==='dark'?'#1c4160':'white'}}>
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"  aria-expanded="false" aria-controls="collapseThree" style={{color:props.mode==='dark'?'white':'black' , backgroundColor:props.mode==='dark'?'#1c4160':'white'}}>
            <strong>Case Conversion</strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        Convert text between various cases, including uppercase, lowercase, title case, or sentence case, to suit your formatting needs.
        </div>
        </div>
    </div>
    </div>
        </div>
    )
    }
