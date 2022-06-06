import styled from "styled-components";
import { Color, FontFamily } from "../BaseUI";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 40vh;
  justify-content: center;
  margin: 0px auto;
  max-width: 1000px;
`;

export const LayoutHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Color.primaryText};
  font-family: ${FontFamily.primary};
  font-weight: 600;
  font-size: clamp(16px, 3vw, 24px);
  position: relative;
  white-space: nowrap;
  margin-bottom: 80px;
  &:before {
    counter-increment: section 3;
    content: "0" counter(section) ".";
    margin-right: 10px;
    color: ${Color.secondary};
  }
`;

export const LayoutProject = styled.div`
  position: relative;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  margin-bottom: 100px;
`;

export const ProjectContent = styled.div`
  position: relative;
  grid-column: 1 / 9;
  grid-area: 1 / 1 / -1 / 8;
`;

export const ProjectOverline = styled.div`
  margin: 8px 0px;
  font-family: ${FontFamily.secondary};
  color: ${Color.secondary};
  font-size: 12px;
  font-weight: 400;
`;

export const ProjectTitle = styled.h3`
  margin: 0px;
  margin-bottom: 20px;
  color: ${Color.primaryText};
  font-family: ${FontFamily.primary};
  font-size: 24px;
  font-weight: 600;
`;

export const ProjectDescription = styled.div`
  position: relative;
  z-index: 2;
  background-color: #2b3040;
  padding: 24px;
  border-radius: 4px;
  color: ${Color.secondaryText};
  font-family: ${FontFamily.primary};
  transition: all 0.25s;
  p {
    margin: 0px;
    letter-spacing: 0.5px;
  }
`;

export const ProjectImage = styled.div`
  position: relative;
  z-index: 1;
  grid-area: 1 / 6 / -1 / -1;
`;

export const ProjectTechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
  list-style: none;
  margin: 25px 0px 10px;
  padding: 0px;
  margin-left: -10px;

  li {
    margin: 0px 8px;
    white-space: nowrap;
    font-family: ${FontFamily.secondary};
    font-size: 13px;
    font-weight: 500;
    color: ${Color.secondaryText};
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-left: -10px;
  color: ${Color.primaryText};
  a {
    color: inherit;
    margin: 10px;
    transition: all 0.25s;
    &:hover {
      color: ${Color.secondary};
    }
  }
`;
