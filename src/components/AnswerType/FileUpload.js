import React,{useState} from 'react'
import axios from 'axios'

const FileUpload = () => {
 const [file,setFile] = useState()


 
 const handleChange=(e) => {
    setFile(e.target.files[0])
  }

 const handleSubmit=(e)=>{
    e.preventDefault()
    const url = 'https://docs.google.com/forms/d/e/1FAIpQLSe-hkIF_aUC2xfql5Q2A8TgFNbEhfHaY_sL4zzR7_vyfw77ng/viewform?usp=sf_link';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
        setFile(response.data)
      console.log(response.data);
    });
 }


    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleChange}/>
            <button type="submit">Upload</button>
            </form>
        </div>
    )
}

export default FileUpload