import React, { useContext, useState } from "react";
import {
  Paper,
  TextField,
  Button,
  Snackbar,
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { MeetContext } from "../context/MeetContext";
import Alert from '@mui/material/Alert'
import { generateString } from "../../../helper/generateRandomString";
import {useDispatch} from "react-redux"
import { getLink } from "../../../middleware/redux/actions";

// Alert when the user hasn't filled up their name
function muiAlert(props) {
  return <Alert elevation={6} variant="filled" {...props} />;
}

const AlertBar = ({ open, handleClose }) => (
  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
    <muiAlert onClose={handleClose} severity="error">
      Enter your name please!
    </muiAlert>
  </Snackbar>
);

// stylings for the page
const useStyles = makeStyles(() => ({
  background: {
    // backgroundColor: "rgb(10, 25, 41)",
    // height: "100vh",
    // width: "100%",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // colorScheme: "dark",
    // flexDirection: "column",
  },
  card: {
    // backgroundColor: "rgb(0, 30, 60)",
    // colorScheme: "dark",
    // border: "1px solid rgb(19, 47, 76)",
    // color: "white",
    // padding: "3rem",
  },
  input: {
    // width: "350px",
  },
}));

const StartupPage = () => {
  const classes = useStyles();
  const dispatch= useDispatch();
  // we will be preferring dark theme for our page
  const link=generateString(7)
 
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: "dark",
        },
      }),
    []
  );

  // we will use this to navigate next page
  const history = useNavigate();

  // will be using name across all pages from context
  const [name, setName] = useState("");

  // state and handler function for the snackbar
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div >
      <Paper className={classes.card} elevation={4}>
        <h4>JS Live Class</h4>
        <ThemeProvider theme={theme}>
          <div style={{ marginBottom: "1.5rem" }}>
            <TextField
              label="Name"
              // variant="outlined"
              // color="default"
              className={classes.input}
              
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: "1.5rem", textAlign: "center" }}>
            <Button
              variant="contained"
              // color="default"
              onClick={() => {
                // if name is empty we mandate user to enter it as we also trigger to open snackbar here
                if (name === "") {
                  handleClick();
                  return;
                }

                // if all goes well we will be redirecting the user to meet room
                history(`/meet/hsuh1`,{state: {name}});
                dispatch(getLink(link));
              }}
            >
              Create Meet
            </Button>
          </div>
        </ThemeProvider>
      </Paper>
      <AlertBar open={open} handleClose={handleClose} />
    </div>
  );
};

export default StartupPage;
