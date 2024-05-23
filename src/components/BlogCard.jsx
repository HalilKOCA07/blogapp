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
import { Box, Button, Link } from "@mui/material";
import useApiRequest from "../services/useApiRequest";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function BlogCard() {
  const { blogs, comments } = useSelector((state) => state.card);
  const { getInfo, getComments } = useApiRequest();
  const navigate = useNavigate()
console.log(comments)

const handleDetail = () => {


}

  useEffect(() => {
    getInfo();
    getComments();
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 3,
        mx: 8,
        my: 5,
      }}
    >
      {blogs.map((item) => (
        <Card key={item._id} sx={{ maxWidth: 300, borderRadius:3 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            title={item.title}
            subheader={new Date(item.createdAt).toLocaleString("tr-TR")}
          />
          <CardMedia
            component="img"
            image={item.image}
            alt="Paella dish"
          />
          <CardContent style={{ width: 270, whiteSpace: "nowrap" }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                my: 2,
                p: 1,
              }}
            >
              {item.content}
            </Typography>
          </CardContent>
          <CardActions
            disableSpacing
            sx={{ display: "flex", justifyContent: "space-around" }}
          >
            <IconButton aria-label="add to favorites">
              <FavoriteIcon /> <span>{item.likes.length}</span>
            </IconButton>
            <IconButton aria-label="comment">
              <CommentIcon />
              <span>{item.comments.length}</span>
            </IconButton>
            <IconButton aria-label="visibility">
              <VisibilityIcon />
              <span>{item.__v}</span>
            </IconButton>
            <Button variant="contained" sx={{whiteSpace:"nowrap"}} onClick={() => navigate(`/detail/${item._id}`)}>Read More</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
