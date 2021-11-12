import { AppBar, Toolbar, makeStyles, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles({
  header: {
    background: "#111111",
  },
  tabs: {
    color: "#FFFFFF",
    textDecoration: "none",
    marginRight: 20,
    fontSize: 17,
  },
  tabss: {
    color: "#FFFFFF",
    textDecoration: "none",
    // marg
    fontSize: 17,
  },
  tabsss: {
    color: "#FFFFFF",
    textDecoration: "none",
    // marginLeft: 30,
    fontSize: 17,
  },
});

const NavBar = () => {
  const classes = useStyle();
  return (
    <AppBar className={classes.header} position="static">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <NavLink className={classes.tabs} to="./">
            Crud Application
          </NavLink>
          <NavLink className={classes.tabs} to="all">
            All Users
          </NavLink>
          <NavLink className={classes.tabs} to="add">
            Add Users
          </NavLink>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "25%",
            margine: "10%",
          }}
        >
          <NavLink className={classes.tabsss} to="login">
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: 10 }}
            >
              Login User
            </Button>
          </NavLink>
          <NavLink className={classes.tabss} to="register">
            <Button
              variant="contained"
              color="secondary"
              style={{ marginRight: 10 }}
            >
              Register User
            </Button>
          </NavLink>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
