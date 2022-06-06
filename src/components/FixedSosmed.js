import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Color } from "./BaseUI";
import { Instagram, Linkedin, GitHub, Codepen, Twitter } from "react-feather";

const Root = styled.div`
  width: ${(props) => props.width};
  position: fixed;
  bottom: 0px;
  left: ${(props) => props.width};
  right: auto;
  z-index: 10;
  color: ${Color.secondaryText};
`;

const Layout = styled.ul`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  list-style: none;
  &:after {
    content: "";
    display: block;
    width: 2px;
    height: 100px;
    background-color: ${Color.secondaryText};
    margin: 0px auto;
    margin-top: 24px;
  }
`;

const Link = styled.a`
  padding: 16px;
  display: inline-block;
  transition: all 0.25s;
  color: inherit;
  &:hover {
    color: ${Color.secondary};
    transform: translateY(-3px);
  }
`;

const FixedSosmed = (props) => {
  const { width } = props;

  return (
    <Root width={width >= 1000 ? "50px" : "40px"}>
      <Layout>
        <li>
          <Link href="https://github.com/rizalpriyono">
            <GitHub />
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/rizalripacth/">
            <Instagram />
          </Link>
        </li>
        <li>
          <Link href="">
            <Twitter />
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/ahmad-rizal-priyono-5b2016225/">
            <Linkedin />
          </Link>
        </li>
        <li>
          <Link href="">
            <Codepen />
          </Link>
        </li>
      </Layout>
    </Root>
  );
};

export default FixedSosmed;
