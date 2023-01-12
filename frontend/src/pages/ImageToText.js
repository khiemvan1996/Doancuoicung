import React, { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';
// import { DropzoneArea } from "material-ui-dropzone";s
import Speaker from 'components/UI/Speaker';
// import SpeakerIcon from 'components/UI/Speaker';
import axiosClient from 'apis/axiosClient';
import { createTheme } from '@material-ui/core/styles'


const langs = {
    // auto: 'Automatic',
    // af: 'Afrikaans',
    // sq: 'Albanian',
    // ar: 'Arabic',
    // hy: 'Armenian',
    // az: 'Azerbaijani',
    // eu: 'Basque',
    // be: 'Belarusian',
    // bn: 'Bengali',
    // bs: 'Bosnian',
    // bg: 'Bulgarian',
    // ca: 'Catalan',
    // ceb: 'Cebuano',
    // ny: 'Chichewa',
    // 'zh-cn': 'Chinese Simplified',
    // 'zh-tw': 'Chinese Traditional',
    // co: 'Corsican',
    // hr: 'Croatian',
    // cs: 'Czech',
    // da: 'Danish',
    // nl: 'Dutch',
    en: 'English',
    // eo: 'Esperanto',
    // et: 'Estonian',
    // tl: 'Filipino',
    // fi: 'Finnish',
    // fr: 'French',
    // fy: 'Frisian',
    // gl: 'Galician',
    // ka: 'Georgian',
    // de: 'German',
    // el: 'Greek',
    // gu: 'Gujarati',
    // ht: 'Haitian Creole',
    // ha: 'Hausa',
    // haw: 'Hawaiian',
    // iw: 'Hebrew',
    // hi: 'Hindi',
    // hmn: 'Hmong',
    // hu: 'Hungarian',
    // is: 'Icelandic',
    // ig: 'Igbo',
    // id: 'Indonesian',
    // ga: 'Irish',
    // it: 'Italian',
    ja: 'Japanese',
    // jw: 'Javanese',
    // kn: 'Kannada',
    // kk: 'Kazakh',
    // km: 'Khmer',
    ko: 'Korean',
    // ku: 'Kurdish (Kurmanji)',
    // ky: 'Kyrgyz',
    // lo: 'Lao',
    // la: 'Latin',
    // lv: 'Latvian',
    // lt: 'Lithuanian',
    // lb: 'Luxembourgish',
    // mk: 'Macedonian',
    // mg: 'Malagasy',
    // ms: 'Malay',
    // ml: 'Malayalam',
    // mt: 'Maltese',
    // mi: 'Maori',
    // mr: 'Marathi',
    // mn: 'Mongolian',
    // my: 'Myanmar (Burmese)',
    // ne: 'Nepali',
    // no: 'Norwegian',
    // ps: 'Pashto',
    // fa: 'Persian',
    // pl: 'Polish',
    // pt: 'Portuguese',
    // ma: 'Punjabi',
    // ro: 'Romanian',
    // ru: 'Russian',
    // sm: 'Samoan',
    // gd: 'Scots Gaelic',
    // sr: 'Serbian',
    // st: 'Sesotho',
    // sn: 'Shona',
    // sd: 'Sindhi',
    // si: 'Sinhala',
    // sk: 'Slovak',
    // sl: 'Slovenian',
    // so: 'Somali',
    // es: 'Spanish',
    // su: 'Sudanese',
    // sw: 'Swahili',
    // sv: 'Swedish',
    // tg: 'Tajik',
    // ta: 'Tamil',
    // te: 'Telugu',
    th: 'Thai',
    // tr: 'Turkish',
    // uk: 'Ukrainian',
    // ur: 'Urdu',
    // uz: 'Uzbek',
    vi: 'Vietnamese',
    // cy: 'Welsh',
    // xh: 'Xhosa',
    // yi: 'Yiddish',
    // yo: 'Yoruba',
    // zu: 'Zulu'
}
const language = Object.entries(langs)
export default function ImagetoTextScreen(){
    const [text,setText] = useState("")
    const [text1,setText1] = useState("ssssss")
    const [loading,setLoading] = useState(true)
    const [progress,setProgress] = useState(0)
    const [country,setCountry] = useState("vie")
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    const [resultTranslate,setResultTranslate] = useState("")
    const [languageTarget,setLanguageTarget] = useState("en")
    const [textSource,setTextSource] = useState("")

    useEffect(()=>{
        handleTranslateMain()
    },[text,languageTarget]) 
    const handleTranslateMain = async()=> {
        console.log("zozozo", languageTarget)
        if(text != ""){
            console.log( { text:text, target:languageTarget })
            const result = await  axiosClient.post(`image/translate`, { text:text, target:languageTarget });
            console.log("this is translate",result.data.data)
            setResultTranslate(result.data.data)
        }
    }
    const handleChangeTextSource = (e) => {
        console.log("12312314123")
        setTextSource(e.target.value)
        handleTranslateMain(e.target.value)
    }
    const handleChangeLanguage = (e)=>{
        console.log("Language changed: ",e.target.value)
        setLanguageTarget(e.target.value)
    }
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)
        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])


    useEffect(()=>{
        handleImageToText()
    },[country,preview])
    
   
    
    const handleImageToText = ()=>{
        setLoading(true)
        if(preview){
        setProgress(0)
        Tesseract.recognize(
            preview,
            country,
            { logger: m => setProgress(m?.progress) }
          ).then(({ data: { text } }) => {
            setText(text)
            setLoading(false)
        })
        }
    }
    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }
    const handleChangeCountry = (e) => {
        // console.log(e.target.value)
        setCountry(e.target.value)
    }
    // const translate = require('translate-google')

    // translate('I speak Chinese', {to: 'vie'}).then(res => {
    //     console.log(res)
    // }).catch(err => {
    //     console.error(err)
    // })

       
    return(
      <div className="container">
          <h1 className="dyno-title">Chuyển ảnh sang văn bản</h1>
                <select onChange={(e)=> handleChangeCountry(e)} >
                <option value="vie">Vietnamese</option> 
                <option value="eng">English</option>
                <option value="chi_sim">Chinese</option>
                </select>
            
            <input type='file' onChange={onSelectFile} />
            {selectedFile &&  <img src={preview} /> }
            <h1>This is text </h1>
            {loading ? <h3>{`loading text ${Math.round(progress * 100)} %`}</h3>: <h2></h2> }
            <Speaker isWrap={true}  text={text}> 
                    <h2>{text}</h2>
            </Speaker>
            
            <div>
                    <select onChange={handleChangeLanguage}>
                        {language.map((item,index)=>(
                            <option key={index} value={item[0]}>{item[1]}</option> 
                        ))}
                        {/* <option value="vi">to Eng</option> 
                        <option value="en">to Vie</option>Í */}
                        </select>
                    <h1>{resultTranslate}</h1>
            </div>
            {/* <input type="textarea" 
            name="textValue"
            onChange={handleChangeTextSource}
            />
           <button onClick={()=>handleTranslateMain()}>Start translate</button> */}
       </div>
        
    )
}
    