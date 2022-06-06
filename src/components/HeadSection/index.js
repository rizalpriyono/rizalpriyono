import React from "react";
import { P, Section, Title, Title2, Text, Button, Link } from "./style";

const HeadSection = () => {
  return (
    <Section>
      <P>Hi, my name is</P>
      <Title>Rizal Priyono.</Title>
      <Title2>I build things for the web</Title2>
      <Text>
        I’m a software engineer specializing in FrontEnd building (and
        occasionally designing) exceptional digital experiences. Currently, I’m
        focusing on the internship program at{" "}
        <Link href="https://www.telkom.co.id">Telkom Indonesia.</Link>
      </Text>
      <Button>Check my portfolio</Button>
    </Section>
  );
};

export default HeadSection;
