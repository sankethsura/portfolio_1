import "./App.css";
import React from "react";
import { RiContactsFill } from "react-icons/ri";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { IoDocumentTextSharp } from "react-icons/io5";
// import Waiting from "./Waiting";
import FrontPage from "./FrontPage";
import Page2 from "./page2_about";
import Contact from "./Contact";
import Projects from "./projects";
import { useNavigate } from "react-router";
import { useEffect } from "react";
// import { useState } from "react";

function Home({popUp}) {
  const nav = useNavigate();


useEffect(() => {
    if(popUp){
    setTimeout(() => {
      nav("waiting");
    }, 176000);
    setTimeout(() => {
      nav("contactform");
    }, 180000);
  }
  }, [nav,popUp]);

  return (
    <div className="App">
      <div className="w-[100vw] flex items-center justify-around md:justify-center mx-auto h-[60px] mt-4 fixed z-50">
        <div className="w-[100vw] h-[90px]  fixed -z-10 backdrop-blur-sm "></div>
        <div
          onClick={() => {
            nav("waiting");
          }}
          className="w-[60px] h-[60px] inner3 mx-4 font5 text-[25px] items-center justify-center flex  hover:scale-110 duration-300 cursor-default"
        >
          
          <IoDocumentTextSharp />
        </div>

        <section className="inner3 h-[60px] md:w-[60vw] w-[60px]  mx-4 flex justify-center hover:scale-110 duration-300 md:hover:scale-100">
          {" "}
          <div
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
            className="px-3 hidden md:flex hover:scale-125 duration-300 cursor-pointer scale-110"
          >
            <BsArrowUpCircleFill />
          </div>
          <div
            onClick={() => {
              //  console.log(window.innerHeight)
              window.scrollTo({
                top: window.innerHeight * 0.9,
                left: 0,
                behavior: "smooth",
              });
            }}
            className="px-3 hidden md:flex hover:scale-110 duration-300 cursor-pointer"
          >
            About me
          </div>
          <div
            onClick={() =>
              window.open("https://www.linkedin.com/in/sanketh-sura-5b0b90178/")
            }
            className="px-3 hidden md:flex hover:scale-110 duration-300 cursor-pointer"
          >
            Linked-In
          </div>
          <div
            onClick={() => {
              nav("/contactform");
            }}
            className="px-3 hidden md:flex hover:scale-110 duration-300 cursor-pointer"
          >
            Contact
          </div>
          <div
            onClick={() => {
              nav("/contactform");
            }}
            className="px-3 md:hidden flex cursor-pointer"
          >
            <RiContactsFill />
          </div>
        </section>
      </div>
      <div className="w-[90vw] m-auto">
        <FrontPage />
      </div>
      <div className="w-[90vw] m-auto">
        <Page2 />
      </div>
      <div className=" w-[80vw] m-auto">
        <Contact/>
      </div>
      <div>
        <div className="flex justify-center font4  text-[36px] py-8">
          Projects
        </div>
        <Projects
          number={1}
          name={"Disney+ Clone"}
          used={"React JS HTML TailWind"}
          link={
            "https://firebasestorage.googleapis.com/v0/b/portfolio-285b4.appspot.com/o/disney.mp4?alt=media&token=e8e335c0-6d24-4335-b3f4-8dca8a42fb80"
          }
          url={"https://disneyplus-cloneby-sanketh.netlify.app/"}
          git={"https://github.com/sankethsura/Disney-clone"}
          img={
            "https://firebasestorage.googleapis.com/v0/b/portfolio-285b4.appspot.com/o/disney1.png?alt=media&token=d3c290c3-a84c-47e1-8137-519ecbe0bcb4"
          }
        />
        <Projects
          number={2}
          name={"Crypto-Currency App"}
          used={"React JS HTML TailWind"}
          link={
            "https://firebasestorage.googleapis.com/v0/b/portfolio-285b4.appspot.com/o/crypto.mp4?alt=media&token=3c757471-3778-4fe3-a288-cc4aa172a6a1"
          }
          url={"https://crypto-currency-sanketh.netlify.app/"}
          git={"https://github.com/sankethsura/Crypto-currency-App"}
          img={
            "https://firebasestorage.googleapis.com/v0/b/portfolio-285b4.appspot.com/o/crypto1.png?alt=media&token=3d061dee-8be2-4285-b41d-6828cb05903a"
          }
        />
        <Projects
          number={3}
          name={"Google Search Clone"}
          used={"React JS HTML TailWind"}
          link={
            "https://firebasestorage.googleapis.com/v0/b/portfolio-285b4.appspot.com/o/googlesearch.mp4?alt=media&token=c491b8c6-4b0b-4437-be9a-3de88c2c0894"
          }
          url={"https://google-search-clone-sanketh.netlify.app/"}
          git={"https://github.com/sankethsura/Google-Search-Clone"}
          img={
            "https://firebasestorage.googleapis.com/v0/b/portfolio-285b4.appspot.com/o/g-search1.png?alt=media&token=50511d14-ec86-4d9e-9cc8-d7d1e903fe6d"
          }
        />
        <Projects
          number={4}
          name={"Tic-Tac-Toe"}
          used={"JS HTML TailWind"}
          link={
            "https://firebasestorage.googleapis.com/v0/b/portfolio-285b4.appspot.com/o/tictactoe.mp4?alt=media&token=17a5a37e-fac9-4b5d-9b91-7ed3230a0378"
          }
          url={"https://tic-tac-toe-sanketh.netlify.app/"}
          git={"https://github.com/sankethsura/Tic-Tac-Toe"}
          img={
            "https://firebasestorage.googleapis.com/v0/b/portfolio-285b4.appspot.com/o/tic1.png?alt=media&token=48ef0ce0-0de8-46c6-8144-d15eefbdb32a"
          }
        />
        <Projects
          number={5}
          name={"Houze Kraft"}
          used={"JS HTML TailWind"}
          img={
            "https://firebasestorage.googleapis.com/v0/b/portfolio-285b4.appspot.com/o/hous.png?alt=media&token=bec7a8e4-e637-417d-82e9-c7ff48dafee3"
          }
        />
      </div>
    </div>
  );
}

export default Home;
