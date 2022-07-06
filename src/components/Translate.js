import React, { useCallback, useState } from 'react'
import Dropdown from './Dropdown';
import Convert from './Convert';


const options = [
    {    
        label : 'Afrikaans',
        value : 'af'
    },
    {
        label : 'Arabic',
        value : 'ar'
    },
    {
        label : 'Hindi',
        value : 'hi'
    }
]

// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
const Translate = () => {
    const [language, setLanguage] = useState(options[0])
    const [text,setText] = useState(' ')
    return (
        <div>
            
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Input</label>
                    <input value = {text} onChange = {(e) => (setText(e.target.value))}></input>
                </div>
                
            </div>
            
            <Dropdown options={options} selected = {language} onSelectChange = {setLanguage} />
            <hr></hr>
            <h3 className='ui header'>Output</h3>
            <Convert language={language} text={text}></Convert>
        </div>
        
    )
}

export default Translate;