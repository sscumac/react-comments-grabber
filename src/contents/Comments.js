import AddComment from "../components/AddComment";
import Button from '../components/Button';

const Comments = ( {showForm, addComment, onAdd}) => {
  return (
    <div className="header">
      <h2>Comments</h2>
      <div className="comment-create">
        {/* {showForm && <AddComment onAdd={addComment} />} */}
        <AddComment onAdd={addComment} onShow={showForm} />
        <Button color={showForm ? "red" : "white"} bcolor={showForm ? "white" : "black"} height={50} text={showForm ? "close" : "create comment"} onClick={onAdd} />
      </div>
    </div>
 )
}

export default Comments