import Skills from "./Skills";
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
const Page2 = () => {
  return (
    <div className="w-[80vw]  m-auto">
      {/* <section className="h-[20vh] "></section> */}
      <div className="font4 text-[36px] flex justify-center  pb-2 md:pb-12">About Me</div>
      <section className="md:flex  justify-center items-start ">
        <div className="w-[55%] flex flex-col justify-center items-center m-auto my-3">
          <div className="font4 font-semibold text-lg">Skills</div>
          <Skills skill1={"HTML"} value={"8"} logo={<AiFillHtml5 />}/>
          <Skills skill1={"CSS"} value={"8"} logo={<IoLogoCss3 />}/>
          <Skills skill1={"Java-script"} value={"7"} logo={<IoLogoJavascript />}/>
          <Skills skill1={"React"} value={"7"} logo={<FaReact />}/>
          <Skills skill1={"Tailwind"} value={"9"} logo={<SiTailwindcss />}/>
        </div>
        <div className="w-[100%] flex flex-col justify-center items-center m-auto my-1 md:pl-8">
          <div className="font4 font-semibold text-lg">Details</div>
          <section>

          
          <div className="inner3 p-8 my-5">
            <p>
              My name is{" "}
              <span className="font4 font-bold text-xl text-[#363062]">
                Sanketh G
              </span>
              . <br></br>
              I'm a professional 3D Artist, Interior Designer and a Front-end
              Developer, looking to switch my career towards{" "}
              <span className="font4 font-bold text-md text-[#363062]">
                Web Development
              </span>
              .
            </p>
          </div>
          <div className="inner3 p-8 my-2">
            <p>
              I have 3+ years of professional Experience as 3D Artist with a few
              Interior design firms.
            </p>
          </div>
          <div className="inner3 p-8 mt-5">
            <p>
              Education : bachelor of engineering in Civil.
            </p>
          </div></section>
        </div>
      </section>
    </div>
  );
};

export default Page2;
