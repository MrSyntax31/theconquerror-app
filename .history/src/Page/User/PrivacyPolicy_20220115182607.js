import React from 'react'
import { Link } from "react-router-dom";
import { Container, Navbar} from 'react-bootstrap';
import { Helmet } from "react-helmet";

import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import 'csshake';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 1.8rem;
  .container {
    display: flex;
    gap: 1.5rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 3rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 3.5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

const PrivacyPolicy = () => {

    
    return (
        <>
             <div>
                <Helmet>
                    <title>ConquError | Privacy Policy</title>
                    <meta name="description" content="ConquError Privacy Policy page" />
                </Helmet>
            </div> 
            <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
            <h3 className="text-center text-primary fw-bold mt-3">
                  <img
                  alt=""
                  src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjE0LjI1ODA4IiB5MT0iMTQuMjU4MDgiIHgyPSIxMjEuMjY3MTciIHkyPSIxMjEuMjY3MTciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjM2NhMGUxIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIwLjU4NyIgc3RvcC1jb2xvcj0iIzQ1OTlkMiI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzIwNjhlNSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0idXJsKCNjb2xvci0xKSI+PHBhdGggZD0iTTEwOS44MTQ4MywxNDUuNjQ4MTdsLTE1LjM4MzI1LC0xNS4zODMyNWMtMC42OTg3NSwtMC42OTg3NSAtMC42OTg3NSwtMS44MzQ2NyAwLC0yLjUzMzQybDguMjE2NTgsLTguMjE2NThjMC42OTg3NSwtMC42OTg3NSAxLjgzNDY3LC0wLjY5ODc1IDIuNTMzNDIsMGw0LjYzMzI1LDQuNjMzMjVjMC42OTg3NSwwLjY5ODc1IDEuODM0NjcsMC42OTg3NSAyLjUzMzQyLDBsMzYuODgzMjUsLTM2Ljg4MzI1YzAuNjk4NzUsLTAuNjk4NzUgMC42OTg3NSwtMS44MzQ2NyAwLC0yLjUzMzQybC0zNi44Nzk2NywtMzYuODc5NjdjLTAuNjk4NzUsLTAuNjk4NzUgLTEuODM0NjcsLTAuNjk4NzUgLTIuNTMzNDIsMGwtMTEuNzk5OTIsMTEuNzk5OTJjLTAuNjk4NzUsMC42OTg3NSAtMC42OTg3NSwxLjgzNDY3IDAsMi41MzM0MmwyMi41NDk5MiwyMi41NDk5MmMwLjY5ODc1LDAuNjk4NzUgMC42OTg3NSwxLjgzNDY3IDAsMi41MzM0MmwtOC4yMTY1OCw4LjIxNjU4Yy0wLjY5ODc1LDAuNjk4NzUgLTEuODM0NjcsMC42OTg3NSAtMi41MzM0MiwwbC0zMy4yOTk5MiwtMzMuMjk5OTJjLTAuNjk4NzUsLTAuNjk4NzUgLTAuNjk4NzUsLTEuODM0NjcgMCwtMi41MzM0MmwzMy4yOTk5MiwtMzMuMjk5OTJjMC42OTg3NSwtMC42OTg3NSAxLjgzNDY3LC0wLjY5ODc1IDIuNTMzNDIsMGw1OC4zODMyNSw1OC4zODMyNWMwLjY5ODc1LDAuNjk4NzUgMC42OTg3NSwxLjgzNDY3IDAsMi41MzM0MmwtNTguMzgzMjUsNTguMzc5NjdjLTAuNzAyMzMsMC43MDIzMyAtMS44MzQ2NywwLjcwMjMzIC0yLjUzNywwek05NS40ODE1LDEwOS44MTQ4M2wtMzMuMjk5OTIsLTMzLjI5OTkyYy0wLjY5ODc1LC0wLjY5ODc1IC0xLjgzNDY3LC0wLjY5ODc1IC0yLjUzMzQyLDBsLTguMjE2NTgsOC4yMTY1OGMtMC42OTg3NSwwLjY5ODc1IC0wLjY5ODc1LDEuODM0NjcgMCwyLjUzMzQybDIyLjU0OTkyLDIyLjU0OTkyYzAuNjk4NzUsMC42OTg3NSAwLjY5ODc1LDEuODM0NjcgMCwyLjUzMzQybC0xMS43OTk5MiwxMS43OTk5MmMtMC42OTg3NSwwLjY5ODc1IC0xLjgzNDY3LDAuNjk4NzUgLTIuNTMzNDIsMGwtMzYuODc5NjcsLTM2Ljg3OTY3Yy0wLjY5ODc1LC0wLjY5ODc1IC0wLjY5ODc1LC0xLjgzNDY3IDAsLTIuNTMzNDJsMzYuODgzMjUsLTM2Ljg4MzI1YzAuNjk4NzUsLTAuNjk4NzUgMS44MzQ2NywtMC42OTg3NSAyLjUzMzQyLDBsNC42MzMyNSw0LjYzMzI1YzAuNjk4NzUsMC42OTg3NSAxLjgzNDY3LDAuNjk4NzUgMi41MzM0MiwwbDguMjE2NTgsLTguMjE2NThjMC42OTg3NSwtMC42OTg3NSAwLjY5ODc1LC0xLjgzNDY3IDAsLTIuNTMzNDJsLTE1LjM4MzI1LC0xNS4zODMyNWMtMC42OTg3NSwtMC42OTg3NSAtMS44MzQ2NywtMC42OTg3NSAtMi41MzM0MiwwbC01OC4zODMyNSw1OC4zNzk2N2MtMC42OTg3NSwwLjY5ODc1IC0wLjY5ODc1LDEuODM0NjcgMCwyLjUzMzQybDU4LjM4MzI1LDU4LjM4MzI1YzAuNjk4NzUsMC42OTg3NSAxLjgzNDY3LDAuNjk4NzUgMi41MzM0MiwwbDMzLjI5OTkyLC0zMy4yOTk5MmMwLjY5ODc1LC0wLjY5ODc1IDAuNjk4NzUsLTEuODMxMDggLTAuMDAzNTgsLTIuNTMzNDJ6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
                  width="25"
                  height="50"
                  className="d-inline-block align-top"
                />{' '}ConquError Console</h3>
            <Link to="/register" style={{ textDecoration: 'none' }}>Log In</Link>
            </Container>  
          </Navbar>
            <section className="features section ">
            <Container>
                            <div className="mb-4">
                                    <h2 className="text-center text-primary fw-bold">Privacy Policy and Terms of Use</h2>                                   
                            </div>  
                        </Container>

                            <Container className="mb-5" fluid="md" style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                        
                                    <section className="about_area section_gap">
                                            <div className="container">
                                                <div className="row justify-content-start align-items-center">
                                                    <div className="col-lg-5">
                                                        <div className="about_img">
                                                            <img className="" src="https://images.unsplash.com/photo-1613987750911-f768497fb94b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
                                                        </div>
                                                    </div>

                                                    <div className="offset-lg-1 col-lg-5 mt-3">
                                                        <div className="main_title text-left">
                                                            <h2 className="fw-bold mb-3">Legitimate  <br/>
                                                                Reasons for Processing   <br/>
                                                                Your Personal Information</h2>
                                                            <p className="mb-3">
                                                                We only collect and use your personal information when we have a legitimate reason for doing so. In which instance, we only collect personal information that is reasonably necessary to provide our services to you.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </section>
                            </Container>
                                    <section className="about_area section_gap">
                                            <div className="container">
                                                <div className="row justify-content-start align-items-center">
                                                    <div className="">
                                                    <h3 className="mt-3 mb-3 fw-bold">Information We Collect</h3>
                                                            <p> 
                                                            We may collect personal information from you when you do any of the following on our website:
                                                            </p>
                                                            <ul>
                                                                <li>•	Use a mobile device or web browser to access our content</li>
                                                                <li>•	Contact us via email, social media, or on any similar technologies</li>
                                                                <li>•	When you mention us on social media?</li>
                                                            </ul>

                                                            <br/>

                                                            <p>
                                                                We may collect, hold, use, and disclose information for the following purposes, and personal information will not be further processed in a manner that is incompatible with these purposes:
                                                            </p>

                                                            <ul>
                                                                <li>•	To provide our services to you</li>
                                                                <li>•	To provide you with information about our services</li>
                                                                <li>•	To provide you with information about our products and services</li>
                                                                <li>•	To enable you to access and use our website, associated applications, and associated social media platforms</li>
                                                                <li>•	For internal record keeping and administrative purposes</li>
                                                                <li>•	For security and fraud prevention, and to ensure that our sites and apps are safe, secure, and used in line with our terms of use</li>
                                                            </ul>

                                                            <p>
                                                                Please be aware that we may combine information we collect about you with general information or research data we receive from other trusted sources.
                                                            </p>
                                                    </div>
                                                </div>
                                            </div>
                                    </section>

                                    <section className="about_area section_gap">
                                            <div className="container">
                                                <div className="row justify-content-start align-items-center">
                                                    <div className="">
                                                    <h3 className="mt-3 mb-3 fw-bold">Security of Your Personal Information</h3>
                                                            <p> 
                                                                When we collect and process personal information, and while we retain this information, we will protect it within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification.
                                                            </p>
                                                            
                                                            <p>
                                                                Although we will do our best to protect the personal information you provide to us, we advise that no method of electronic transmission or storage is 100% secure, and no one can guarantee absolute data security. We will comply with laws applicable to us in respect of any data breach.
                                                            </p>

                                                            <p>
                                                                You are responsible for selecting any password and its overall security strength, ensuring the security of your information within the bounds of our services.
                                                            </p>
                                                    </div>
                                                </div>
                                            </div>
                                    </section>

                                    <section className="about_area section_gap">
                                            <div className="container">
                                                <div className="row justify-content-start align-items-center">
                                                    <div className="">
                                                    <h3 className="mt-3 mb-3 fw-bold">How Long We Keep Your Personal Information</h3>
                                                            <p> 
                                                                We keep your personal information only for as long as we need to. This time may depend on what we are using your information for, by this privacy policy. If your personal information is no longer required, we will delete it or make it anonymous by removing all details that identify you.
                                                            </p>
                                                            
                                                            <p>
                                                                However, if necessary, we may retain your personal information to comply with a legal, accounting, or reporting obligation or for archiving purposes in the public interest, scientific, historical research, or statistical purposes.
                                                            </p>
                                                    </div>
                                                </div>
                                            </div>
                                    </section>

                                    <section className="about_area section_gap">
                                            <div className="container">
                                                <div className="row justify-content-start align-items-center">
                                                    <div className="">
                                                    <h3 className="mt-3 mb-3 fw-bold">Your Rights and Controlling Your Personal Information</h3>
                                                            <p> 
                                                                You always retain the right to withhold personal information from us, with the understanding that your experience of our website may be affected. We will not discriminate against you for exercising any of your rights over your personal information. If you do provide us with personal information, you understand that we will collect, hold, use, and disclose it by this privacy policy. You retain the right to request details of any personal information we hold about you.
                                                            </p>
                                                            
                                                            <p>
                                                                If we receive personal information about you from a third party, we will protect it as set out in this privacy policy. If you are a third party providing personal information about somebody else, you represent and warrant that you have such person’s consent to provide the personal information to us.
                                                            </p>

                                                            <p>
                                                                If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time. We will provide you with the ability to unsubscribe from our email database or opt out of communications. Please be aware we may need to request specific information from you to help us confirm your identity.
                                                            </p>

                                                            <p>
                                                                If you believe that any information, we hold about you is inaccurate, out of date, incomplete, irrelevant, or misleading, please contact us using the details provided in this privacy policy. We will take reasonable steps to correct any information found to be inaccurate, incomplete, misleading, or out of date.
                                                            </p>

                                                            <p>
                                                                If you believe that we have breached a relevant data protection law and wish to make a complaint, please contact us using the details below and provide us with full details of the alleged breach. We will promptly investigate your complaint and respond to you, in writing, setting out the outcome of our investigation and the steps we will take to deal with your complaint. You also have the right to contact a regulatory body or data protection authority about your complaint.
                                                            </p>
                                                    </div>
                                                </div>
                                            </div>
                                    </section>

                                    <section className="about_area section_gap">
                                            <div className="container">
                                                <div className="row justify-content-start align-items-center">
                                                    <div className="">
                                                    <h3 className="mt-3 mb-3 fw-bold">Restrictions</h3>
                                                            <p> 
                                                                You always retain the right to withhold personal information from us, with the understanding that your experience of our website may be affected. We will not discriminate against you for exercising any of your rights over your personal information. If you do provide us with personal information, you understand that we will collect, hold, use, and disclose it by this privacy policy. You retain the right to request details of any personal information we hold about you.
                                                            </p>
                                                            
                                                            <p>
                                                                If we receive personal information about you from a third party, we will protect it as set out in this privacy policy. If you are a third party providing personal information about somebody else, you represent and warrant that you have such person’s consent to provide the personal information to us.
                                                            </p>

                                                            <p>
                                                                If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time. We will provide you with the ability to unsubscribe from our email database or opt out of communications. Please be aware we may need to request specific information from you to help us confirm your identity.
                                                            </p>

                                                            <p>
                                                                If you believe that any information, we hold about you is inaccurate, out of date, incomplete, irrelevant, or misleading, please contact us using the details provided in this privacy policy. We will take reasonable steps to correct any information found to be inaccurate, incomplete, misleading, or out of date.
                                                            </p>

                                                            <p>
                                                                If you believe that we have breached a relevant data protection law and wish to make a complaint, please contact us using the details below and provide us with full details of the alleged breach. We will promptly investigate your complaint and respond to you, in writing, setting out the outcome of our investigation and the steps we will take to deal with your complaint. You also have the right to contact a regulatory body or data protection authority about your complaint.
                                                            </p>
                                                    </div>
                                                </div>
                                            </div>
                                    </section>

                                    <section className="about_area section_gap">
                                            <div className="container">
                                                <div className="row justify-content-start align-items-center">
                                                    <div className="">
                                                    <h3 className="mt-3 mb-3 fw-bold">Contact Us</h3>
                                                            <p> 
                                                                For any questions or concerns regarding your privacy, you may contact us using the following details:
                                                            </p>

                                                            <ul className="list-unstyled ">
                                                                <li className="mb-2  justify-content-center align-items-center"><FaIcons.FaHome/> Lopez, Quezon </li>
                                                                <li className="mb-2  justify-content-center align-items-center"><FaIcons.FaGoogle/> technojet.devofficial</li>
                                                                <li className="mb-2  justify-content-center align-items-center"><FaIcons.FaPhoneAlt/> +63 956 528 0371</li>
                                                            </ul>
                                                            
                                                    </div>
                                                </div>
                                            </div>
                                    </section>
            </section>

            <footer className="sticky-footer">
        <div>
        <FooterStyle className=" pt-10 text-white footer ">
        <div className="container d-flex align-items-center ">
          <div className="footer__col1">
            <img  src="../Assets/logo.svg" className="w-50 " alt="logo" />
            <ul className="list-unstyled">
            <li  className="mt-3 text-light">
            Learn and Develop your skills.
            </li>
            </ul>
            <div className="footer__col3">
          <h6 className="mt-2 text-white">Follow Us on</h6>
              <ul className="list-unstyled">
                <li className="mb-2 text-light"><FaIcons.FaFacebook/> <a href="https://www.facebook.com/theConquErrorph" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"> theConquErrorph</a> </li>
                <li className="mb-2 text-light"><FaIcons.FaYoutube/> <a href="https://www.youtube.com/channel/UCojmF97JXog4ITgDjNtfnqw" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"> theConquError</a></li>
                <li className="mb-2 text-light"><FaIcons.FaDiscord/> <a href="https://discord.gg/CBHw9cAJYS" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"> ConquError</a></li>
              </ul>
          </div>
          </div>
          <div className="footer__col2 ">
              <ul className="list-unstyled fw-bold ">
              <li><h4 className="text-white align-center mt-4 mb-3">Developed by</h4></li>
                <div className="rotate">
                <li className="d-flex justify-content-center">
                  <img className="inline-block align-center h-20 image-center" src="../assets/TJDev.png" alt="logo"/></li>
                </div>
                <p className="d-flex justify-content-center text-light">Technojet.Dev</p>  
              </ul>
          </div>
          <div className="footer__col3 ">
              <ul className="list-unstyled ">
              <h4  className="d-flex justify-content-center text-white">Contacts</h4>
                <li className="mb-2  justify-content-center align-items-center text-light"><FaIcons.FaHome/> Lopez, Quezon </li>
                <li className="mb-2  justify-content-center align-items-center text-light"><FaIcons.FaGoogle/> technojet.devofficial</li>
                <li className="mb-2  justify-content-center align-items-center text-light"><FaIcons.FaPhoneAlt/> +63 956 528 0371</li>
              </ul>
          </div>
          <div className="footer__col4">
              <ul className="list-unstyled">
              <h4  className="d-flex justify-content-center text-white">Built With</h4>
                <li className="mb-2 text-light"><FaIcons.FaReact/> ReactJS</li>
                <li className="mb-2 text-light"><FaIcons.FaGripfire/> Firebase</li>
                <li className="mb-2 text-light"><FaIcons.FaBootstrap/> Bootstrap 5</li>
              </ul>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            
            <p className="col-sm d-flex justify-content-center text-center text-light">
              &copy;{new Date().getFullYear()} Technojet.Dev | Design by PSIX | Beta v1.19.121521
            </p>
          
          </div>
        </div>
      </FooterStyle>
        </div>
        </footer>
        </>
    )
}

export default PrivacyPolicy
