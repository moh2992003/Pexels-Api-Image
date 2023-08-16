import React, { useState, useEffect } from 'react';
import ImageSizes from './ImageSizes';


const ImageCard = ({ image }) => {
  const [showSizes, setShowSizes] = useState(false);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-10">
      <img src={image.src.portrait} alt={`Photo by ${image.photographer}`} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-pink-600 text-xl mb-2">
          Photo by {image.photographer}
        </div>
        <ul className='text-white font-bold text-xl'>
          <li>
            <strong>Photographer_Page: </strong>
            {<a href={image.photographer_url} className='hover:text-purple-500'>Click</a>}
          </li>
          <li>
            <strong>Photographer_avg_color: </strong>
            {image.avg_color}
          </li>
          <ul className="text-white font-bold text-xl">
          {/* ... Existing code ... */}
          <li className="text-center py-2 text-pink-600 hover:text-purple-500">
            <button onClick={() => setShowSizes(!showSizes)}>
              <strong>All Sizes:</strong>
            </button>
            {showSizes && <ImageSizes image={image} />}
          </li>
        </ul>
        </ul>
      </div>
    </div>
  )
}

export default ImageCard;



