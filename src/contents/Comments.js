import AddComment from "../components/AddComment";
import Button from '../components/Button';

const Comments = ( {showForm, addComment, onAdd}) => {
  return (
    <div className="header">
      <h1>Comments</h1>
      <div className="comment-create">
        {showForm && <AddComment onAdd={addComment} />}
        <Button color={showForm ? "red" : "black"} height={50} text={showForm ? "close" : "create comment"} onClick={onAdd} />
      </div>
    </div>
 )
}

export default Comments