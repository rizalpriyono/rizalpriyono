import styled from "styled-components";
import { Color, FontFamily } from "../BaseUI";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 70vh;
  justify-content: center;
  margin: 0px auto;
  max-width: 1000px;
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
    counter-increment: section 2;
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
  display: flex;
  margin-top: 40px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const TextCompany = styled.a`
  display: inline-block;
  margin-top: 0px;
  font-family: ${FontFamily.secondary};
  color: ${Color.secondary};
  font-weight: 500;
  font-size: 16px;
  width: 100%;
  margin-bottom: 24px;
  text-decoration: none;
  &:after {
    content: "";
    display: block;
    width: 0px;
    height: 1px;
    position: relative;
    bottom: 0.1em;
    background-color: ${Color.secondary};
    transition: all 0.25s;
    opacity: 0.5;
    border-radius: 8px;
  }
  &:hover {
    color: ${Color.secondary};
    outline: 0;
    &:after {
      width: 100%;
    }
  }
`;

export const TextJob = styled.h1`
  margin: 0px;
  font-family: ${FontFamily.primary};
  color: ${Color.primaryText};
  font-weight: 500;
  font-size: 16px;
  margin-right: 8px;
`;

export const TextProject = styled.a`
  display: inline-block;
  margin: 0px;
  text-decoration: none;
  font-family: ${FontFamily.primary};
  color: ${Color.secondary};
  font-size: 16px;
  font-weight: 500;
  &:after {
    content: "";
    display: block;
    width: 0px;
    height: 1px;
    position: relative;
    bottom: 0.2em;
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

export const TextTime = styled.h4`
  margin: 0px;
  margin-top: 8px;
  font-size: 12px;
  font-weight: 400;
  font-family: ${FontFamily.secondary};
  color: ${Color.secondaryText};
`;

export const TextBody = styled.p`
  font-size: 14px;
  margin: 0px;
  margin-bottom: 8px;
  font-family: ${FontFamily.primary};
  color: ${Color.secondaryText};
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.5px;
`;

export const List = styled.div`
  display: flex;
  align-self: start;
  margin-top: 4px;
`;

export const Icon = styled.div`
  color: ${Color.secondary};
  padding-right: 12px;
`;
