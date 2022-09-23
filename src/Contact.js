const Contact = () => {
  return (
    <div>
      <section className="flex-col justify-center items-center m-auto my-3 md:pl-8">
        <div className="font4 flex justify-center font-semibold text-lg pb-3">Info</div>
        <div className="inner3 flex p-8 my-2 flex-col lg:flex-row">
          <section className="w-full">
            <p className="inner1 px-7 py-3 m-3 ">Name : Sanketh G</p>
            <p className="inner1 px-7 py-3 m-3 ">Phone : +91 7892165929</p>
          </section>
          <section className="w-full">
            <p className="inner1 px-7 py-3 m-3 ">Country : India</p>
            <p className="inner1 px-7 py-3 m-3 ">
              Email : sanketh.sura.2@gmail.com
            </p>
          </section>
          <section className="w-full">
          <p onClick={() => window.open("https://github.com/sankethsura")} className="inner1 px-7 py-3 m-3  cursor-pointer hover:scale-105 duration-300">Github</p>
            <p onClick={() => window.open("https://www.linkedin.com/in/sanketh-sura-5b0b90178/")} className="inner1 px-7 py-3 m-3  cursor-pointer hover:scale-105 duration-300">
              Linked-In 
            </p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Contact;
