import Header from '../components/Header'
import '../component-styles/About.css'

function About() {

  return (
    
    <div className="header">
      <Header title={"About"} />
      <p>This is my first single page web application built with React. It is fully responsive and fetches comments from the jsonplaceholder fake API which are organized by pagination.</p>
      <p>If you want to see more of my work visit my <a href="https://github.com/sscumac">github</a>.</p>
    </div>

  )
}

export default About