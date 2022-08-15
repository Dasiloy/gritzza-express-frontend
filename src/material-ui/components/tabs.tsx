import React from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import Tabs, { TabsProps } from "@mui/material/Tabs";

export default function MuiTabs({ children, ...rest }:TabsProps) {
  return <Tabs {...rest}>{children}</Tabs>;
}

MuiTabs.Tab = Tab;
MuiTabs.Tablist = TabList;
MuiTabs.Context = TabContext;
MuiTabs.Panel = TabPanel;
