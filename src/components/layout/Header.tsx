import { ReactComponent as Logo } from '../../static/image/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <Logo />
      </Link>
    </header>
  );
};

export default Header;
