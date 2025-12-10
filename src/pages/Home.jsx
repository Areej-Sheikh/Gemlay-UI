import Nav from "../components/Nav";
import banner from "../assets/banner.png";
import SliderCarousel from "../components/SliderCarousel";
import truck from "../assets/deliveryTruck.png";
import gift from "../assets/discount.png";
const Home = () => {
  return (
    <div className="bg-[#F8F8F8]">
      <Nav />
      <div
        className="h-7 p-5 w-full flex items-center justify-evenly 
             hidden min-[1024px]:flex bg-[#F5F5F5]"
      >
        {[
          "NEW ARRIVAL",
          "RINGS",
          "EARRINGS",
          "PENDANTS",
          "BRACELETS & BANGLES",
          "SOLITIRES",
          "GOLD COINS",
          "ALL JEWELLERY",
        ].map((item) => (
          <p
            key={item}
            className="cursor-pointer p-2  transition-all duration-200 hover:bg-[#cdcdcd] hover:scale-105 hover:text-grey"
          >
            {item}
          </p>
        ))}
      </div>

      <div className="w-full">
        <img src={banner} alt="" className="w-full" />
      </div>
      <div className="flex items-center justify-center">
        <SliderCarousel />
      </div>
      <div
        className="
  bg-[#F8F8F8] h-full 
  flex flex-col gap-8              /* Mobile → stacked */
  items-center justify-center 
  px-6 py-10

  min-[769px]:flex-row             /* Large Tablet → side by side */
  min-[769px]:justify-between
  min-[769px]:px-20
  min-[769px]:m-10
"
      >
        <div
          className="
    bg-[linear-gradient(90deg,rgba(260,260,260,1)_0%,rgba(230,230,230,1)_100%)]
    flex items-center justify-around 
    w-full max-w-[500px] 
    rounded-full shadow-lg shadow-gray-400/50 
    py-6 px-4

    min-[769px]:w-[40%]
  "
        >
          <div className="flex flex-col text-2xl sm:text-3xl md:text-4xl font-semibold">
            EXPRESS <span className="text-[#007A64] mt-1">DELIVERY</span>
          </div>

          <img src={truck} className="w-24 sm:w-28 md:w-[30%]" alt="" />
        </div>

        <div
          className="
    bg-[linear-gradient(90deg,rgba(260,260,260,1)_0%,rgba(230,230,230,1)_100%)]
    flex items-center justify-around 
    w-full max-w-[500px] 
    rounded-full drop-shadow-xl 
    py-6 px-4

    min-[769px]:w-[40%]
  "
        >
          <div className="flex items-center justify-center text-2xl sm:text-3xl md:text-4xl p-2 md:p-6 font-semibold cursor-default">
            <img src={gift} className="w-20 sm:w-24 md:w-[40%]" alt="" />

            <div className="ml-4">
              SPECIAL <span className="text-[#007A64] mt-1">DISCOUNT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
