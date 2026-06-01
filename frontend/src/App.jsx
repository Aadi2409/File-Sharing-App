import React, {useRef, useState} from 'react'
import './App.css'


function App() {
  const fileInputRef = useRef(null)

  const [file, setFile] = useState(null)
  console.log(file)

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile)
  }

  const handleUploadClick = () => {
    fileInputRef.current.click()
  }

  return (
    <>
    <div className='main-wrapper' style={{ backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/934/644/993/adventure-astronaut-fi-futurictic-wallpaper-preview.jpg')" }}>
        <div className='container'>
          <div className='wrapper'>
            <h1>Ghost File Sharing App</h1>
            <p>Upload and share using the downlaod link</p>
            <button onClick={handleUploadClick}>Upload</button>
            <input type="file" style={{ display: "none" }} ref={fileInputRef} onChange={handleFileChange} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
