import { Box, TextField } from "@mui/material";
import { Form } from "formik";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useApiRequest from "../services/useApiRequest";
import { useSelector } from "react-redux";

const NewBlogForm = ({ newBlogInfo, setNewBlogInfo }) => {
  const { postNewBlog, getInfo } = useApiRequest();
  const { categories } = useSelector((state) => state.card);
  console.log(categories);

  const handleChange = (e) => {
    setNewBlogInfo({ ...newBlogInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    postNewBlog()
    getInfo()
}
  return (
    <Box content="form" onSubmit={() => handleSubmit()} style={{ display: "flex", justifyContent: "center", margin: 100 }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", width: 300, gap: 1 }}
      >
        <TextField
          id="title"
          name="title"
          type="title"
          label="Title"
          variant="outlined"
          value={newBlogInfo.title}
          onChange={handleChange}
        />
        <TextField
          id="image"
          name="image"
          type="url"
          label="Image URL"
          variant="outlined"
          value={newBlogInfo.image}
          onChange={handleChange}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Categories</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={newBlogInfo.categoryId}
            label="Categories"
            onChange={handleChange}
          >
            {categories.map((item) => {
              <MenuItem value={item._id}>{item.name}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Pleace Choose</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={newBlogInfo.isPublish}
            label="Pleace Choose"
            onChange={handleChange}
          >
            <MenuItem value={false}>Draft</MenuItem>
            <MenuItem value={true}>Published</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="content"
          name="content"
          type="content"
          label="Content"
          variant="outlined"
          value={newBlogInfo.content}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
};

export default NewBlogForm;
