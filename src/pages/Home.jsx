import Nav from "../components/Nav";
import banner from "../assets/banner.png";
import SliderCarousel from "../components/SliderCarousel";
import truck from "../assets/deliveryTruck.png";
import gift from "../assets/discount.png";
const Home = () => {
  return (
    <div className="bg-[#FBFBFB]">
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
        <SliderCarousel />
      </div>
      <div className="bg-[#FBFBFB] h-full flex flex-row items-center justify-between px-20 m-10">
        <div className="bg-[linear-gradient(90deg,rgba(260,260,260,1)_0%,rgba(230,230,230,1)_100%)] flex items-center justify-around w-[40%] rounded-full">
          <div className="flex flex-col text-4xl">
            EXPRESS <span className="text-[#007A64] mt-1"> DELIVERY</span>
          </div>
          <img src={truck} className="w-[30%]" alt="" />
        </div>

        <div className="bg-[linear-gradient(90deg,rgba(260,260,260,1)_0%,rgba(230,230,230,1)_100%)] flex items-center justify-around w-[40%] rounded-full">
          <div className="flex items-center justify-center text-4xl p-6">
            <img src={gift} className="w-[40%]" alt="" />
            <div>
              SPECIAL <span className="text-[#007A64] mt-1">DISCOUNT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
