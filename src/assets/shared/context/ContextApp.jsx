import { createContext, useState } from "react";

export const DadosContext = createContext({});

const ContextProvider = ({ children }) => {
  const [timerDurationMin, setTimerDurationMin] = useState(1);
  const [mode, setMode] = useState("timer");
  const [stages, setStages] = useState(4);
  const [currentStage, setCurrentStage] = useState(1);
  const [showComponentPage, setShowComponentPage] = useState(false);
  return (
    <DadosContext.Provider
      value={{
        showComponentPage,
        setShowComponentPage,
        currentStage,
        setCurrentStage,
        stages,
        setStages,
        mode,
        setMode,
        timerDurationMin,
        setTimerDurationMin,
      }}
    >
      {children}
    </DadosContext.Provider>
  );
};

export default ContextProvider;
