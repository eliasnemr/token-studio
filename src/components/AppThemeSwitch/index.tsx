import { useContext } from "react";
import { appContext } from "../../AppContext";

import "@theme-toggles/react/css/Around.css";
import { Around } from "@theme-toggles/react";

const AppThemeSwitch = () => {
  const { isDarkMode, setIsDarkMode } = useContext(appContext);

  // Handler for the switch change event
  const handleSwitchChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      onClick={handleSwitchChange}
      className="bg-neutral-100 text-black hover:cursor-pointer hover:bg-neutral-50 dark:bg-neutral-800 dark:text-neutral-300 dark:font-bold dark:hover:bg-[#2C2C2C] rounded-full flex items-center p-2 max-w-max"
    >
      <Around
        placeholder="Theme"
        toggled={isDarkMode}
        onToggle={handleSwitchChange}
        className="focus:outline-none p-0"
        duration={750}
      />
    </div>
  );
};

export default AppThemeSwitch;
