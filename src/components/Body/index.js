import React, { useContext } from "react";
import Switch from "react-switch";

import { ThemeContext } from "styled-components";
import { shade } from "polished";

import { BodyDiv, TextDiv } from "./styles";

const Body = ({ onChangeBody }) => {
  const { colors, name } = useContext(ThemeContext);
  return (
    <>
      <BodyDiv>
        <Switch
          onChange={onChangeBody}
          checked={name === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={25}
          offColor={shade(0.15, colors.primary)}
          onColor={colors.secundary}
          offHandleColor="#c1c1c1"
        />
      </BodyDiv>
      <TextDiv>Todos os direitos reservados</TextDiv>
    </>
  );
};

export default Body;
