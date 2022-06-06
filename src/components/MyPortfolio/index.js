import React from "react";
import {
  ProjectOverline,
  LayoutHead,
  Section,
  LayoutProject,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  ProjectImage,
  ProjectTechList,
  ProjectLinks,
} from "./styles";
import { GitHub, ExternalLink } from "react-feather";

import ProjectAuction from "../../assets/project/P_Auction.png";
import ProjectEazyAPI from "../../assets/project/P_EazyApi.png";

const MyPortfolio = () => {
  const listProject = [
    {
      image: ProjectAuction,
      overline: "Fullstack Project",
      title: "Auction System",
      description: `Final Project of Vocational High School Telkom Malang. The
      Auction System Project implements all the things that have been
      learned so far, with the user interface display feature made
      based on the distribution of privileges.`,
      techList: ["React", "Node", "MaterialUI", "Express"],
      link: [
        {
          icon: <GitHub />,
          href: "",
        },
      ],
    },
    {
      image: ProjectEazyAPI,
      overline: "Intership Project at PT. Telkom Indonesia",
      title: "EazyAPI / Digital Telkom",
      description: `An online platform where you can design your REST APIs – be it
      public APIs, internal private APIs or microservices. That is,
      you start by laying out your API, its resources, operations and
      data models. API definitions are written in the OpenAPI format
      (formerly known as Swagger).`,
      techList: ["React", "Node", "Swagger", "MongoDB", "Jest"],
      link: [
        {
          icon: <ExternalLink />,
          href: "https://digitaltelkom.dev/",
        },
      ],
    },
  ];
  return (
    <Section>
      <LayoutHead>My Portfolio</LayoutHead>

      {listProject.map((item, i) => (
        <LayoutProject key={i}>
          <ProjectContent>
            <div>
              <ProjectOverline>{item.overline}</ProjectOverline>
              <ProjectTitle>{item.title}</ProjectTitle>
              <ProjectDescription>
                <p>{item.description}</p>
              </ProjectDescription>
              <ProjectTechList>
                {item.techList.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ProjectTechList>
              <ProjectLinks>
                {item.link.map((item, i) => (
                  <a href={item.href}>{item.icon}</a>
                ))}
              </ProjectLinks>
            </div>
          </ProjectContent>
          <ProjectImage>
            <img src={item.image} alt="" />
          </ProjectImage>
        </LayoutProject>
      ))}
    </Section>
  );
};

export default MyPortfolio;
