import { useEffect, useState } from "react";
import { getBanner } from "../helpers/banner";
import banner from "../assets/banner.png";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";

function Home() {
  const [visibility, setVisibility] = useState(100);
  const [timer, setTimer] = useState(0);
  const [link, setLink] = useState("");
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    async function getBannerDetails() {
      try {
        const data = await getBanner();
        console.log(data);
        setTimer(data[0].timer);
        setLink(data[0].banner_link);
        setShowBanner(data[0].is_visible);
      } catch (e) {
        console.log(e);
      }
    }
    getBannerDetails();
  }, []);

  useEffect(() => {
    var timerId = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else if (timer == 0) {
        setVisibility(0);
      }
    }, 1000);

    return () => clearInterval(timerId);
  }, [timer]);

  return (
    <div className="flex flex-col  items-center justify-center gap-8">
      {showBanner && (
        <Banner
          link={link}
          banner={banner}
          visibility={visibility}
          timer={timer}
          setVisibility={setVisibility}
        />
      )}

      <Link to="/dashboard" className="p-2 bg-gray-500 text-white rounded-md mt-2">
        Admin Login
      </Link>
    </div>
  );
}

export default Home;
