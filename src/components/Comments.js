import Comment from "./Comment";


const Comment = ({ comment, onDelete }) => {
  return (
    <>
      {comment.map((comment) => (
        <Comment key={comment.id} comment={comment} onDelete={onDelete} /> /* onDelete is passed down cause here we want to use it */
      ))}
    </>
  )
}

  


export default Comment
