const Skills = (props) => {
  return (
    <div>
      <div className="inner3  flex py-4 px-10 my-3 min-w-[270px] lg:min-w-[300px] xl:min-w-[320px] justify-between">

        <div className="pr-1">{props.skill1}</div>
        <div className="flex">
          
        <div className="inner1 w-[30px] h-[30px] text-[#363062] font-bold flex justify-end">{props.logo}</div>
        <div className="inner1 w-[30px] h-[30px] text-[#363062] font-bold flex justify-end ml-2">
          {props.value}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
