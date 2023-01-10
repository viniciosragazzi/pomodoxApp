import React from "react";
import { NavLink } from "react-router-dom";
import { GiAlarmClock } from "react-icons/gi";
const WelcomePage = () => {
  return (
    <div className="w-full h-full min-h-screen  bg-dark   flex flex-col gap-8 justify-center items-center text-center ">
      <div className=" flex flex-col gap-3 justify-center items-center text-center surgir">
        <div className="treme">
          <GiAlarmClock className="text-white text-6xl sm:text-8xl " />
        </div>
        <span className=" font-bold text-3xl sm:text-5xl  text-white ">
          Bem vindo ao <span className="text-blue">Pomodox</span>
        </span>
      </div>
      <NavLink to='/app' className="w-full max-w-[140px] rounded-full mt-7 font-semibold text-sm py-2  surgir text-card bg-blue hover:scale-95 transition-transform">
        Iniciar
      </NavLink>
    </div>
  );
};

export default WelcomePage;
