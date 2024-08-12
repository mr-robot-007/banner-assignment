import { Link } from "react-router-dom";

function Banner({link,banner,visibility,timer,setVisibility}) {
    function handleChange(e) {
        setVisibility(e.target.value);
        console.log(e.target.value);
      }
  return (
    <>
      <Link to={link} target="_blank">
        <img
          className={`w-full h-[80vh] object-contain`}
          src={banner}
          alt=""
          style={{ opacity: `${visibility}%` }}
          hidden={timer == 0}
        />
      </Link>
      <div>
        {timer ? (
          <span>Banner disappears in : {timer} sec</span>
        ) : (
          <button
            className="bg-blue-600 rounded-md text-white p-2"
            onClick={() => window.location.reload()}
          >
            Refresh
          </button>
        )}
      </div>
      <div className="flex justify-center gap-2" hidden={timer == 0}>
        <span>0</span>
        <input
          type="range"
          name="visibility"
          id="visibility"
          min={0}
          max={100}
          defaultValue={100}
          onChange={handleChange}
        />
        <span>100</span>
      </div>
    </>
  );
}

export default Banner;
