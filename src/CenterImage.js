import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import centerImage from './The_Boardroom_Logo.png'

class CenterImage extends React.Component {
  render() {
    return (
        <Container className="d-flex justify-content-center mt-5 p-5">
          <Image src={centerImage} height="500px"></Image>
        </Container>
    );
  }
}

export default CenterImage;
