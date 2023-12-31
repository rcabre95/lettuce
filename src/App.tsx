import Header from './components/header/Header';
import Reservation from './components/reservation/Reservation';
import Footer from './components/footer/Footer';
import MainContent from './components/content/MainContent';
import Banner from './components/banner/Banner';

function App() {

  return (
    <>
      <main className={`font-playfair-display bg-white-wood bg-cover bg-center bg-no-repeat bg-local h-fit w-screen flex flex-col justify-center items-center`}>
        <Header />
        <Banner />
        <Reservation />
        <MainContent />
        <Footer />
      </main>
    </>
  )
}

export default App
