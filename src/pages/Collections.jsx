import coll1 from "../assets/collection1.png"
import coll2 from "../assets/collection2.png"
import coll3 from "../assets/collection3.png"
import coll4 from "../assets/collection4.png"
import coll5 from "../assets/collection5.png"
import coll6 from "../assets/collection6.png"
const Collections = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-10 bg-[#FBFBFB] px-10">
      <div className="flex flex-col items-center justify-center text-xl">
        <div className="flex items-center gap-3">
          <div className="h-0.5 w-20 bg-[#007A64]" />
          <div className="font-semibold">COLLECTIONS</div>
          <div className="h-0.5 w-20 bg-[#007A64]" />
        </div>

        <div className="text-[#007A64] font-semibold">
          DISCOVER YOUR WORLD OF JEWELLERY
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <img src={coll1} alt="collection 1" />
        <img src={coll2} alt="collection 2" />
        <img src={coll3} alt="collection 3" />
        <img src={coll4} alt="collection 4" />
        <img src={coll5} alt="collection 5" />
        <img src={coll6} alt="collection 6" />
      </div>
      <div className="mt-5 text-[#007A64]">
        DISCOVER ALL<i class="ri-arrow-right-s-fill"></i>
      </div>
    </div>
  );
}

export default Collections