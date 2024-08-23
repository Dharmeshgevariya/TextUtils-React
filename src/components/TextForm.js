import React,{useState} from 'react';



export default function TextForm(props){

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upperCase!","success");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower!","success");
    }

    const handleClearText = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Clear Successfully!","success");
    }

    const handleCapitalizeFirstLetter = () => {
        let newText = text
            .split(' ') // Split the string into an array of words
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
            .join(' '); // Join the words back into a single string
        setText(newText);
        props.showAlert("Capitalize First Latter!","success");
    };

    const removeExtraSpaces = () => {
        let newText =text.replace(/\s+/g, ' ').trim();
        setText(newText);
        props.showAlert("Remove Extra Space!","success");
    };
    

    const handleInverseCase = () => {
        let newText = text
            .split('') // Split the string into an array of characters
            .map(char => 
                char === char.toUpperCase() 
                ? char.toLowerCase() 
                : char.toUpperCase()
            ) // Invert the case of each character
            .join(''); // Join the characters back into a single string
        setText(newText);
        props.showAlert("Inverse Case!","success");
    };
    

    const handleAlternatingCase = () => {
        let newText = text
            .split('') // Split the string into an array of characters
            .map((char, index) =>
                index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
            ) // Convert even index to uppercase and odd index to lowercase
            .join(''); // Join the characters back into a single string
        setText(newText);
        props.showAlert("Alternating Case!","success");
    };
    
    const handleTitleCase = () => {
        let newText = text
            .toLowerCase() // Convert the entire string to lowercase
            .split(' ') // Split the string into an array of words
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
            .join(' '); // Join the words back into a single string
        setText(newText);

        props.showAlert("Title Case!","success");        
    };
    
    
    const handleOnChange = (event)=>{
        console.log('On Change');
        setText(event.target.value);
    }

    const [text,setText] = useState('Enter Text here');

    return(
        <>
        <div style={{color: props.mode=== 'dark'?'white':'black'}}>
            <h3>{props.heading}</h3>
            <div className='mb-3'>
                <textarea className='form-control' id='myBox' rows="8" style={{backgroundColor:props.mode=== 'dark'?'grey':'White'}} value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert To Uppercase</button>
            <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert To LowerCase</button>
            <button className='btn btn-primary mx-1' onClick={handleCapitalizeFirstLetter}>Convert First Latter Capital</button>
            <button className='btn btn-primary mx-1' onClick={handleInverseCase}>InVeRsE CaSe</button>
            <button className='btn btn-primary mx-1' onClick={handleAlternatingCase}>aLtErNaTiNg cAsE</button>
            <button className='btn btn-primary mx-1' onClick={handleTitleCase}>Title Case</button>
            <button className='btn btn-danger mx-1' onClick={handleClearText}>Clear Text</button>
            <button className='btn btn-danger mx-1' onClick={removeExtraSpaces}>Remove Extra Space</button>
        </div>
        <div className="container my-3" style={{color: props.mode=== 'dark'?'white':'black'}}>
            <h2>Your Text Summery</h2>
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
            <p>{0.008*text.split("").length} Minutes Read</p>
        </div>
        </>
    )
}
