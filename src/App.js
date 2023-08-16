import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import ImageCard from './components/ImageCard';
import ImageSizes from './components/ImageSizes';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState('Pexels');


useEffect(() => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://api.pexels.com/v1/search?query=${term}&per_page=39`;

  fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Authorization': apiKey,
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setImages(data.photos);
      setIsLoading(false);
    })
    .catch(err => {
      console.error('Fetch error:', err);
    });
}, [term]);

  return (
    <div style={{
        backgroundColor: 'black',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        minHeight: '100vh ', 
      }}>
      <Header />
      <LandingPage searchText={(inputValue) => {setTerm(inputValue)}} />
      <div className='container mx-auto'>
      {!isLoading && images.length === 0 && <h1 className='text-6xl mx-auto text-center text-white'>Not Found</h1>}
      {isLoading ? <h1 className='text-6xl mx-auto text-center text-white'>Loading</h1> : <div className='grid md:grid-cols-3 sm:gap-5 justify-center'>
              {images.map(image => {
                  return (<ImageCard key={image.id} image={image} />)
              })}
          </div> }
        </div>
    </div>
  )
}

export default App;



