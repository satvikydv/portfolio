import './index.scss';
import {Link, NavLink} from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
   return (
      <div className='nav-bar'>
         <Link className='logo' to='/'>  {/* redirects to the home page */}
            <img src={LogoS} alt='logo' />
         </Link>

         <nav>
            <NavLink exact="true" to='/' activeClassName='active'>
                <FontAwesomeIcon icon={faHome} color="grey" />
            </NavLink>
            <NavLink exact="true" to='/' activeClassName='active' className="about-link">
                <FontAwesomeIcon icon={faUser} color="grey" />
            </NavLink>
            <NavLink exact="true" to='/' activeClassName='active' className="contact-link">
                <FontAwesomeIcon icon={faEnvelope} color="grey" />
            </NavLink>
         </nav>
      </div>
   );
}

export default Sidebar;