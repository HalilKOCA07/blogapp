import React, { useState } from 'react'
import DetailCard from '../components/DetailCard'

const Detail = () => {
  
  const initialPostComment = {
    "blogId":"",
    "comment":""
  }
  const [newComment, setNewComment] = useState(initialPostComment)
  return (
    <div>
      <DetailCard initialPostComment={initialPostComment} newComment={newComment} setNewComment={setNewComment}/>
    </div>
  )
}

export default Detail
