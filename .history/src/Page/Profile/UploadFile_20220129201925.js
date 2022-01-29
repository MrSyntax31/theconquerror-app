import React from 'react';


import { Helmet } from "react-helmet";

//import { Link } from "react-router-dom"

import './upload.css'

const UploadFile = () => {
  return <div className="backGround">
      {/* Helmet */}
            <div>
              <Helmet>
                <title>ConquError | Upload File </title>
                <meta name="description" content="Welcome to the ConquError Upload file page." />
              </Helmet>
            </div> 

            <section class="multi_step_form">  
  <form id="msform"> 
    <!-- Tittle -->
    <div class="tittle">
      <h2>Verification Process</h2>
      <p>In order to use this service, you have to complete this verification process</p>
    </div>
    <!-- progressbar -->
    <ul id="progressbar">
      <li class="active">Verify Phone</li>  
      <li>Upload Documents</li> 
      <li>Security Questions</li>
    </ul>
    <!-- fieldsets -->
    <fieldset>
      <h3>Setup your phone</h3>
      <h6>We will send you a SMS. Input the code to verify.</h6> 
      <div class="form-row"> 
        <div class="form-group col-md-6">  
          <input type="tel" id="phone" class="form-control" placeholder="+880"> 
        </div>  
        <div class="form-group col-md-6"> 
          <input type="text" class="form-control" placeholder="1123456789">
        </div> 
      </div> 
      <div class="done_text"> 
        <a href="#" class="don_icon"><i class="ion-android-done"></i></a> 
        <h6>A secret code is sent to your phone. <br/>Please enter it here.</h6> 
      </div>  
      <div class="code_group"> 
        <input type="text" class="form-control" placeholder="0"/>
        <input type="text" class="form-control" placeholder="0"/>
        <input type="text" class="form-control" placeholder="0"/>
        <input type="text" class="form-control" placeholder="0"/>
      </div>  
      <button type="button" class="action-button previous_button">Back</button>
      <button type="button" class="next action-button">Continue</button>  
    </fieldset>
    <fieldset>
      <h3>Verify Your Identity</h3>
      <h6>Please upload any of these documents to verify your Identity.</h6>
      <div class="passport">
        <h4>Govt. ID card <br>PassPort <br>Driving License.</h4> 
        <a href="#" class="don_icon"><i class="ion-android-done"></i></a> 
      </div>
      <div class="input-group"> 
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="upload"/>
          <label class="custom-file-label" for="upload"><i class="ion-android-cloud-outline"></i>Choose file</label>
        </div>
      </div>
      <ul class="file_added">
        <li>File Added:</li>
        <li><a href="#"><i class="ion-paperclip"></i>national_id_card.png</a></li>
        <li><a href="#"><i class="ion-paperclip"></i>national_id_card_back.png</a></li>
      </ul>
      <button type="button" class="action-button previous previous_button">Back</button>
      <button type="button" class="next action-button">Continue</button>  
    </fieldset>  
    <fieldset>
      <h3>Create Security Questions</h3>
      <h6>Please update your account with security questions</h6> 
      <div class="form-group"> 
        <select class="product_select">
          <option data-display="1. Choose A Question">1. Choose A Question</option> 
          <option>2. Choose A Question</option>
          <option>3. Choose A Question</option> 
        </select>
      </div> 
      <div class="form-group fg_2"> 
        <input type="text" class="form-control" placeholder="Anwser here:"/>
      </div> 
      <div class="form-group"> 
        <select class="product_select">
          <option data-display="1. Choose A Question">1. Choose A Question</option> 
          <option>2. Choose A Question</option>
          <option>3. Choose A Question</option> 
        </select>
      </div> 
      <div class="form-group fg_3"> 
        <input type="text" class="form-control" placeholder="Anwser here:"/>
      </div> 
      <button type="button" class="action-button previous previous_button">Back</button> 
      <a href="#" class="action-button">Finish</a> 
    </fieldset>  
  </form>  
</section> 

            
  </div>;
};

export default UploadFile;
