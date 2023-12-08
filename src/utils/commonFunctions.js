import React from "react";

export function formatDate(inputDate) {
  const options = {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZoneName: "short",
  };

  const formattedDate = new Date(inputDate).toLocaleString("en-US", options);
  return formattedDate;
}

