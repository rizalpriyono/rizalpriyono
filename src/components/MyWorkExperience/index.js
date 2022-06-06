import React from "react";
import {
  Section,
  LayoutHead,
  LayoutBody,
  TextCompany,
  TextJob,
  TextProject,
  TextTime,
  TextBody,
  List,
  Icon,
} from "./style";
import { ChevronRight } from "react-feather";

const MyWorkExperience = () => {
  return (
    <Section>
      <LayoutHead>My Work Experience</LayoutHead>
      <LayoutBody>
        <div style={{ maxWidth: 400, marginRight: 32 }}>
          <TextCompany href="https://www.telkom.co.id">
            Intership at PT. Telkom Indonesia
          </TextCompany>
        </div>
        <div style={{ width: 540 }}>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <TextJob>FrontEnd Developer</TextJob>
            <TextProject href="">@EeazyAPI</TextProject>
          </div>
          <TextTime>[July 2021 - Present]</TextTime>
          <div style={{ marginTop: 24 }}>
            <TextBody>
              EazyAPI is an online platform where you can design your REST APIs
              – be it public APIs, internal private APIs or microservices.
            </TextBody>
            <div style={{ marginTop: 24 }}>
              <List>
                <Icon>
                  <ChevronRight className="icon" width={16} />
                </Icon>
                <TextBody>
                  Redesigned the user interface to be more friendly and
                  attractive. Creating a New Responsive Landing Page
                </TextBody>
              </List>
              <List>
                <Icon>
                  <ChevronRight className="icon" width={16} />
                </Icon>
                <TextBody>
                  Integrates all consumed APIs. And manage data with React Redux
                </TextBody>
              </List>
              <List>
                <Icon>
                  <ChevronRight className="icon" width={16} />
                </Icon>
                <TextBody>
                  Doing Unit Testing on all parts of the Reactjs code before
                  deploying the project
                </TextBody>
              </List>
            </div>
          </div>
        </div>
      </LayoutBody>
    </Section>
  );
};

export default MyWorkExperience;
