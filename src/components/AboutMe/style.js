import styled from "styled-components";
import { Color, FontFamily } from "../BaseUI";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  margin: 0px auto;
  max-width: 1000px;
  min-height: 50vh;
`;

export const LayoutHead = styled.div`
  display: flex;
  align-items: center;
  color: ${Color.primaryText};
  font-family: ${FontFamily.primary};
  font-weight: 600;
  font-size: clamp(16px, 3vw, 24px);
  position: relative;
  white-space: nowrap;
  &:before {
    counter-increment: section 1;
    content: "0" counter(section) ".";
    margin-right: 10px;
    color: ${Color.secondary};
  }
  &:after {
    margin: auto 24px;
    content: "";
    height: 2px;
    width: 300px;
    background-color: ${Color.secondaryText}33;
  }
`;

export const LayoutBody = styled.div`
  display: ${(props) => props.display};
  grid-template-columns: 3.6fr 1.4fr;
  gap: 20px;
  margin-top: 40px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const BodyLeft = styled.div`
  /* max-width: 64%; */
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const Text = styled.p`
  color: ${Color.secondaryText};
  font-family: ${FontFamily.primary};
  font-size: 16px;
  line-height: 1.8;
  letter-spacing: 0.7;
  margin-top: 0px;
  margin-bottom: 24px;
`;

export const LayoutList = styled.div`
  display: flex;
`;

export const List = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
  font-family: ${FontFamily.secondary};
  font-size: 10px;
  font-weight: 400;
  color: ${Color.secondaryText};
  .icon {
    color: ${Color.secondary};
    width: 12px;
    height: 12px;
  }
  .text {
    margin: 0px;
    margin-left: 8px;
    letter-spacing: 0.8px;
  }
`;

export const BodyRight = styled.div`
  position: relative;
`;

export const DivImg = styled.div`
  margin: 35px;
  margin-top: 0px;
  transition: all 0.25s;
  max-width: 100%;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 274px;
    height: 274px;
    background: ${Color.secondary}66;
    z-index: 999;
    border-radius: 6px;
    margin: 35px;
    margin-top: 0px;
    transition: all 0.25s;
    max-width: 100%;
  }
  &:hover {
    &:before {
      background: transparent;
    }
    transition: all 0.25s;
  }
  img {
    border-radius: 6px;
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
