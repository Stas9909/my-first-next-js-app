import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <div className='content'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  ); 
}

export default MainLayout;