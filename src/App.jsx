import { useEffect, useState } from "react";
import axios from "axios";
import { StepBack, StepForward } from "lucide-react";
import GalleryApp from "./components/GalleryApp";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const handleData = async () => {
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=21`
      );
      setUserData(response.data);
    } catch (error) {
      console.error("Error While Fetching Data", error);
    }
  };

  useEffect(() => {
    handleData();
  }, [index]);

  const handlePrev = () => {
    if (index > 1) setIndex(index + 1);
    setUserData([]);
  };

  const handleNext = () => {
    setIndex(index + 1);
    setUserData([]);
  };

  let printImageData = (
    <h3 className="text-gray-400 font-bold absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      Loading...
    </h3>
  );

  if (userData.length > 0) {
    printImageData = userData.map((ele) => {
      return (
        <div key={ele.id}>
          <GalleryApp ele={ele} />
        </div>
      );
    });
  }

  return (
    <div className="min-h-screen text-black bg-gray-200">
      <div className="bg-gray-200 shadow-lg sticky top-0 z-50">
        <div className="bg-gray-200 md:mx-8 w-fit hover:shadow-2xl hover:translate-x-3 hover:bg-gray-800 transition ease-in-out duration-300 rounded-full px-5 py-2 flex justify-center items-center">
          <h2 className="text-black px-4 py-2 hover:text-white md:text-6xl lg:text-6xl text-3xl font-['Telma'] font-extrabold">
            Gallery
          </h2>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 mb-20 pb-6 flex-wrap gap-6">
        {printImageData}
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white border-t-2 border-black/20 flex justify-center gap-6 items-center p-5">
        <button
          onClick={handlePrev}
          className="bg-gray-200 font-mono transition ease-in-out hover:scale-110 hover:shadow-2xl text-sm active:scale-95 cursor-pointer text-black rounded-xl py-2 px-4 font-semibold"
        >
          <StepBack className="hover:-translate-x-0.5 transition ease-in-out" />
        </button>
        <h3 className="font-semibold font-mono">Page {index}</h3>
        <button
          onClick={handleNext}
          className="bg-gray-200 font-mono hover:scale-110 transition ease-in-out hover:shadow-2xl text-sm active:scale-95 cursor-pointer text-black rounded-xl py-2 px-4 font-semibold"
        >
          <StepForward className="hover:translate-x-0.5 transition ease-in-out" />
        </button>
      </div>
    </div>
  );
};

export default App;
