import React, {useEffect,useState} from 'react';
import { Helmet } from "react-helmet";
import {  Modal, Button } from 'react-bootstrap';
import { onSnapshot,collection,getFirestore, doc, setDoc, query, orderBy, limit  } from 'firebase/firestore';
import {} from '../../firebase/firebase'
import {  useHistory} from "react-router-dom"
import {Container,  Row,Col, Form, FormControl, Card} from 'react-bootstrap'
import { getAuth } from 'firebase/auth'
import * as GoIcons from 'react-icons/go';
import './Forum.css';
import Navbar from '../../Components/Navbar/Navbar'
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import axios from 'axios'





export default Forum;

