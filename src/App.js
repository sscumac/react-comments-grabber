import { useState, useEffect } from 'react' /* a hook to let us use state for this component */
import { BrowserRouter as Router, Route, } from "react-router-dom";
import ReactPaginate from 'react-paginate';


import Comment from "./components/Comment";

import Navbar from './components/Navbar';
import Dashboard from './contents/Dashboard';
import Comments from './contents/Comments';
import Tasks from './contents/Tasks';
import Map from './contents/Map';
import User from './contents/User';
import Admin from './contents/Admin';


function App() {

  const [showForm, setShowForm] = useState(false) // state is a boolean with default false
  /* we want to have the comments state globally available, and then we can pass it down to components where we want it as prop */
  const [comments, setComments] = useState( /* setComments is used to change comments, const[] sets both to useState data */
    []
  )
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(12);
  const [pageCount, setPageCount] = useState(0)



  async function fetchComments() {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const commentsFromApi = await res.json()
    const slice = commentsFromApi.slice(offset, offset + perPage)
    const postComments = slice.map(comment => <Comment key={comment.id} comment={comment} onDelete={deleteComment} />)
    setComments(postComments)
    setPageCount(Math.ceil(commentsFromApi.length / perPage))
  }
  const handlePageClick = (eve) => {
    const selectedPage = eve.selected;
    setOffset(selectedPage + 1)
    // we can send functions as a prop
  };

  useEffect(() => {
    fetchComments()
  }, [offset])


  // Add Comment
  async function addComment(comment) {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(comment),
    })

    const newComment = await res.json()

    comments.push(newComment)
    setComments(comments)

  }


  // Delete Comment
  async function deleteComment(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
      method: 'DELETE',
    })
    res.status === 200
      ? setComments(comments.filter((comment) => comment.id !== id))
      : alert('Error Deleting This Comment')
  }

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Route exact path="/Comments">
          <Comments onAdd={() => setShowForm(!showForm)} showForm={showForm} />
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
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"} />
        </Route>
        <Route path="/Dashboard">
          <Dashboard />
        </Route>
        <Route path="/Tasks">
          <Tasks />
        </Route>
        <Route path="/Map">
          <Map />
        </Route>
        <Route path="/User">
          <User />
        </Route>
        <Route path="/Admin">
          <Admin />
        </Route>
      </div>
    </Router>
  );
}


export default App;

