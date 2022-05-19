import Link from "next/link";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { bounce } from "./common/styles/bounce";

const Area = styled.header`
  width: 100%;
  height: auto;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  background-color: #f6f5ee;
  justify-content: space-between;
  position: fixed;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-right: 20px;
  a span:nth-child(2) {
    font-size: 50px;
  }
  a {
    display: flex;
    align-items: center;
  }
`;

const Logo = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: relative;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  div:nth-child(1) {
    font-size: 80px;
    color: gray;
    position: absolute;
    z-index: 1;
  }
  div:nth-child(2) {
    z-index: 2;
    font-size: 30px;
  }
  background-color: pink;
`;

const NavBar = styled.div`
  min-height: 30px;
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: inherit;
`;

const NavList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
`;

const Item = styled.div`
  font-size: 25px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :not(:last-child) {
    margin-right: 25px;
  }
  &:hover {
    opacity: 0.5;
    animation: ${bounce} 1.3s infinite ease-in-out;
  }
`;

const NavToggle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d6d6d6;
  border: 2px solid black;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(0.9);
  }
  div {
    width: 30px;
    height: 30px;
    background-image: url("https://cdn-icons-png.flaticon.com/512/1828/1828859.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

export default function Header() {
  const [scrollPos, setScroll] = useState(null);
  const [mode, setMode] = useState(null);
  const handleScroll = () => {
    setScroll(window.scrollY * 0.5);
  };
  const handleResize = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 900) {
      setMode(false);
    } else {
      setMode(true);
    }
  };
  useEffect(() => {
    handleScroll();
    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
  });
  return (
    <Area style={{ justifyContent: `${mode ? "" : "space-between"}` }}>
      <Title>
        <Link href="/">
          <a>
            <Logo>
              <div style={{ transform: `rotate(${scrollPos}deg)` }}>+</div>
              <div>&darr;</div>
            </Logo>
            <span>FITNESS___</span>
          </a>
        </Link>
      </Title>
      <NavBar>
        <NavList style={{ display: `${mode ? "" : "none"}` }}>
          <Item>
            <span>소개</span>
          </Item>
          <Item>
            <span>트레이너</span>
          </Item>
          <Item>
            <span>시설</span>
          </Item>
          <Item>
            <span>오시는길</span>
          </Item>
          <Item>
            <span>SNS</span>
          </Item>
        </NavList>
        <NavToggle style={{ display: `${!mode ? "" : "none"}` }}>
          <div />
        </NavToggle>
      </NavBar>
    </Area>
  );
}
