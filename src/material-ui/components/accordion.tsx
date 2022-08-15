import React from "react";
import Accordion, { AccordionProps } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

export default function MuiAccordion({
  onChange,
  expanded,
  children,
  ...rest
} : AccordionProps) {
  return (
    <Accordion
      expanded={expanded}
      onChange={onChange}
      {...rest}>
      {children}
    </Accordion>
  );
}

MuiAccordion.Summary = AccordionSummary;
MuiAccordion.Details = AccordionDetails;
