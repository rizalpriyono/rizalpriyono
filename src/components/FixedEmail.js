import React from "react";
import styled from "styled-components";
import { Color, FontFamily } from "./BaseUI";

const Root = styled.div`
  width: ${(props) => props.width};
  position: fixed;
  bottom: 0px;
  left: auto;
  right: ${(props) => props.width};
  z-index: 10;
  color: ${Color.secondaryText};
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:after {
    content: "";
    display: block;
    width: 2px;
    height: 100px;
    background-color: ${Color.secondaryText};
    margin: 0px auto;
    margin-top: 16px;
  }
`;

const Link = styled.a`
  margin: 20px auto;
  padding: 12px;
  display: inline-block;
  transition: all 0.25s;
  color: inherit;
  font-family: ${FontFamily.secondary};
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.1em;
  writing-mode: vertical-lr;
  text-decoration: none;
  &:hover {
    color: ${Color.secondary};
    transform: translateY(-3px);
  }
`;

const FixedEmail = (props) => {
  const { width } = props;
  return (
    <Root width={width >= 1000 ? "50px" : "40px"}>
      <Layout>
        <Link href="">rizalpriyono.mailbox@gmail.com</Link>
      </Layout>
    </Root>
  );
};

export default FixedEmail;
