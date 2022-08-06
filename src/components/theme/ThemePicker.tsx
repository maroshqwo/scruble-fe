import React, { FC } from "react";
import { IconButton, Select, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export type ThemePickerProps = {
  /* insert props */
}

export const ThemePicker: FC<ThemePickerProps> = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="themePicker">
      <IconButton
        aria-label="Toggle color mode"
        onClick={toggleColorMode}
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      />
    </div>
  );
};

export default ThemePicker;
