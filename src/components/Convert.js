import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Translate from './Translate'
import Cookies from 'js-cookie'

const csrftoken = Cookies.get('csrftoken')

const Convert = ({language, text}) => {
    const [translation,setTranslation] = useState('')
    useEffect (() => {
        const doTranslation = async () =>{
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
                params : {
                    q:text,
                    target:language.value,
                    headers: { 'X-CSRFToken': csrftoken },
                    key : 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            })

            setTranslation(data.data.translations[0].translatedText)
        }

        doTranslation()
    },[language,text])

    return (
        <div><h2 className='ui header'>{translation}</h2></div>
    )
}

export default Convert