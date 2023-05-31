import React, { useState, useEffect} from 'react'

const objectToParam = (object) =>{
  const params = Object.entries(object).map(([key, value]) => `${key}=${value}`)
  return '?' + params.join("&")
}
const GenerateMeme = () => {
    const [templates, setTemplates] = useState([])
    const [choice, setChoice] = useState("")
    const [topText, setTopText] = useState("")
    const [bottomText, setBottomText] = useState("")
    const [meme, setMeme] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null);

      useEffect(() => {
        fetch("https://api.imgflip.com/get_memes").then(x => x.json().then(response => setTemplates(response.data.memes)))
      })

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
    const handleFormSubmit = (e) => {
      e.preventDefault();
      return(
        <div style={{ 
          width: "400",
          backgroundImage: {selectedImage}
        }}>
          <h>{topText}</h>
        </div>
      )
    };
  
      if (meme) {
        return (
        <div style={{ textAlign: "center" }}> <img style={{ width: 400}} src={meme} alt="custom meme" />
        </div>
        )}
  return (
      <div>
        <h1 className='title'>Make a Meme!</h1>
        <div className="generate-meme">
          <div className='column-one'>
          <h className='subtitles'>Upload an image.</h>
          <p>Please keep in mind, the typed text will be placed at the bottom of the image.</p>
          {choice ? (
          <>
          <img src={choice.url} alt="Template" className='choice'/>
          <form onSubmit={async e => {
            e.preventDefault()
            const params = { 
              template_id: choice.id, 
              text0: topText, 
              text1: bottomText, 
              username: 'CharikaJangili',
              password: 'charika123'
            }
            const response = await fetch (`https://api.imgflip.com/caption_image${objectToParam(params)}`)
            const json = await response.json()
            setMeme(json.data.url)
            }}>
          <label>Top Text</label>
          <input type = "text" value={topText} onChange={e => setTopText(e.target.value)}></input>
          <label>Bottom Text</label>
          <input type = "text" value={bottomText} onChange={e => setBottomText(e.target.value)}></input>
          <button type = "submit">Done</button>
          </form>
          </>
          ) : (
          <>
          <input type="file" onChange={handleImageChange} />
          {!meme && selectedImage && (
                <div>
                  <h3>Selected Image:</h3>
                  <img src={selectedImage} alt="Selected" />
                  <form onSubmit={handleFormSubmit}>
                    <label>Text</label>
                    <input type="text" value={topText} onChange={(e) => setTopText(e.target.value)}></input>
                    <button type="submit">Done</button>
                  </form>
                </div>
              )}
          {meme && (
            <div style={{
              width: "400px",
              backgroundImage: `url(${selectedImage})`
            }}>
              <h>{topText}</h>
            </div>
          )}
          </>
          )}
        </div>
        
        <div className='column-two'>
          <h className='subtitles'>Or, choose from the templates below.</h>
        <div>
          {templates.map(templates => (
          <img key={templates.id} 
                src={templates.url} 
                className='generate-images' 
                alt={templates.name}
                onClick={() => {
                  setChoice(templates)
                }} />
          ))}
        </div>
        </div>
    </div>
    </div>
  )
}

export default GenerateMeme