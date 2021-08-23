import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

import { Business, BusinessInfo, Content, BusinessPhoto } from './styles';
import Text from '../Text';
import ImageSkeleton from '../ImageSkeleton';

const BusinessCard = ({ business, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Business onClick={onClick}>
      <BusinessInfo>
        <Text size="large">{business.name}</Text>
        <ReactStars count={5} value={business.rating} edit={false} isHalf activeColor="#e7711c" />
        <Content size="medium">{business.formatted_address || business.vicinity}</Content>
      </BusinessInfo>
      <BusinessPhoto
        imageLoaded={imageLoaded}
        onLoad={() => setImageLoaded(true)}
        src={business.photos ? business.photos[0].getUrl() : business.icon}
        alt="foto do comércio"
      />
      {!imageLoaded && <ImageSkeleton width="100px" height="100px" />}
    </Business >
  );
};

export default BusinessCard;
