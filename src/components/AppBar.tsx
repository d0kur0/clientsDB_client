import React from "react";
import clsx from "clsx";
import AppBarMUI from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../stores/rootStore";
import { openAppBar } from "../stores/appBarStore";
import { useBaseLayout } from "../customClasses/baseLayout";

function AppBar() {
  const classes = useBaseLayout();
  const dispatch = useDispatch();
  const userStore = useSelector((store: RootStore) => store.userStore);
  const titleStore = useSelector((store: RootStore) => store.titleStore);

  const handleDrawerOpen = () => dispatch(openAppBar());
  const appBarStore = useSelector((store: RootStore) => store.appBarStore);

  return (
    <AppBarMUI
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: appBarStore,
      })}>
      <Toolbar>
        {userStore.isAuth && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: appBarStore,
            })}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" noWrap>
          {titleStore}
        </Typography>
      </Toolbar>
    </AppBarMUI>
  );
}

export default AppBar;
