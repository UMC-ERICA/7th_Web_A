import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoImage from "../assets/logo.png";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  background-color: #333;
  color: white;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  img {
    width: 100px;
    height: auto;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo to="/">
        <img src={LogoImage} alt="로고" />
      </Logo>
    </NavbarContainer>
  );
};

export default Navbar;
