import Header from "./_components/Header";
import Footer from "./_components/Footer";
// import Character from './main/characterRandom/page'
import Characters from "./_components/characters";

export default function Home() {
  return (
    <>
    <div className="flex flex-col justify-center text-center font-serif">
      <Header classname="bg-gray-600"/>
      <Characters className=""/>
      <Footer className="bg-gray-600"/>
      </div>
    </>
  );
}
