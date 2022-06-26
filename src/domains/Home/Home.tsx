import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="box-holder center">
      <div className="box center">
        <Link to='/ai' className='link center h2'><h2>AI</h2></Link>
      </div>
      <div className="box">
        <Link to='/uml' className='link center'><h2>UML</h2></Link>
      </div>
      <div className="box">
        <Link to='/stats' className='link center'><h2>Stats</h2></Link> 
      </div>
      <div className="box">
        <Link to='/docs' className='link center'><h2>Docs</h2></Link>
      </div>
    </div>
  )
}

export default Home
