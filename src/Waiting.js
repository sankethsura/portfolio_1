const Waiting = () => {
  return (
    <div className="w-[90vw] h-[80vh] flex justify-center items-center m-auto">

    <div className="text-black inner3 p-5 w-[50vw] text-[40px] lg:text-[70px] m-auto">
      <div>
        <img
          className="fixed w-[100vw] h-[100vh] object-cover top-0 left-0 -z-50 opacity-[2.5%]"
          alt=""
          src="https://mymodernmet.com/wp/wp-content/uploads/2019/10/mr-doodle-doodle-drawings-10.jpg"
          />
      </div>
      <div className="flex justify-center items-center text-center flex-col ">
        Hi, It's been a while since you are here ,feel free to <span className="text-purple-900 font-semibold font4">CONTACT ME</span>
      </div>
          </div>
    </div>
  );
};

export default Waiting;
