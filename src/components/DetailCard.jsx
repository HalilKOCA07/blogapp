import React, { useEffect } from "react";
import useApiRequest from "../services/useApiRequest";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Button, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CommentIcon from "@mui/icons-material/Comment";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

const DetailCard = ({initialPostComment, setNewComment, newComment}) => {
  const { id } = useParams();
  const { getSingleBlog, postNewBlog } = useApiRequest();
  const { detail } = useSelector((state) => state.card);

  const handleChange = (e) => {
    setNewComment({...newComment, [e.target.name]: e.target.value, "blogId":id})
  }

const handleSubmit = (e) => {
    e.preventDefault()
    postNewBlog("comments", newComment)
    getSingleBlog(`blogs/${id}`)
    setNewComment(initialPostComment)
}

  console.log(detail);
  console.log(newComment)
  useEffect(() => {
    getSingleBlog(`blogs/${id}`);
  }, [id]);

  return (
    <Box>
      <Box>
        <Card
          key={detail._id}
          sx={{
            maxWidth: 700,
            borderRadius: 3,
            textAlign: "center",
            m: "auto",
          }}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            title={detail.title}
            subheader={new Date(detail.createdAt).toLocaleString("tr-TR")}
          />
          <CardMedia
            sx={{ width: 300, m: "auto" }}
            component="img"
            image={detail.image}
            alt="Paella dish"
          />
          <CardContent style={{ width: 650 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: "left" }}
            >
              {detail.content}
            </Typography>
          </CardContent>
          <CardActions disableSpacing sx={{ display: "flex", gap: 2 }}>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon /> <span>{detail.likes.length}</span>
            </IconButton>
            <IconButton aria-label="comment">
              <CommentIcon />
              <span>{detail.comments.length}</span>
            </IconButton>
            <IconButton aria-label="visibility">
              <VisibilityIcon />
              <span>{detail.__v}</span>
            </IconButton>
          </CardActions>
        </Card>
      </Box>

      {/* //!ENTER COMMENT */}
      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Stack sx={{ m: "auto", width: 600, my: 3 }}>
          <TextField
            required
            id="outlined-required"
            name="comment"
            type="title"
            label="Comment"
            defaultValue="Enter Your Comment"
            variant="outlined"
            value={newComment.comment}
            onChange={handleChange}
            sx={{
              m: 1,
              "& .MuiInputBase-input": {
                height: 100,
              },
            }}
          />
          <Button type="submit" variant="contained" endIcon={<SendIcon />} sx={{width:300, m:"auto"}}>
            Send Your Comment
          </Button>
        </Stack>
      </Box>
      <Box
        sx={{
          width: 600,
          m: "auto",
          border: 0.5,
          borderColor: "#e4e4e4",
          p: 3,
          mb: 2,
        }}
      >
        {detail.comments.map((item) => (
          <Typography>
            <h5>{item.userId.username}</h5>
            {item.comment}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default DetailCard;
