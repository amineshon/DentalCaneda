import { useEffect, useState } from 'react';
import SliderImage from './SliderImage';

const Banner = () => {
  const [imageID, setImageID] = useState(0);

  const images = [
    {
      src: '/images/homePage/top.png',
      alt: 'bg1',
      priority: true,
      showImage: imageID === 0,
    },
 
  ];

  // useEffect(() => {
  //   const slideInterval = setInterval(() => {
  //     setImageID((imageID) => (imageID + 1) % 4);
  //   }, 10000);

  //   return () => clearInterval(slideInterval);
  // }, []);

  return images.map((image, index) => (
    <SliderImage
      src={image.src}
      alt={image.alt}
      priority={image.priority}
      showImage={image.showImage}
      key={index}
    
    />
  ));
};


export default Banner;
