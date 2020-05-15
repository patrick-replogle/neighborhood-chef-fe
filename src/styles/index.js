import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export const buttonStyles = makeStyles({
  root: {
    textTransform: "none",
    margin: "3px",
    marginBottom: "8px",
    border: 0,
    borderRadius: 6,
    padding: "8px 20px",
  },
  notActive: {
    background: "white",
    color: "black",
    opacity: 0.5,
    "&:hover": {
      background: "rgba(88, 212, 115, 0.3);",
    },
  },
  active: {
    background: "#58D573",
    color: "white",
    "& a": {
      color: "white",
    },
    "&:hover": {
      background: "#58D573",
    },
  },
  single: {
    cursor: "pointer",
    textAlign: "center",
    width: "200px",
    margin: "auto",
    background: "#58D573",
    color: "white",
    "& a": {
      color: "white",
    },
  },
  rsvpRoot: {
    height: "30px",
    width: "100px",
    borderRadius: "5px",
    color: "white",
    fontWeight: "bolder",
    cursor: "pointer",
    border: "none",
    opacity: ".6",
    margin: "0px 3px",
  },
  rsvpActive: {
    border: "1px solid black",
    opacity: "1",
  },
});

export const formStyles = makeStyles({
  registerComponent: {
    "text-align": "center",
    "font-size": "20px",
    color: "#A2A2A2",
    "& .loginLink": {
      color: "#58d473",
      "text-decoration": "underline",
      "font-size": "20px",
    },
    "& .steps": {
      background: "inherit",
      width: "100%",
      "justify-content": "center",
      "& .MuiMobileStepper-dotActive": {
        "background-color": "#000000",
      },
    },
  },
  registerForm: {
    width: "60%",
    margin: "0 auto",
    display: "flex",
    "flex-wrap": "wrap",
    "& h1": {
      width: "100%",
      "font-size": "44px",
      "line-height": "66px",
      "letter-spacing": "0.02em",
      "font-weight": "normal",
      color: "#000000",
    },
    "& .email": {
      "margin-top": "40px",
      width: "100%",
      "text-align": "left",
    },
    "& .password": {
      "margin-top": "40px",
      width: "48%",
      "text-align": "left",
    },
    "& .confirmPassword": {
      "margin-top": "40px",
      width: "48%",
      "text-align": "left",
      "margin-left": "4%",
    },
    "& .firstName": {
      "margin-top": "40px",
      width: "48%",
      "text-align": "left",
    },
    "& .lastName": {
      "margin-top": "40px",
      width: "48%",
      "text-align": "left",
      "margin-left": "4%",
    },
    "& .location": {
      "margin-top": "40px",
      width: "100%",
      "text-align": "left",
    },
    "& .terms": {
      "margin-top": "40px",
      width: "100%",
    },
    "& .gender": {
      "margin-top": "40px",
      width: "100%",
      "text-align": "left",
      "& h3": {
        margin: "0",
        "font-weight": "normal",
        "font-size": "20px",
      },
      "& span": {
        "font-size": "16px",
      },
    },
    "& .photo": {
      "margin-top": "40px",
      width: "100%",
    },
    "& input": {
      "font-size": "20px",
      "font-style": "normal",
      "font-weight": "500",
      "line-height": "30px",
      "letter-spacing": "0.02em",
    },
    "& label": {
      "font-size": "20px",
      color: "#A2A2A2",
    },
    "& button": {
      width: "100%",
      padding: "10px 30px",
      margin: "20px 0",
      "background-color": "#58d473",
      "border-color": "#58d473",
      "border-radius": "10px",
      "font-size": "24px",
      "&:hover": {
        "background-color": "#12a245",
      },
    },
    "& .Mui-disabled": {
      "background-color": "#58D473",
      opacity: "0.5",
      color: "#fff",
    },
    "& .MuiFormControl-root": {
      "margin-top": "40px",
    },
    "& .Mui-error": {
      "font-size": "16px",
    },
  },
  icon: {
    cursor: "pointer",
  },
});

export const cardStyles = makeStyles((theme) => ({
  root: {
    width: 360,
    margin: 8,
  },
  media: {
    height: 0,
    paddingTop: "40%",
  },
  expand: {
    // transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    // transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export const textBoxStyles = makeStyles({
  background: {
    border: "0",
    borderRadius: "5px",
    background: "rgba(0,0,0,.1)",
    width: "180px",
    padding: "0px 5px",
    display: "flex",
    alignItems: "center",
  },
  button: {
    background: "0",
    cursor: "pointer",
    border: "0",
    width: "10%",
  },
  textBox: {
    border: "0",
    borderRadius: "10px",
    background: "0",
    width: "85%",
    height: "100%",
    fontSize: "1.5rem",
  },
});
