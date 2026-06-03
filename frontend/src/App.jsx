import React, { useRef, useEffect, useState } from 'react'
import { uploadFile } from './service/api'
import './App.css'


function App() {
  const fileInputRef = useRef(null)
  const [result, setResult] = useState(null)
  const [file, setFile] = useState(null)
  console.log(file)

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        try {
          const data = new FormData()
          data.append("name", file.name);
          data.append("file", file);

          const response = await uploadFile(data);
          setResult(response.path);
          console.log("File Uploaded Successfully:", response);
        }
        catch (error) {
          console.error("Error uploading file:", error);
        }
      };
    };
    getImage();
  }, [file]);
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
              {result && (
                <div>
                  <p>File uploaded successfully!</p>
                  <a href={result} target="_blank" rel="noopener noreferrer">
                    Download File
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    )
  }

export default App
