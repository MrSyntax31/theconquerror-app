import React from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import 'csshake';
import './Footer.css';

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

export default function Footer() {



  return (
    <FooterStyle className=" pt-10 text-white footer ">
      <div className="container d-flex align-items-center ">
        <div className="footer__col1">
          <img  src="../Assets/logo.svg" className="w-50 " alt="logo" />
          <ul className="list-unstyled">
          <li  className="mt-3">
          Learn and Develop your skills for free by Technojet.Dev
          </li>
          </ul>
          <div className="footer__col3">
        <h6 className="mt-2 text-white">Follow Us on</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><FaIcons.FaFacebook/> <a href="https://www.facebook.com/theConquErrorph" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"> theConquErrorph</a> </li>
              <li className="mb-2"><FaIcons.FaInstagram/> theconquerrorph</li>
              <li className="mb-2"><FaIcons.FaYoutube/> <a href="https://www.youtube.com/channel/UCojmF97JXog4ITgDjNtfnqw" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"> theConquError</a></li>
              <li className="mb-2"><FaIcons.FaDiscord/> <a href="https://discord.gg/CBHw9cAJYS" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"> ConquError</a></li>
            </ul>
        </div>
        </div>
        <div className="footer__col2 ">
            <ul className="list-unstyled fw-bold ">
            <li><h4 className="text-white align-center mt-4">Developed by</h4></li>
              <div className="rotate">
              <li className="d-flex justify-content-center">
                <img className="inline-block align-center h-20 image-center" src="../assets/TJDev.png" alt="logo"/></li>
              </div>
              <li className="d-flex justify-content-center">Technojet.Dev</li>  
            </ul>
        </div>
        <div className="footer__col3 ">
            <ul className="list-unstyled ">
            <h4  className="d-flex justify-content-center text-white">Contacts</h4>
              <li className="mb-2  justify-content-center align-items-center"><FaIcons.FaHome/> Lopez, Quezon </li>
              <li className="mb-2  justify-content-center align-items-center"><FaIcons.FaGoogle/> technojet.devofficial</li>
              <li className="mb-2  justify-content-center align-items-center"><FaIcons.FaPhoneAlt/> +63 956 528 0371</li>
            </ul>
        </div>
        <div className="footer__col4">
            <ul className="list-unstyled">
             <h4  className="d-flex justify-content-center text-white">Built With</h4>
              <li className="mb-2"><FaIcons.FaReact/> ReactJS</li>
              <li className="mb-2"><FaIcons.FaGripfire/> Firebase</li>
              <li className="mb-2"><FaIcons.FaBootstrap/> Bootstrap 5</li>
            </ul>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          
          <p className="col-sm d-flex justify-content-center">
            &copy;{new Date().getFullYear()} Technojet.Dev | Design by <strong> PSIX</strong> 
          </p>
         
        </div>
      </div>
    </FooterStyle>
  );
}