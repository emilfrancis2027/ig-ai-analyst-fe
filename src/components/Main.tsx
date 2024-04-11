import { PropsWithChildren } from 'react';
import { styled } from '@mui/material';

const StyledMain = styled('main')`
  height: 100%;
  width: 100%;
  flex: 1,;
  overflow: auto;
  padding: 10px;
  display: flex,
  flexFlow: row nowrap,
  justifyContent: center,
  alignItems: center,
  background-color: #f5f5f5;
`;

export const Main = ({ children }: PropsWithChildren<unknown>) => (
  <StyledMain>
    {children}
  </StyledMain>
);
