import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import "./BackupHistory.css"

function BackupHistory() {

  
  const getSum = () => {
    const seconds = backupLogs.logs.reduce((sum, { time }) => sum + time, 0);

    return secondsToTime(seconds).h;
  }

  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            edge="start"
            className="menuButton"
            color="inherit"
            aria-label="menu"
          >
            &lt;
          </IconButton>
          <Typography variant="h6" className="title">
            BACKUP HISTORY
          </Typography>
        </Toolbar>
        <Divider />
      </AppBar>
      <List>
        <ListItem className="li__summary">
          <div className="li__text">
            <span>EVENTS</span>
            <span>{backupLogs.logs.length} <span className="li__text_sub">events</span></span>
          </div>
          <div className="li__text">
            <span>BACKUP POWER</span>
            <span>{getSum()} <span className="li__text_sub">total backup hours</span></span>
          </div>
        </ListItem>
        <Divider />
        {backupLogs.logs.map((log) => (
          <ListItem button key={log.id} className="li__log">
            <ListItemText className="li__text" primary={log.date} />
            <ListItemText className="li__text" secondary={timeToString(secondsToTime(log.time))} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

const secondsToTime = (secs) => {

  secs = Math.round(secs);
  var hours = Math.floor(secs / (60 * 60));

  var divisor_for_minutes = secs % (60 * 60);
  var minutes = Math.floor(divisor_for_minutes / 60);

  var divisor_for_seconds = divisor_for_minutes % 60;
  var seconds = Math.ceil(divisor_for_seconds);

  var obj = {
      h: hours,
      m: minutes,
      s: seconds
  };
  return obj;
}

const timeToString = (time) => {

  let ret = "";
  const hours = time.h;
  if (hours > 0) {
    ret += hours + " hour" + (hours > 1 ? "s" : "");
  }
  const minutes = time.m;
  if (minutes > 0) {
    ret += " " + minutes + " minute" + (minutes > 1 ? "s" : "");
  }

  return ret;
}


const backupLogs = {
  logs: [
    { id: 1, date: "June 25th", time: 10 * 60 },
    { id: 2, date: "June 6th", time: 3 * 60 },
    { id: 3, date: "May 31th", time: 2 * 60 },
    { id: 4, date: "May 11th", time: 4131 * 60 },
    { id: 5, date: "May 6th", time: 4234 * 60 },
    { id: 6, date: "April 27th", time: 31 * 60 },
    { id: 7, date: "April 21th", time: 1540 * 60 },
    { id: 8, date: "April 17th", time: 2477 * 60 },
    { id: 9, date: "April 16th", time: 1011 * 60 },
    { id: 10, date: "April 16th", time: 153 * 60 },
    { id: 11, date: "April 11th", time: 1 * 60 },
    { id: 12, date: "March 26th", time: 25 * 60 },
    { id: 13, date: "March 20th", time: 30 * 60 },
    { id: 14, date: "March 15th", time: 45 * 60 },
    { id: 15, date: "March 10th", time: 38 * 60 },
    { id: 16, date: "March 8th", time: 108 * 60 },
    { id: 17, date: "March 7th", time: 680 * 60 },
    { id: 18, date: "March 3rd", time: 481 * 60 },
    { id: 19, date: "March 2nd", time: 52 * 60 },
    { id: 20, date: "March 1st", time: 37 * 60 },
  ],
};

export default BackupHistory;
