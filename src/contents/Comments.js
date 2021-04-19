import { useState, useEffect } from 'react'; 

import Header from '../components/Header';
import '../component-styles/Header.css';
import ReactPaginate from 'react-paginate';
import Comment from "../components/Comment";

function Comments(props) {
  // const [showForm, setShowForm] = useState(false)

  const [comments, setComments] = useState( /* setComments is used to change comments, const[] sets both to useState data */
    []
  )
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(12);
  const [pageCount, setPageCount] = useState(0)

  useEffect(() => {
    async function fetchComments() {
      const res = await fetch('https://jsonplaceholder.typicode.com/comments')
      const commentsFromApi = await res.json()
      const slice = commentsFromApi.slice(offset, offset + perPage)
      const postComments = slice.map(comment => <Comment key={comment.id} comment={comment} />)
      setComments(postComments)
      setPageCount(Math.ceil(commentsFromApi.length / perPage))
    };
    fetchComments();
  }, [offset, perPage])

  function handlePageClick(eve) {
    const selectedPage = eve.selected;
    setOffset(selectedPage + 1)
  };

  // useEffect(() => {
  //   fetchComments();
  // }, [offset])


  // Add Comment
  // async function addComment(comment) {
  //   const res = await fetch('https://jsonplaceholder.typicode.com/comments', {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify(comment),
  //   })

  //   const newComment = await res.json()

  // }

  // Delete Comment
  // async function deleteComment(id) {
  //   const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
  //     method: 'DELETE',
  //   })
  //   res.status === 200
  //     ? setComments(comments.filter((comment) => comment.id !== id))
  //     : alert('Error Deleting This Comment')
  // }

  return (
    <>
      <div className="header">
        <Header title={"Comments"} />
      </div>
      <div className="comments-grid">
        {comments}
      </div>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"} />
    </>
  )

}
    
// comment create form
    //   <div className="comment-create">
    //     {/* {showForm && <AddComment onAdd={addComment} />} */}
    //     {/* <AddComment onAdd={addComment} onShow={showForm} /> */}
    //     {/* <Button color={showForm ? "red" : "white"} bcolor={showForm ? "white" : "black"} height={50} text={showForm ? "close" : "create comment"} onClick={onAdd} /> */}
    //   </div>
    // </div>
//  )
// }

export default Comments