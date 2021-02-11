import {
  AppBar,
  Button,
  ButtonGroup,
  Checkbox,
  Container,
  createMuiTheme,
  FormControlLabel,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  TextField,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { orange, purple } from "@material-ui/core/colors";
import {
  AccountCircle,
  Ballot,
  FaceOutlined,
  House,
  Menu,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./App.css";

const App = () => {
  return (
    <main>
      {/* <PrimaryButton text="Record" icon={<Videocam />} /> */}
      {/* <PrimaryButtonGroup /> */}
      {/* <CustomCheckBox /> */}
      {/* <CustomTextField /> */}
      {/* <CustomButtonStyled /> */}
      {/* <CustomContainer /> */}
      <CustomAppBar />
    </main>
  );
};

const CustomAppBar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton>
          <Menu />
        </IconButton>
        <Typography variant="h6">Have Fun!</Typography>
        <Button>Login</Button>
      </Toolbar>
    </AppBar>
  );
};

const CustomContainer = () => {
  return (
    <Container
      maxWidth="md"
      style={{
        background: "gray",
        borderRadius: "4px",
        padding: "0.4rem 1rem",
      }}
    >
      <h2>Hello World</h2>

      <Grid container spacing={4} justify="center">
        <Grid item xl={12} sm={3}>
          <Paper style={{ height: 75, width: 50 }} />
        </Grid>
        <Grid item xl={12} sm={3}>
          <Paper style={{ height: 75, width: 50 }} />
        </Grid>
        <Grid item xl={12} sm={3}>
          <Paper style={{ height: 75, width: 50 }} />
        </Grid>
      </Grid>
    </Container>
  );
};

const theme = createMuiTheme({
  palette: {
    primary: { main: orange[300] },
    secondary: { main: purple[300] },
  },
  typography: {
    h3: {
      color: "purple",
      fontWeight: 800,
    },
  },
});

const CustomThemeComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h3" component="div">
        Material UI
      </Typography>
      <Button color="secondary">Hello</Button>
    </ThemeProvider>
  );
};

const useStyle = makeStyles({
  root: {
    background: "purple",
    border: 0,
    borderRadius: "60px",
    color: "yellowgreen",
    padding: "1rem 6rem",
  },
});

const CustomButtonStyled = () => {
  const classes = useStyle();
  return <Button className={classes.root}>Have Fun!</Button>;
};

const CustomTextField = () => {
  return (
    <TextField
      variant="filled"
      color="primary"
      label="Your nickname"
      placeholder="What you don't liked to be called?"
    />
  );
};

const CustomCheckBox = () => {
  const [isChecked, setChecked] = useState(true);
  return (
    <FormControlLabel
      label="Were you born on Mars?"
      control={
        <Checkbox
          checked={isChecked}
          checkedIcon={<FaceOutlined />}
          icon={<House />}
          onChange={(e) => setChecked(e.target.checked)}
          style={{
            color: "yellowgreen",
          }}
        />
      }
    />
  );
};

interface PrimaryButtonProps {
  text: string;
  icon: React.ReactNode;
}

const PrimaryButton = ({ text, icon }: PrimaryButtonProps): JSX.Element => (
  <Button
    href="#"
    onClick={() => {}}
    variant="contained"
    color="primary"
    size="large"
    disabled={false}
    startIcon={icon}
    endIcon={icon}
    style={{ borderRadius: "60px" }}
  >
    {text}
  </Button>
);

const PrimaryButtonGroup = () => (
  <ButtonGroup
    disabled={false}
    color="primary"
    variant="contained"
    size="medium"
    style={{ padding: "2rem", backgroundColor: "skyblue" }}
  >
    <Button startIcon={<AccountCircle />}>Account</Button>
    <Button startIcon={<Ballot />}>Ballot</Button>
  </ButtonGroup>
);

export default App;
