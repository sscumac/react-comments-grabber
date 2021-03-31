import Button from './Button'

const Comment = ({ comment, onDelete }) => {
  return (
    <div className="comment-card">
        <div className="comment-header">
          <h5>{comment.name}</h5>
          <p>{comment.email}</p>
        </div>
        <div className="comment-main">
          <p>{comment.body}</p>
        </div>
        <p className="delete" onClick={() => onDelete(comment.id)}>x</p>
      
    </div>
  )
}

export default Comment
