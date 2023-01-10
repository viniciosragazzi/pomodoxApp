import { useContext } from "react";
import { DadosContext } from "../context/ContextApp";
import SettingsComponent from "./SettingsComponent/settingsComponents";
import UserComponent from "./UerComponent/userComponent";
import MissionComponents from "./MissionComponent/missionComponents";
const PageComponent = () => {
  const { showComponentPage, setShowComponentPage, mode } = useContext(
    DadosContext
  );
  return (
    <div
      className={` absolute  w-screen h-screen z-40 bg-dark ${
        showComponentPage
          ? "top-0 left-0 translate-x-0 translate-y-0"
          : "translate-x-[200vw] "
      } transition-transform`}
    >
      {mode === "settings" ? (
        <SettingsComponent />
      ) : mode === "user" ? (
        <UserComponent />
      ) : mode === "mission" ? (
        <MissionComponents />
      ) : null}
    </div>
  );
};

export default PageComponent;
