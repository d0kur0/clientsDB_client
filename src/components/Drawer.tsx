import React from "react";
import clsx from "clsx";
import DrawerMUI from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { useDispatch, useSelector } from "react-redux";
import { closeAppBar } from "../stores/appBarStore";
import { RootStore } from "../stores/rootStore";
import { useBaseLayout } from "../customClasses/baseLayout";

function Drawer() {
  const classes = useBaseLayout();
  const dispatch = useDispatch();

  const appBarStore = useSelector((store: RootStore) => store.appBarStore);
  const handleDrawerClose = () => dispatch(closeAppBar());

  return (
    <DrawerMUI
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: appBarStore,
        [classes.drawerClose]: !appBarStore,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: appBarStore,
          [classes.drawerClose]: !appBarStore,
        }),
      }}>
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronRightIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </DrawerMUI>
  );
}

export default Drawer;
