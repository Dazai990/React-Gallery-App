
const GalleryApp = (props) => {
  return (
    <div>
      <a href={props.ele.url} target="_blank">
        <div className="relative w-full sm:w-md sm:h-[430px] shadow-md sm:rounded-lg lg:rounded-lg overflow-hidden">
          {/* sm:h-96  sm:w-2xl */}
          <img
            className="h-full w-full object-cover"
            loading="lazy"
            width={props.ele.width}
            height={props.ele.height}
            src={props.ele.download_url}
            alt="Images"
          />
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity hover:bg-black/30"></div>
        </div>
        <h2 className="font-bold font-mono text-black text-lg flex justify-center pt-4">
          {props.ele.author}
        </h2>
      </a>
    </div>
  );
};

export default GalleryApp;
