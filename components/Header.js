import Link from 'next/link';
import { GiHamburger } from 'react-icons/gi';

const Header = () => {
  return (
    <header>
      <div>
        <GiHamburger />
      </div>
      <nav>
        <Link href={'/'}>Home</Link>
        <Link href={"/about"}>About us</Link>
        <Link href={"/feedback"}>Feedback</Link>
        <Link href={'/burgers'}>Our burgers</Link>
      </nav>
    </header>
  );
}

export default Header;