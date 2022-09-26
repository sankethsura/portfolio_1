import { GiClick } from 'react-icons/gi';

const Projects = (props) => {
  return (
    <div className="w-[75vw] mx-auto py-10 inner3 mb-10 ">
      <section className="flex flex-col md:flex-row  w-[75vw] items-center xl:justify-around">
        <div className="md:w-[37vw] md:h-[25vw]  mx-10 relative">
          {/* <video
            onClick={() => window.open(props.url)}
            className="rounded-lg md:w-[34vw] md:h-[22vw] object-cover inner3 md:opacity-0 md:hover:opacity-100 cursor-pointer"
            autoPlay={true}
            loop={true}
            playsInline={true}
          >
            <source src={props.link} type="video/mp4" />
          </video> */}
          <img
          onClick={() => window.open(props.url)}
           className="md:w-[37vw] md:h-[25vw] object-cover rounded-2xl hover:scale-105 duration-200 cursor-pointer hover:opacity-50" src={props.img} alt="" />

           
        </div>
        <div onClick={() => window.open(props.url)} className="flex justify-center items-center md:items-start flex-col pt-7 md:pt-0 xl:-translate-x-[5rem]">
          <p className="font-bold font4 text-[30px] lg:text-[28px]"># {props.number}</p>
          <p className="font4 font-bold lg:text-[28px]"> {props.name}</p>
          <p className="font6 text-sm lg:text-[15px]"> {props.used}</p>
          <p onClick={() => window.open(props.git)} className="font6 text-sm lg:text-[15px] cursor-pointer hover:scale-110 duration-300 inner1 px-3 py-2 my-3"> --GitHub Link</p>
        </div>
      </section>
    </div>
  );
};

export default Projects;
