import { useState } from "react";
import { TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const popperSx = {
  "& .MuiCalendarPicker-root": {
    backgroundColor: "#334155",
    color: "#FFFFFF",
  },
  "& .MuiTypography-root":{
    color:"#FFFFFF",
  },
  "& .MuiSvgIcon-root":{
    color:"#FFFFFF",
  },
  "& .PrivatePickersSlideTransition-root": { color: "#FFFFFF" },
  "& .MuiPickersDay-dayWithMargin": {
    color: "#FFFFFF",
    backgroundColor: "#334155",
  },
  "& .MuiTabs-root": { color: "#FFFFFF" , backgroundColor: "#334155" },
};

export const DatePickerDropDown = () => {
  const [value, setValue] = useState(new Date());
  return (
    <div className="datepicker-container">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Date Picker"
          value={value}
          InputProps={{ sx: { "& .MuiSvgIcon-root": { color: "blue" } } }}
          PopperProps={{
            sx: popperSx,
          }}
          id="datepicker"
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
};
