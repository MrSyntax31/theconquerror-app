import React, {  useState } from 'react'
import {Form, Button, Col , Row, InputGroup} from 'react-bootstrap'

export default  function Test() {

  const [validated, setValidated] = useState(false);

  const [email, setEmail] = useState();
  const [password, setPass] = useState();
  const [password2, setPass2] = useState();
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [bday, setBday] = useState();
  const [gender, setGender] = useState();
  const [occu, setOccu] = useState();
  const [insti, setInsti] = useState();
  const [address, setAddress] = useState();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

   return (
     
        
<>
   s
  </>
   )
}

 

