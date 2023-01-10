import React, { useContext } from "react";
import { DadosContext } from "../../context/ContextApp";
import { BiTimer } from "react-icons/bi";
const SettingsComponent = () => {
  const {
    showComponentPage,
    setShowComponentPage,
    currentStage,
    setCurrentStage,
    timerDurationMin,
    setTimerDurationMin,
    mode,
    setMode,
    stages,
    setStages,
  } = useContext(DadosContext);

  return (
    <div className="settingPage  w-full h-full flex justify-center">
      <div className="container p-6 w-full max-w-[480px] max-sm:max-w-2xl flex flex-col gap-14 ">
        <header>
          <span className="text-white text-xl font-semibold">
            Configurações
          </span>
        </header>
        <section className="w-full h-full">
          <form className="flex flex-col gap-6">
            <div className="formBox w-full min-h-[64px] bg-card rounded-full flex items-center p-6">
              <label
                htmlFor="focusTimer"
                className="text-white text-lg flex items-center gap-6  w-full justify-between "
              >
                <span className="  flex items-center text-base gap-2">
                  <BiTimer className="text-blue text-2xl" />
                  Tempo de Foco
                </span>

                <select name="focusTimer" id="focusTimer" className="cursor-pointer text-base max-w-[85px]">
                  <option className=" bg-dark text-xs md:text-base" value="15">15 min</option>
                  <option className=" bg-dark text-xs md:text-base" value="20">20 min</option>
                  <option className=" bg-dark text-xs md:text-base" value="25">25 min</option>
                  <option className=" bg-dark text-xs md:text-base" value="30">30 min</option>
                  <option className=" bg-dark text-xs md:text-base" value="40">40 min</option>
                  <option className=" bg-dark text-xs md:text-base" value="50">50 min</option>
                  <option className=" bg-dark text-xs md:text-base" value="60">60 min</option>
                </select>
              </label>
            </div>
            <div className="formBox w-full min-h-[64px] bg-card rounded-full flex items-center p-6">
              <label
                htmlFor="fastPause"
                className="text-white text-lg flex items-center gap-6  w-full justify-between "
              >
                <span className="  flex items-center text-base gap-2">
                  <BiTimer className="text-blue text-2xl" />
                  Pausa Rápida
                </span>

                <select name="fastPause" id="fastPause" className="cursor-pointer text-base max-w-[85px]">
                  <option className=" bg-dark text-xs md:text-base" value="5">5 min</option>
                  <option className=" bg-dark text-xs md:text-base" value="10">10 min</option>
               
                </select>
              </label>
            </div>
            <div className="formBox w-full min-h-[64px] bg-card rounded-full flex items-center p-6">
              <label
                htmlFor="longPause"
                className="text-white text-lg flex items-center gap-6  w-full justify-between "
              >
                <span className="  flex items-center text-base gap-2">
                  <BiTimer className="text-blue text-2xl" />
                  Pausa Longa
                </span>

                <select name="longPause" id="longPause" className="cursor-pointer text-base max-w-[85px]">
                <option className=" bg-dark text-xs md:text-base" value="15">15 min</option>
                  <option className=" bg-dark text-xs md:text-base" value="20">20 min</option>
                  <option className=" bg-dark text-xs md:text-base" value="25">25 min</option>
               
                </select>
              </label>
            </div>
            <div className="formBox w-full min-h-[64px] bg-card rounded-full flex items-center p-6">
              <label
                htmlFor="sections"
                className="text-white text-lg flex items-center gap-6  w-full justify-between "
              >
                <span className="  flex items-center text-base gap-2">
                  <BiTimer className="text-blue text-2xl" />
                  Seções
                </span>

                <select name="sections" id="sections" className="cursor-pointer text-base max-w-[85px] ">
                <option className=" bg-dark text-xs md:text-base" value="1">1</option>
                <option className=" bg-dark text-xs md:text-base" value="2">2</option>
                <option className=" bg-dark text-xs md:text-base" value="3">3</option>
                <option className=" bg-dark text-xs md:text-base" value="4">4</option>
                <option className=" bg-dark text-xs md:text-base" value="5">5</option>
                <option className=" bg-dark text-xs md:text-base" value="6">6</option>

                </select>
              </label>
            </div>
          </form>
          
        </section>
      </div>
    </div>
  );
};

export default SettingsComponent;
