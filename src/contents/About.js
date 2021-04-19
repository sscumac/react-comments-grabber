import Header from '../components/Header'
import '../component-styles/About.css'

function About() {

  return (
    
    <div className="header">
      <Header title={"About"} />
      <p>Hi! This is my first project realized with React. A fully responsive single page web application fetching comments from the <a href="https://jsonplaceholder.typicode.com/">jsonplaceholder fake API</a> which are organized by pagination.</p>
      <p>If you wish to see more of my work feel free to visit my <a href="https://github.com/sscumac">github</a>.</p>
    </div>

  )
}

export default About