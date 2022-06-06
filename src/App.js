import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeadSection from "./components/HeadSection";
import { Color } from "./components/BaseUI";
import FixedSosmed from "./components/FixedSosmed";
import FixedEmail from "./components/FixedEmail";
import AboutMe from "./components/AboutMe";
import MyWorkExperience from "./components/MyWorkExperience";
import MyPortfolio from "./components/MyPortfolio";
import Navbar from "./components/Navbar";

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${Color.primary};
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.main`
  padding: ${(props) => props.padding};
`;

const App = () => {
  const [width, setWidth] = useState(undefined);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWidth(window.innerWidth);
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return (
    <AppContainer>
      <Navbar />
      {width >= 768 ? (
        <>
          <FixedSosmed width={width} />
          <FixedEmail width={width} />
        </>
      ) : null}
      <div>
        <MainContainer
          padding={
            width >= 1000
              ? "0px 170px"
              : width >= 768
              ? "0px 120px"
              : "0px 70px"
          }
        >
          <HeadSection />
          <AboutMe />
          <MyWorkExperience />
          <MyPortfolio />
        </MainContainer>
      </div>
    </AppContainer>
  );
};

export default App;
