import React, { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';
import { DropzoneArea } from "material-ui-dropzone";
import Speaker from 'components/UI/Speaker';
import SpeakerIcon from 'components/UI/Speaker';


export default function ImagetoTextScreen(){
    const [text,setText] = useState("")
    const [loading,setLoading] = useState(true)
    const [progress,setProgress] = useState(0)
    // const [url,setUrl] = useState("https://www.researchgate.net/publication/337702424/figure/fig3/AS:831888872730624@1575349171831/Students-Paragraph-Writing.png")
    const [country,setCountry] = useState("vie")
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

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
    return(
      <div className="container">
          <h1 className="dyno-title">Chuyển ảnh sang văn bản</h1>
        <div>
            {/* <img src={url} alt=""/>  */}
            
            {/* <label for="cars">Choose a car:</label> */}
    
                <select onChange={(e)=> handleChangeCountry(e)} name="cars" id="cars">
                <option value="vie">Vietnamese</option> 
                <option value="eng">English</option>
                <option value="chi_sim">Chinese</option>
                </select>
            {/* <form action={()=>{handleSubmitFile()}}>
                <input type='file' id="myFile" name="filename"  className="_btn _btn-primary"/>
                <input type="submit" className="_btn _btn-primary"/>
            </form>       */}
            {/* <DropzoneArea onChange={()=>handleSubmitFile()} /> */}
            <input type='file' onChange={onSelectFile} />
            {selectedFile &&  <img src={preview} /> }
            <h1>This is text </h1>
            {loading ? <h3>{`loading text ${Math.round(progress * 100)} %`}</h3>: <h2></h2> }
            <Speaker isWrap={true}  text={text}> 
                    <h2>{text}</h2>
            </Speaker>
           
        </div>
        </div>
    )
}