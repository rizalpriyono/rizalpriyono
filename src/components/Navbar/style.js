import styled from "styled-components";
import { Color, FontFamily } from "../BaseUI";

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  position: fixed;
  height: 120px;
  background-color: ${Color.primary}D9;
  backdrop-filter: blur(10px);
  transition: all 0.25s;
  z-index: 11;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 80px;
  width: 100vw;
`;

export const Logo = styled.h3`
  margin: 0px;
  padding: 0px;
  color: ${Color.secondary};
  font-family: ${FontFamily.primary};
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.8px;
`;

export const Ol = styled.ol`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px;
  padding: 0px;
  list-style: none;
`;

export const Li = styled.li`
  margin: 0px 20px;
  font-family: ${FontFamily.secondary};
  color: ${Color.primaryText};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.25s;
  :hover {
    color: ${Color.secondary};
  }
`;
