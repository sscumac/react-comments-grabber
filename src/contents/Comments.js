import AddComment from "../components/AddComment";
import Button from '../components/Button';
import Header from '../components/Header';
import '../component-styles/Header.css';

const Comments = ( {showForm, addComment, onAdd}) => {
  return (
    <div className="header">
      <Header title={"Comments"} />
    </div>
    
    // <div className="header">
    //   <h1>Comments</h1>
    //   <div className="comment-create">
    //     {/* {showForm && <AddComment onAdd={addComment} />} */}
    //     {/* <AddComment onAdd={addComment} onShow={showForm} /> */}
    //     {/* <Button color={showForm ? "red" : "white"} bcolor={showForm ? "white" : "black"} height={50} text={showForm ? "close" : "create comment"} onClick={onAdd} /> */}
    //   </div>
    // </div>
 )
}

export default Comments