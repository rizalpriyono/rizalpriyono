import React, { useEffect, useState } from "react";
import profile from "../../assets/image/profile.png";
import { ChevronRight } from "react-feather";

import {
  Section,
  LayoutHead,
  LayoutBody,
  LayoutList,
  BodyLeft,
  BodyRight,
  Text,
  List,
  DivImg,
  Link,
} from "./style";

const AboutMe = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return (
    <Section>
      <LayoutHead>About Me</LayoutHead>
      <LayoutBody display={windowSize.width >= 1124 ? "grid" : "flex"}>
        <BodyLeft>
          <Text>
            Hello! My name is Rizal and I enjoy creating things that live on the
            internet. My interest in web development started in 2019 when I
            decided to enter{" "}
            <Link href="https://www.smktelkom-mlg.sch.id">
              Vocational High School Telkom Malang
            </Link>{" "}
            — I learned a lot about logic and programming.
          </Text>
          <Text>
            Fast forward to today, and I have the privilege of Internship at{" "}
            <Link href="https://www.telkom.co.id">PT. Telkom Indonesia.</Link>{" "}
            My primary focus today is building accessible, inclusive products
            and digital experiences on Upstatement for a wide range of clients.
          </Text>
          <Text style={{ marginBottom: 8 }}>
            Here are a few technologies I’ve been working with recently:
          </Text>
          <LayoutList>
            <div>
              <List>
                <ChevronRight className="icon" />
                <h3 className="text">JavaScript (ES6+)</h3>
              </List>
              <List>
                <ChevronRight className="icon" />
                <h3 className="text">ReactJs</h3>
              </List>
              <List>
                <ChevronRight className="icon" />
                <h3 className="text">NodeJs</h3>
              </List>
            </div>
            <div style={{ marginLeft: 120 }}>
              <List>
                <ChevronRight className="icon" />
                <h3 className="text">Typescript</h3>
              </List>
              <List>
                <ChevronRight className="icon" />
                <h3 className="text">MySQL</h3>
              </List>
              <List>
                <ChevronRight className="icon" />
                <h3 className="text">Jest</h3>
              </List>
            </div>
          </LayoutList>
        </BodyLeft>
        <BodyRight>
          <DivImg>
            <img src={profile} alt="" />
          </DivImg>
        </BodyRight>
      </LayoutBody>
    </Section>
  );
};

export default AboutMe;
