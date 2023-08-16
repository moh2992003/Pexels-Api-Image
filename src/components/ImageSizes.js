import React from 'react';

const ImageSizes = ({ image }) => {
  const sizes = [
    'original',
    'large2x',
    'large',
    'medium',
    'small',
    'portrait',
    'landscape',
    'tiny',
  ];

  const handleDownload = (size) => {
    const imageUrl = image.src[size];
    if (imageUrl) {
      fetch(imageUrl)
        .then((response) => response.blob())
        .then((blob) => {
          const a = document.createElement('a');
          const url = window.URL.createObjectURL(blob);
          a.href = url;
          a.download = `image_${size}.jpg`;
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
        })
        .catch((error) => console.error('Error downloading image:', error));
    }
  };

  return (
    <div className="mt-4">
      <p className="text-xl font-semibold mb-2">Choose resolution</p>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            className="bg-pink-600 text-white px-3 py-2 rounded-md hover:bg-pink-700"
            onClick={() => handleDownload(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSizes;
