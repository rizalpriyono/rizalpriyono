import styled from "styled-components";
import { Color, FontFamily } from "../BaseUI";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  margin: 0px auto;
  max-width: 1000px;
`;

export const P = styled.h1`
  color: ${Color.secondary};
  font-family: ${FontFamily.secondary};
  margin: 0px;
  font-size: 16px;
  font-weight: 500;
  margin-left: 4px;
  margin-bottom: 24px;
`;

export const Title = styled.h1`
  color: ${Color.primaryText};
  font-family: ${FontFamily.primary};
  margin: 0px;
  font-size: clamp(32px, 8vw, 72px);
  font-weight: 600;
`;
export const Title2 = styled.h1`
  color: ${Color.secondaryText};
  font-family: ${FontFamily.primary};
  margin: 0px;
  font-size: clamp(32px, 8vw, 72px);
  font-weight: 600;
  line-height: 130%;
`;

export const Text = styled.p`
  color: ${Color.secondaryText};
  font-family: ${FontFamily.primary};
  margin: 24px 0px;
  font-weight: 400;
  max-width: 660px;
  letter-spacing: 1px;
  line-height: 1.8;
`;

export const Button = styled.div`
  padding: 16px;
  margin-top: 20px;
  border: 1px solid ${Color.secondary};
  color: ${Color.secondary};
  background-color: transparent;
  font-family: ${FontFamily.secondary};
  position: static;
  cursor: pointer;
  max-width: 220px;
  text-align: center;
  transition: all 0.25s;

  &:hover {
    background-color: ${Color.secondary}33;
    transition: all 0.25s;
  }
`;

export const Link = styled.a`
  display: inline-block;
  margin: 0px;
  text-decoration: none;
  color: ${Color.secondary};
  font-family: ${FontFamily.primary};
  font-size: 16px;
  line-height: 1.8;
  letter-spacing: 0.7;
  &:after {
    content: "";
    display: block;
    width: 0px;
    height: 1px;
    position: relative;
    bottom: 0.3em;
    background-color: ${Color.secondary};
    transition: all 0.25s;
    opacity: 0.5;
    border-radius: 8px;
  }
  &:hover,
  &:active,
  &:focus {
    color: ${Color.secondary};
    outline: 0;
    &:after {
      width: 100%;
    }
  }
`;
