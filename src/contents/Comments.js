import { useState, useEffect } from 'react'; 

import Header from '../components/Header';
import ReactPaginate from 'react-paginate';
import Comment from "../components/Comment";

import '../component-styles/Header.css';
import '../other-stylesheets/pagination.css';
import '../other-stylesheets/comments-grid.css';

function Comments() {

  const [comments, setComments] = useState( /* setComments is used to change comments, const[] sets both to useState data */
    []
  )
  const [loading, setLoading] = useState(true)
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(12);
  const [pageCount, setPageCount] = useState(0)


  useEffect(() => {
    async function fetchComments() {
      const res = await fetch('https://jsonplaceholder.typicode.com/comments')
      const commentsFromApi = await res.json()
      const slice = commentsFromApi.slice(offset, offset + perPage)
      const postComments = slice.map(comment => <Comment key={comment.id} comment={comment} />)
      setLoading(false)
      setComments(postComments)
      setPageCount(Math.ceil(commentsFromApi.length / perPage))
    };
    fetchComments();
  }, [offset, perPage])

  function handlePageClick(eve) {
    const selectedPage = eve.selected;
    setOffset(selectedPage + 1)
  };


  return (
    <>
      <div className="header">
        <Header title={"Comments"} />
      </div>
      {(loading === true)
          ? <p>loading comments...</p>
          : <div className="comments-grid">
              {comments}  
            </div>
      }
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

export default Comments