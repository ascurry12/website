import { useParams } from 'react-router-dom';
import About from './About';
import Gallery from './Gallery';
import Projects from './Projects';

const DynamicPage = () => {
  const { title } = useParams();

  switch (title) {
    case 'about':
      return <About />;
    case 'artwork':
      return <Gallery />;
    case 'projects':
      return <Projects />;
    default:
      return <div>Page not found</div>;
  }
};

export default DynamicPage;
