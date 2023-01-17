import React from "react";
import {
  Icon,
  CloseIcon,
  SidebarContainer,
  SidebarBtn,
  SidebarLink,
  SidebarBtnLink,
  SidebarWrapper,
  SidebarMenu,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="About" onClick={toggle}>
            About
          </SidebarLink>

          <SidebarLink to="Discover" onClick={toggle}>
            Discover
          </SidebarLink>

          <SidebarLink to="Signup" onClick={toggle}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtn>
          <SidebarBtnLink to="/Signin">Sign In</SidebarBtnLink>
        </SidebarBtn>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
