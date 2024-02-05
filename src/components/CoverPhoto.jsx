import React from 'react';

const CoverPhoto = ({imageUrl}) => {
  return (
    <img src={imageUrl} className='object-cover w-full h-[438px]' alt="cover photo" />
  )
}

export default CoverPhoto;
