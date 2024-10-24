import { Container } from 'react-bootstrap';
import TopMenu from '@/components/TopMenu';
import MessageBar from '@/components/MessageBar';
import CoverPhoto from '@/components/CoverPhoto';
import FooterMenu from '@/components/FooterMenu';

/** The Home page. */
const Home = () => (
  <main>
    <Container fluid>
      <MessageBar />
      <TopMenu />
      <CoverPhoto />
      <FooterMenu />
    </Container>
  </main>
);

export default Home;
