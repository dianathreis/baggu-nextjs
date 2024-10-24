'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const CoverPhoto = () => (
  <Container fluid className="px-0">
    <img
      src="https://www.baggu.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ft9jjg1v5%2Fproduction%2Fff39ddada52836c87867ab70d96a3b2f3a1c828d-2880x1800.jpg&w=3840&q=75"
      alt="Baggu Cover"
      className="img-fluid"
    />
  </Container>
);
export default CoverPhoto;
