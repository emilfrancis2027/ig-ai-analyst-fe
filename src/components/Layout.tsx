import { ReactNode } from "react";
import { Toolbar, Box, styled } from "@mui/material";

import { Header } from "./Header";
import { Drawer } from "./Drawer";
import { Footer } from "./Footer";
import { Main } from "./Main";

import { DrawerContextProvider } from "../contexts/drawer-context";

const OuterContainer = styled(Box)`
  display: flex;
  overflow: hidden;
  height: inherit;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const InnerContainer = styled(Box)`
  display: flex;
  flex: 1;
  overflow: hidden;
  height: inherit;
  background-color: #f5f5f5;
`;

interface ILayoutProps {
  children: NonNullable<ReactNode>;
}

export const Layout = ({ children }: ILayoutProps) => (
  <DrawerContextProvider>
    <OuterContainer>
      <Header />
      <Toolbar />
      <InnerContainer>
        <Drawer />
        <Main>{children}</Main>
      </InnerContainer>
      <Footer></Footer>
    </OuterContainer>
  </DrawerContextProvider>
);
