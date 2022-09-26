import React from "react";
import { useRef } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import { useNavigate } from "react-router";
const ContactForm = ({setPopUp}) => {
  const EmailRef = useRef();
  const nameRef = useRef();
  const contactRef = useRef();
  const descriptionRef = useRef();
  const companyRef=useRef()
  const navHome = useNavigate();

  const formFunc = async () => {
    if (
      EmailRef.current.value === "" &&
      nameRef.current.value === "" &&
      contactRef.current.value === "" &&
      descriptionRef.current.value === ""
    ) {
      alert("Please enter details");
    } else {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          Email: EmailRef.current.value,
          Name: nameRef.current.value,
          Phoneno: contactRef.current.value,
          Description: descriptionRef.current.value,
          CompanyName:companyRef.current.value
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      navHome("/");
    }
  };

  function handleClick() {
    formFunc();
    setPopUp(false)
  }
  return (
    <div className="w-[80vw]  max-w-[600px] inner3 m-auto mt-10">
        <div>
        <img
          className="fixed w-[100vw] h-[100vh] object-cover top-0 left-0 -z-50 opacity-[2.5%]"
          alt=""
          src="https://mymodernmet.com/wp/wp-content/uploads/2019/10/mr-doodle-doodle-drawings-10.jpg"
          
        />
      </div>
      <div className="flex justify-center flex-col items-center">
        <section className="text-2xl font5 font-semibold py-3 mt-4">CONTACT FORM</section>
        <div className="flex flex-col justify-start items-center w-[100%] ">
          <section className="my-2">
            <span>Name :</span>
            <div>
              <input type="text" className="inner1 px-4 w-[68vw] max-w-[450px] py-[2px] focus:outline-none caret-neutral-100 " ref={EmailRef} />
            </div>
          </section>
          <section className="my-2">
            <span>Email :</span>
            <div>
              <input type="email" className="inner1 px-4 w-[68vw]  max-w-[450px] py-[2px] focus:outline-none caret-neutral-100" ref={nameRef} />
            </div>
          </section>
          <section className="my-2">
            <span>Contact No :</span>
            <div>
              <input type="number" className="inner1 px-4 w-[68vw]  max-w-[450px] py-[2px] focus:outline-none caret-neutral-100" ref={contactRef} />
            </div>
          </section>
          <section className="my-2">
            <span>Company Name :</span>
            <div>
              <input type="text" className="inner1 px-4 w-[68vw]  max-w-[450px] py-[2px] focus:outline-none caret-neutral-100" ref={companyRef} />
            </div>
          </section>
          <section className="my-2">
            <span>Description :</span>
            <div>
                <textarea type="text" className="inner1 pb-12 px-4 w-[68vw]  max-w-[450px] py-[2px] focus:outline-none caret-neutral-100" ref={descriptionRef}>

                </textarea>
              {/* <input  /> */}

            </div>
          </section>
        </div>
        <button
          className="py-2 hover:scale-110 duration-300 flex items-center font-semibold text-sm"
          onClick={handleClick}
        >
          Submit
        </button>
        <button
          className="py-1 hover:scale-110 duration-300 flex items-center font-semibold text-sm text-purple-900"
          onClick={()=>{navHome("/")
        setPopUp(false)}}
        >
          back to HOME!!!
        </button>
      <div className="py-2 hover:scale-110 duration-300 flex items-center my-2 mb-7 font-semibold text-sm inner4 px-5 cursor-pointer"
      onClick={() => window.open("https://www.linkedin.com/in/sanketh-sura-5b0b90178/")}
      >Contact me on LINKED-In</div>
      </div>
      
      {/* <div style="width:100%;height:0;padding-bottom:69%;position:relative;"><iframe src="https://giphy.com/embed/vQqeT3AYg8S5O" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/gets-smart-question-vQqeT3AYg8S5O">via GIPHY</a></p> */}
    </div>
  );
};

export default ContactForm;
