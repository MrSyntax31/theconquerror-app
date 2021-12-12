import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import UserNav from './NavAuth'
import * as ImIcons from 'react-icons/im';
import * as MdIcons from 'react-icons/md';

function App() {
  return (
    <div className="App ">
      <Navbar bg="dark" variant="dark"
         fixed="top" expand="sm" collapseOnSelect className="">
        <Navbar.Brand>
        <img src="../Assets/white-logo.svg" className="Headerlogo" alt="logo" style={{width: "190px",paddingLeft: "20px"}}/>
          
        </Navbar.Brand>

        <Navbar.Toggle className="coloring "  />
        <Navbar.Collapse style={{paddingLeft: "50px"}}>
          <Nav>
            
            <li className="nav-item active" style={{width: "6rem"}}>
              <NavLink className="nav-link " to="/" exact tooltip="Home">
                  <ImIcons.ImHome/> 
                  <p>Home</p>
              </NavLink>
            </li>
            <li className="nav-item" style={{width: "6rem"}}>
              <NavLink className="nav-link" to="/course" exact>
              <ImIcons.ImBooks/> 
              <p>Course</p>
              </NavLink> 
            </li>

            <li className="nav-item" style={{width: "6rem"}}>
              <NavLink className="nav-link" to="/games" exact>
              <MdIcons.MdGames/> 
              <p>Games</p>
              </NavLink>
            </li>
            <li className="nav-item" style={{width: "6rem"}}>
              <NavLink className="nav-link" to="/videocollection" exact>
              <MdIcons.MdVideoLibrary/> 
              <p>CTube</p>
              </NavLink>
            </li>
            <li className="nav-item" style={{width: "6rem"}}>
              <NavLink className="nav-link" to="/forum" exact>
              <MdIcons.MdForum/> 
              <pL>Forum</pL>
              </NavLink>
            </li>
          </Nav>
             <UserNav/>
        </Navbar.Collapse>
    
      </Navbar>
      
    </div>
  );
}

export default App;
