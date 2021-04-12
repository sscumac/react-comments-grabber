import '../component-styles/Comment.css'

const Comment = ({ comment, onDelete }) => {
  return (
    <div className="comment-card">
        <div className="comment-header">
          {/* <h5 className="id">{comment.id}</h5> */}
          <h5>{comment.name}</h5>
          <p className="email">{comment.email}</p>
        </div>
        <div className="comment-main">
          <p>{comment.body}</p>
        </div>
        {/* <p className="delete" onClick={() => onDelete(comment.id)}>x</p> */}
      
    </div>
  )
}

export default Comment
