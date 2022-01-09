import React from 'react'
import { Container, Navbar, Button, Dropdown, DropdownButton, Row, Col } from 'react-bootstrap'
import * as MdIcons from 'react-icons/md';

//Routing
import {  useHistory} from "react-router-dom"

//Authentication
import { getAuth, signOut } from "firebase/auth";

//Alert
import swal from 'sweetalert';

function NavBar () {
           const auth = getAuth(); 
          const history = useHistory();


          const back = (event) => {

          history.push("/profile")
           }

           const logout = (event) => {

            signOut(auth).then(() => {

              swal("Logout", "You have been logged out", "success");
              sessionStorage.removeItem('userLevel')
              sessionStorage.removeItem('sessionKey')
              sessionStorage.removeItem('UpdateKey')
              sessionStorage.removeItem('changePassKey')
        
              history.push("/login")

            }).catch((error) => { swal('Error',error,'error')})
           }

    return (
        <>

          <Navbar bg="dark" variant="dark" sticky="top">
            <Container>

              <Navbar.Brand className="mx-auto d-block">
                <img
                  alt=""
                  src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjE0LjI1ODA4IiB5MT0iMTQuMjU4MDgiIHgyPSIxMjEuMjY3MTciIHkyPSIxMjEuMjY3MTciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjM2NhMGUxIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIwLjU4NyIgc3RvcC1jb2xvcj0iIzQ1OTlkMiI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzIwNjhlNSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0idXJsKCNjb2xvci0xKSI+PHBhdGggZD0iTTEwOS44MTQ4MywxNDUuNjQ4MTdsLTE1LjM4MzI1LC0xNS4zODMyNWMtMC42OTg3NSwtMC42OTg3NSAtMC42OTg3NSwtMS44MzQ2NyAwLC0yLjUzMzQybDguMjE2NTgsLTguMjE2NThjMC42OTg3NSwtMC42OTg3NSAxLjgzNDY3LC0wLjY5ODc1IDIuNTMzNDIsMGw0LjYzMzI1LDQuNjMzMjVjMC42OTg3NSwwLjY5ODc1IDEuODM0NjcsMC42OTg3NSAyLjUzMzQyLDBsMzYuODgzMjUsLTM2Ljg4MzI1YzAuNjk4NzUsLTAuNjk4NzUgMC42OTg3NSwtMS44MzQ2NyAwLC0yLjUzMzQybC0zNi44Nzk2NywtMzYuODc5NjdjLTAuNjk4NzUsLTAuNjk4NzUgLTEuODM0NjcsLTAuNjk4NzUgLTIuNTMzNDIsMGwtMTEuNzk5OTIsMTEuNzk5OTJjLTAuNjk4NzUsMC42OTg3NSAtMC42OTg3NSwxLjgzNDY3IDAsMi41MzM0MmwyMi41NDk5MiwyMi41NDk5MmMwLjY5ODc1LDAuNjk4NzUgMC42OTg3NSwxLjgzNDY3IDAsMi41MzM0MmwtOC4yMTY1OCw4LjIxNjU4Yy0wLjY5ODc1LDAuNjk4NzUgLTEuODM0NjcsMC42OTg3NSAtMi41MzM0MiwwbC0zMy4yOTk5MiwtMzMuMjk5OTJjLTAuNjk4NzUsLTAuNjk4NzUgLTAuNjk4NzUsLTEuODM0NjcgMCwtMi41MzM0MmwzMy4yOTk5MiwtMzMuMjk5OTJjMC42OTg3NSwtMC42OTg3NSAxLjgzNDY3LC0wLjY5ODc1IDIuNTMzNDIsMGw1OC4zODMyNSw1OC4zODMyNWMwLjY5ODc1LDAuNjk4NzUgMC42OTg3NSwxLjgzNDY3IDAsMi41MzM0MmwtNTguMzgzMjUsNTguMzc5NjdjLTAuNzAyMzMsMC43MDIzMyAtMS44MzQ2NywwLjcwMjMzIC0yLjUzNywwek05NS40ODE1LDEwOS44MTQ4M2wtMzMuMjk5OTIsLTMzLjI5OTkyYy0wLjY5ODc1LC0wLjY5ODc1IC0xLjgzNDY3LC0wLjY5ODc1IC0yLjUzMzQyLDBsLTguMjE2NTgsOC4yMTY1OGMtMC42OTg3NSwwLjY5ODc1IC0wLjY5ODc1LDEuODM0NjcgMCwyLjUzMzQybDIyLjU0OTkyLDIyLjU0OTkyYzAuNjk4NzUsMC42OTg3NSAwLjY5ODc1LDEuODM0NjcgMCwyLjUzMzQybC0xMS43OTk5MiwxMS43OTk5MmMtMC42OTg3NSwwLjY5ODc1IC0xLjgzNDY3LDAuNjk4NzUgLTIuNTMzNDIsMGwtMzYuODc5NjcsLTM2Ljg3OTY3Yy0wLjY5ODc1LC0wLjY5ODc1IC0wLjY5ODc1LC0xLjgzNDY3IDAsLTIuNTMzNDJsMzYuODgzMjUsLTM2Ljg4MzI1YzAuNjk4NzUsLTAuNjk4NzUgMS44MzQ2NywtMC42OTg3NSAyLjUzMzQyLDBsNC42MzMyNSw0LjYzMzI1YzAuNjk4NzUsMC42OTg3NSAxLjgzNDY3LDAuNjk4NzUgMi41MzM0MiwwbDguMjE2NTgsLTguMjE2NThjMC42OTg3NSwtMC42OTg3NSAwLjY5ODc1LC0xLjgzNDY3IDAsLTIuNTMzNDJsLTE1LjM4MzI1LC0xNS4zODMyNWMtMC42OTg3NSwtMC42OTg3NSAtMS44MzQ2NywtMC42OTg3NSAtMi41MzM0MiwwbC01OC4zODMyNSw1OC4zNzk2N2MtMC42OTg3NSwwLjY5ODc1IC0wLjY5ODc1LDEuODM0NjcgMCwyLjUzMzQybDU4LjM4MzI1LDU4LjM4MzI1YzAuNjk4NzUsMC42OTg3NSAxLjgzNDY3LDAuNjk4NzUgMi41MzM0MiwwbDMzLjI5OTkyLC0zMy4yOTk5MmMwLjY5ODc1LC0wLjY5ODc1IDAuNjk4NzUsLTEuODMxMDggLTAuMDAzNTgsLTIuNTMzNDJ6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                ConquError
                
              </Navbar.Brand>
              <Button className="btn btn-primary" onClick={back}>Back</Button>{''}{''}
              <p onClick={logout} className="btn text-light"><MdIcons.MdOutlineLogout/> Logout</p>
            </Container>
            <Row>
        <Col></Col>

        <Col md="auto"></Col>

        <Col xs lg="4">
        <DropdownButton className="NavBar mt-2"
          id="dropdown-button-dark-example2"
          variant="secondary"
          menuVariant="dark"
          title="ConquError">

          <Dropdown.Item onClick={back}>Back</Dropdown.Item>
          <Dropdown.Item  onClick={logout}><MdIcons.MdOutlineLogout/>Log-Out</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="https://technojetdev.netlify.app">Technojet.Dev</Dropdown.Item>
        </DropdownButton>
    </Col>
            </Row>  
          </Navbar>
</>
    )
}

export default NavBar
