import './index.scss';
import {Link, NavLink} from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
   return (
      <div className='nav-bar'>
         <Link className='logo' to='/'>  {/* redirects to the home page */}
            <img src={LogoS} alt='logo' />
         </Link>

         <nav>
            <NavLink exact="true" to='/' activeClassName='active'>
                <FontAwesomeIcon icon={faHome} color="white" />
            </NavLink>
            <NavLink exact="true" to='/about' activeClassName='active' className="about-link">
                <FontAwesomeIcon icon={faUser} color="white" />
            </NavLink>
            <NavLink exact="true" to='/contact' activeClassName='active' className="contact-link">
                <FontAwesomeIcon icon={faEnvelope} color="white" />
            </NavLink>
         </nav>

         <ul>
            <li>
                <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/satvikydv/'>
                    <FontAwesomeIcon icon={faLinkedin} color="grey" />
                </a>
            </li>

            <li>
                <a target='_blank' rel="noreferrer" href='https://github.com/satvikydv'>
                    <FontAwesomeIcon icon={faGithub} color="grey" />
                </a>
            </li>

            <li>
                <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/satvikydv/'>
                    <FontAwesomeIcon icon={faTwitter} color="grey" />
                </a>
            </li>
         </ul>
      </div>
   );
}

export default Sidebar;