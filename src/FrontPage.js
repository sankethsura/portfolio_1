import { useNavigate } from "react-router";

const FrontPage = () => {

  const nav=useNavigate()

  return (
    <div className="w-[90vw] h-[100vh] flex items-center justify-center flex-col m-auto ">
      <div>
        <img
          className="fixed w-[100vw] h-[100vh] object-cover top-0 left-0 -z-50 opacity-[2%]"
          alt=""
          src="https://mymodernmet.com/wp/wp-content/uploads/2019/10/mr-doodle-doodle-drawings-10.jpg"
          
        />
      </div>
      <div className="fixed w-[100vw] h-[100vh] object-cover top-0 left-0 -z-40 bg-gradient-to-br from-[#56556e57] to-transparent opacity-60"></div>

      <section className="backdrop-blur-sm  py-10 px-24 rounded-2xl ">
        <div className="md:text-[22px] text-[15px] font4 pl-1">I'm a</div>
        <div className="md:text-[65px] text-[38px] font5 text-[#363062]">
          Front End{" "}
        </div>
        <div className="md:text-[65px] text-[38px] font5 text-[#363062]">
          Developer
        </div>
        <div className="md:text-[22px] text-[15px] font4 pl-1">and a</div>
        <div className="md:text-[65px] text-[38px] font5 text-[#363062]">
          3D Artist
        </div>
        <div onClick={()=>{nav("/contactform")}} className="inner3 px-10 py-3 flex mt-10  cursor-pointer justify-center text-center hover:scale-105 duration-300 font-semibold text-md">
          Contact Me
        </div>
      </section>
    </div>
  );
};

export default FrontPage;
