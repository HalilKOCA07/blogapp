import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import NewBlogForm from "../components/NewBlogForm";
import useApiRequest from "../services/useApiRequest";


const NewBlog = () => {
  const { postNewBlog, getInfo } = useApiRequest();
  const initialValues = {
    title: "",
    image: "",
    content: "",
    isPublish: null,
    categoryId: "",
  };
  useEffect(() => {
    getInfo("categories")
  },[])
  const [newBlogInfo, setNewBlogInfo] = useState(initialValues)
  return (
    <>
      <Box>
        <NewBlogForm newBlogInfo={newBlogInfo} setNewBlogInfo={setNewBlogInfo} initialValues={initialValues}/>
      </Box>
    </>
  );
};
export default NewBlog;
