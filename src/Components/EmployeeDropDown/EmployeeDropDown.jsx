import { useEffect, useState } from "react";
import axios from "axios";
import {
  Avatar,
  Input,
  Checkbox,
  Select,
  ListItemText,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
} from "@mui/material";

const ITEM_HEIGHT = 80;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const EmployeeDropDown = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const getData = async () => {
    const { data } = await axios.get("data.json");
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const getSearch = (data, search) => {
    if (search) {
      return data.filter((user) => user.name.includes(search.toLowerCase()));
    } else {
      return data;
    }
  };

  const searchData = getSearch(data, search);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, checked } = e.target;
    if (name === "allSelect") {
      const selectedUser = data.map((user) => ({
        ...user,
        isChecked: checked,
      }));
      setData(selectedUser);
    } else {
      const selectedUser = data.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setData(selectedUser);
    }
  };

  return (
    <div className="main-container">
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">
          Select employee({data.length})
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          name="allSelect"
          input={<OutlinedInput label="Select employee" />}
          MenuProps={MenuProps}
        >
          <div className={searchData.length !== 0?"inner-container":"full-height"} >
            <Input
              inputProps={{
                sx: {
                  "&::placeholder": {
                    color: "#ffffff",
                  },
                },
              }}
              
              sx={{ m: 1, width: 300 }}
              style={{ color: "white" }}
              placeholder="Search employee"
              type="search"
              onChange={(e) => setSearch(e.target.value)}
            />

            <MenuItem>
              <Checkbox
                name="allSelect"
                onChange={handleChange}
                checked={
                  data.filter((user) => user.isChecked !== true).length < 1
                }
              />
              <ListItemText primary="All employee" />
            </MenuItem>
            {searchData.length === 0 ? (
              <h3 className="center-text">No Result</h3>
            ) : (
              searchData.map(({ id, name, isChecked, image }) => (
                <MenuItem key={id} value={name} className="gap">
                  <Avatar alt="Remy Sharp" src={image} />
                  <ListItemText primary={name} />
                  <Checkbox
                    name={name}
                    onChange={handleChange}
                    checked={isChecked || false}
                  />
                </MenuItem>
              ))
            )}
          </div>
        </Select>
      </FormControl>
    </div>
  );
};
