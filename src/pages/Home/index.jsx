/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import {
  BusinessCard,
  Modal,
  Logo,
  Map,
  ImageCard,
  Loader,
  Text,
  ImageSkeleton as Skeleton,
} from '../../components';

import { Container, Search, Title, Carousel, Wrapper } from './styles';

const Home = () => {
  const [value, setValue] = useState('');
  const [query, setQuery] = useState('');
  const [placeId, setPlaceId] = useState(null);
  const [open, setOpen] = useState(false);
  const { businesses, businessSelected } = useSelector((state) => state.businesses);
  const hasBusinesses = businesses.length > 0;

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  const renderCarousel = () => {
    if (hasBusinesses) {
      return (
        <>
          <Title size="large">Estabelecimentos na sua Área</Title>
          <Carousel {...settings}>
            {businesses.map((business) => (
              <ImageCard key={business.place_id} business={business} />
            ))}
          </Carousel>
        </>
      );
    }
    return <Loader />;
  };

  const renderBusinesses = () => {
    if (hasBusinesses) {
      return businesses.map((business) => (
        <BusinessCard
          key={business.place_id}
          business={business}
          onClick={() => {
            setPlaceId(business.place_id);
            setOpen(true);
          }}
        />
      ));
    }
    return null;
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setQuery(value);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Search>
        <Logo />
          <TextField
            outlined
            label="Pesquisar"
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input type="text" value={value} onKeyPress={handleKeyPress} onChange={handleChange} />
          </TextField>
          {renderCarousel()}
        </Search>
        {renderBusinesses()}
        <Modal open={open} onClose={() => setOpen(false)}>
          {businessSelected ? (
            <>
              <Text size="large">{businessSelected?.name}</Text>
              <Text size="medium">{businessSelected?.formatted_phone_number}</Text>
              <Text size="medium">{businessSelected?.formatted_address}</Text>
              <Text size="medium">
                {businessSelected?.opening_hours?.open_now
                  ? 'Aberto agora :)'
                  : 'Fechado neste momento :('}
              </Text>
            </>
          ) : (
            <>
              <Skeleton width="10px" height="10px" />
              <Skeleton width="10px" height="10px" />
              <Skeleton width="10px" height="10px" />
              <Skeleton width="10px" height="10px" />
            </>
          )}
        </Modal>
      </Container>
      <Map query={query} placeId={placeId} />
    </Wrapper>
  );
};

export default Home;
