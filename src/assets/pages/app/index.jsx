import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { BiArrowBack, BiUser } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoSettings } from "react-icons/go";
import { FaFlagCheckered } from "react-icons/fa";
import PageComponent from "../../shared/components/pageComponent";
import { DadosContext } from "../../shared/context/ContextApp";

const AppPage = () => {

  const {showComponentPage, setShowComponentPage,currentStage, setCurrentStage,timerDurationMin, setTimerDurationMin, mode, setMode,stages, setStages} = useContext(DadosContext)

  const [timeDuration, setTimerDuration] = useState(timerDurationMin*60)
  const [numb, setNumb] = useState(`${timerDurationMin}:00`);
  const [percent, setPercent] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);
  const [intervalId, setIntervalId] = useState(null); // adicione esta linha para armazenar a referência do intervalo

  const startTime = () => {
    let counter = timeDuration;
    let secs = 60
    let percentNumber = 0;
    setTimerStarted(true);
    setIntervalId(
      setInterval(() => {
        // armazene a referência da função setInterval
        if (counter == 0) {
          clearInterval(intervalId); // use a função clearInterval para parar o intervalo
          setTimerStarted(false);
        } else {
          counter--;
         secs--
         if(secs < 0){
          secs = 59
         }
         if(secs < 10){
          secs = '0'+secs 
         }
          percentNumber++;
          setNumb(Math.floor((counter/60))+':'+secs);
          setPercent((percentNumber / timeDuration) * 100);
        }
      }, 1000)
    );
  };

  const reiniciarTimer = () => {
    clearInterval(intervalId); // use a função clearInterval para parar o intervalo
    setTimerStarted(false);
    setNumb(`${timerDurationMin}:00`)
    setPercent(0)
  };




  return (
    <div className="app bg-dark w-full h-full min-h-screen flex flex-col relative items-center">
      <NavLink className={`${mode === 'timer' ? 'opacity-1' : 'opacity-0'} self-start`} to="/">
        <BiArrowBack className="relative  text-white text-3xl m-4 hover:text-blue active:scale-95 transition-transform" />
      </NavLink>
      <div className="container overflow-hidden flex flex-col gap-12 items-center justify-around relative">
        <PageComponent/>
        <header className=" px-4 self-start">
          <h2 className="text-white text-sm md:text-lg">Pomodox Timer</h2>
        </header>

        <div className=" shadow-md currentMissionText w-full max-w-[300px] md:max-w-[430px] min-h-[45px] px-3 bg-card rounded-full text-white overflow-hidden  flex gap-2 justify-center items-center text-center ">
          <FaFlagCheckered className="text-blue" />{" "}
          <span className="missionText text-ellipsis overflow-hidden whitespace-nowrap   text-xs md:text-sm">
            {" "}
            Criar pagina principal e adicionar animações{" "}
          </span>
        </div>

        <div className="timerArea w-full  flex flex-col justify-center items-center  overflow-hidden">
          <div className="timer w-full h-full flex justify-center items-center">
            <div className="timerCircle">
              <svg>
                <circle
                  r="70"
                  cx="75"
                  cy="75"
                  className=" stroke-card "
                ></circle>
                <circle
                  r="70"
                  cx="75"
                  cy="75"
                  className=" stroke-blue"
                  style={{ strokeDashoffset: `${(percent * 440) / 100}` }}
                ></circle>
              </svg>
            </div>
            <div className="number absolute">
              <h2 className=" text-white text-xl font-semibold">{numb}</h2>
            </div>
          </div>
          <div className="stages text-white flex mt-4 gap-3">
            {[...Array(stages)].map((stage, index) => (
              <div
                key={index}
                className={`circle  w-[12px] h-[12px]  rounded-full after:bg-blue ${currentStage} ${
                  index <= currentStage - 2
                    ? " bg-blue"
                    : index <= currentStage - 1
                    ? "bg-none border  border-blue atualStageCircle before:bg-blue"
                    : " bg-none border border-blue"
                } `}
              ></div>
            ))}
          </div>
          {timerStarted ? (
            <button
              onClick={() => {
                reiniciarTimer();
              }}
              className="text-white bg-card w-20 text-sm py-1 mt-8 rounded-lg font-semibold"
            >
              Reiniciar
            </button>
          ) : (
            <button
              onClick={() => {
                startTime();
              }}
              className="text-dark bg-blue w-20 text-sm py-1 mt-8 rounded-lg font-semibold"
            >
              Start
            </button>
          )}
        </div>
      </div>
      <div className="barBottom w-full h-14 fixed bottom-0 ">
        <nav className="w-full h-full flex justify-center items-center">
          <ul className=" flex justify-center gap-8 text-white list-none">
            <li className=" cursor-pointer hover:scale-125 transition-transform" onClick={(e) =>{setMode('mission'); setShowComponentPage(true)}}>
              <FaFlagCheckered
                className={`${mode === "mission" ? "active text-blue" : null}`}
              />
            </li>
            <li className=" cursor-pointer hover:scale-125 transition-transform"  onClick={(e) =>{setMode('timer'); setShowComponentPage(false)}}>
              <AiOutlineClockCircle
                className={`${mode === "timer" ? "active text-blue" : null}`}
              />
            </li>
            <li className=" cursor-pointer hover:scale-125 transition-transform"  onClick={(e) =>{setMode('settings'); setShowComponentPage(true)}}>
              <GoSettings
                className={`${mode === "settings" ? "active text-blue" : null}`}
              />
            </li>
            <li className=" cursor-pointer hover:scale-125 transition-transform"  onClick={(e) =>{setMode('user'); setShowComponentPage(true)}}>
              <BiUser
                className={`${mode === "user" ? "active text-blue" : null}`}
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AppPage;
