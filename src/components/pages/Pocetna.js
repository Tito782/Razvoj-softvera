
import '../../App.css';
import Footer from '../Footer.js';
import HeroSection from '../HeroSection';
import NavbarLoggedIn from '../NavBarLoggedIn';



function Home (){
  return(
    <>
      <NavbarLoggedIn/>
      <HeroSection />
      <Footer/>
    </>
  );
}

export default Home;