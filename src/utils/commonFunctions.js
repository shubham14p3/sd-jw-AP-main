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

export function convertDateFormat(isoDateString) {
  const isoDate = new Date(isoDateString);

  const day = isoDate.getDate();
  const month = isoDate.getMonth() + 1; // Months are zero-based
  const year = isoDate.getFullYear();

  // Format the date as DD-MM-YYYY
  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
}
