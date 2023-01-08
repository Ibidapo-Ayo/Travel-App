import { FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";
import React, { useState } from "react";
const [text, setText] = useState("");
const [date, setDate] = useState("");

const searchResult = e => {
  setText(e.target.value);
};
const searchResult2 = e => {
  setDate(e.target.value);
};
export const Travel = [
  {
    title: "Where",
    placeholder: "where are you going",
    icon: <FaMapMarkerAlt />,
    type: "text",
    value: text,
    onChange: searchResult
  },
  {
    title: "Date",
    type: "date",
    value: date,
    onChange: searchResult2
  }
];
