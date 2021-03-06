import React from 'react'
import {ButtonGroup, Button} from '@mui/material'
import Style from './Menu.module.scss'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#ffffff',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

export const Menu = ({setMenu}) => {
  const handleClick = (page) => {
    console.log('clicked')
    setMenu(page);
  }
  return (
    <ThemeProvider theme={theme}>
      <div className={Style.Menu}>
        <ButtonGroup size="large" color="primary" variant="outlined" aria-label="outlined button group">
          <Button onClick={()=> handleClick("main")}>start page</Button>
          <Button onClick={()=> handleClick("about")}>about me</Button>
          <Button onClick={()=> handleClick("projects")}>projects</Button>
        </ButtonGroup>
      </div>
    </ThemeProvider>
  )
}
