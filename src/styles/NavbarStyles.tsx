import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colorSelector } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NavLinksProps {
  active: string;
}

const LogoImage = styled.img`
  width: 90px;
  border-radius: 100%;
  align-self: start;
  @media (max-width: 704px) {
    width: 60px;
  }
`;

const NavbarbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background-color: ${colorSelector.primary};
  /* position: relative; */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  overflow: hidden;

  @media (max-width: 704px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const NavLinks = styled.div<NavLinksProps>`
  @media (max-width: 704px) {
    display: ${(props) => (props.active === "true" ? "block" : "none")};
    text-align: center;
    padding: 2rem 0;
  }
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${colorSelector.textWhite};
  transition: 0.2s;
  margin-left: 3rem;
  font-size: 1.4rem;

  &:nth-last-child(-n + 2) {
    background-color: ${colorSelector.buttonColor};
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    &:hover {
      color: ${colorSelector.assentColor};
      background-color: ${colorSelector.darkColor};
    }
  }
  &:last-child {
    background-color: ${colorSelector.buttonColor};
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    &:hover {
      color: ${colorSelector.assentColor};
      background-color: ${colorSelector.darkColor};
    }
  }

  &:hover {
    color: ${colorSelector.buttonColor};
  }

  &.active {
    color: ${colorSelector.activeLink};
  }
  @media (max-width: 704px) {
    display: block;
    margin: 2rem auto;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  display: none;
  position: absolute;
  right: 20px;
  top: 21px;
  color: ${colorSelector.textWhite};
  font-size: 1.8rem;
  cursor: pointer;
  @media (max-width: 704px) {
    display: block;
  }
`;
export {
  LogoImage,
  NavbarbarWrapper,
  NavLinks,
  StyledNavLink,
  StyledFontAwesomeIcon,
};
