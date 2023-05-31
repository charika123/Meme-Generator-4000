import React, { useEffect, useState } from 'react'
import "./App.css"
import axios from 'axios'

const options = {
    method: 'GET',
    url: 'https://programming-memes-images.p.rapidapi.com/v1/memes',
    headers: {
      'X-RapidAPI-Key': '74ecdd6e4fmsh40562c6e6c52a2ap19031djsna3ae5d602eba',
      'X-RapidAPI-Host': 'programming-memes-images.p.rapidapi.com'
    }
  };

const APIMemes = () => {
  const [apiMemes, setApiMemes] = useState([]);
  const urlMemes =[																									
  "https://i.redd.it/0gzuv8fw3o271.jpg",																									
  "https://i.redd.it/0rwm171qd5a91.jpg",																									
  "https://i.redd.it/154qoccsw0y51.png",																																			
  "https://i.redd.it/28hc0u3os1191.jpg",																								
  "https://i.redd.it/2fv0y1wmm6991.jpg",																									
  "https://i.redd.it/2ialma4xoiv41.jpg",																								
  "https://i.redd.it/2x8nbwz1shb61.jpg",																									
  "https://i.redd.it/32j7g350w3a91.jpg",																													
  "https://i.redd.it/3o1gzhy7cd991.jpg",									
  "https://i.redd.it/45fncig7l6a91.jpg",				
  "https://i.redd.it/545uzkbnvqq61.jpg",																	
  "https://i.redd.it/5l3se0ros7h61.jpg",																									
  "https://i.redd.it/5yhx7zsi7ug81.jpg",																									
  "https://i.redd.it/6252vioo65a91.jpg",																									
  "https://i.redd.it/630rh1twb8g51.jpg",																									
  "https://i.redd.it/64zx1yfv6y871.png",																									
  "https://i.redd.it/6f73jn6w5ij51.jpg",																								
  "https://i.redd.it/6ipj1dtphh091.jpg",																									
  "https://i.redd.it/6nzz2viw0d791.jpg",																									
  "https://i.redd.it/7h5ouqgqfd891.jpg",																									
  "https://i.redd.it/7m2m2up0mz991.jpg",																									
  "https://i.redd.it/7ptrlc47tuc51.jpg",																									
  "https://i.redd.it/7q9gqt2ie1p51.jpg",
  "https://i.redd.it/7t4ju97gc2991.jpg",																									
  "https://i.redd.it/7xeev69ld4a91.jpg",																									
  "https://i.redd.it/8ossznhv49891.jpg",																													
  "https://i.redd.it/9ayu3g5wiq891.jpg",															
  "https://i.redd.it/aryo9p0vt4p71.png",																									
  "https://i.redd.it/awwffpf75l891.png",					
  "https://i.redd.it/bffwlmuzcur71.jpg",																									
  "https://i.redd.it/bv5kzfmvkq991.png",																									
  "https://i.redd.it/c7r84hl45y891.jpg",
  "https://i.redd.it/fd72n6p5f9191.jpg",																							
  "https://i.redd.it/g37eb3qivuv81.jpg",
  "https://i.redd.it/dax3tu7rk5a91.jpg",																								
  "https://i.redd.it/go8u3ec9n2681.png",																									
  "https://i.redd.it/h1phou8ir6a91.gif",																									
  "https://i.redd.it/h25a5mkvrrx71.jpg",																									
  "https://i.redd.it/h2c4t2fu76a91.gif",																																												
]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data)
        setApiMemes(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const memes = [...apiMemes, ...urlMemes];

  return (
    <div className='page'>
      <h className="title">Programming Memes</h>
      <div className='view-memes'>
        {memes.map((meme) => (
          <div className='image-container'>
            <img className="meme-image" src={typeof meme === 'object' ? meme.image : meme} alt={`Meme`} />
          </div>
        ))}
        </div>
    </div>
  );
};

export default APIMemes;



