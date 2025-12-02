import Nav from "../components/Nav"
import banner from "../assets/banner.png";
import SliderCarousel from "../components/SliderCarousel";
const Home = () => {
  return (
    <div>
      <Nav />
      <div className="h-7 p-5 w-full flex items-center justify-evenly bg-[#F5F5F5]">
        <p>NEW ARRIVAL</p>
        <p>RINGS</p>
        <p>EARRINGS</p>
        <p>PENDANTS</p>
        <p>BRACELETS & BANGLES</p>
        <p>SOLITIRES</p>
        <p>GOLD COINS</p>
        <p>ALL JEWELLERY</p>
      </div>
      <div className="w-full">
        <img src={banner} alt="" className="w-full" />
      </div>
      <div className="flex items-center justify-center">
    <SliderCarousel/>
      </div>
        
    </div>
  );
}

export default Home