import {Link} from 'react-router-dom';
import './index.scss';

const Home = () => {
  return (
    <>
    <div className="container home-page">
        <div className="text-zone">
            <h1>Hi, <br /> I'm Satvik
            <br /> Web Developer
            </h1>
            <h2>Java / React / JavaScript</h2>
            <Link to="/contact" className="flat-button">Contact Me</Link>
        </div>
    </div>
    </>
  );
}

export default Home;