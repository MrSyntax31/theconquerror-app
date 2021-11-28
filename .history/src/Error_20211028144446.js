import React from 'react'
import { Helmet } from "react-helmet";
import './Assets/css/error.css'


const Error = () => {
    
    return (
        <>
        <div>

            <div>
                  <Helmet>
                      <title>ConquError | ERROR!</title>
                      <meta name="description" content="ConquError Login page" />
                  </Helmet>
              </div>

            

            <div id="particles-js"></div>
                <div className="terminal-window">
                <header>
                    <div className="button green"></div>
                    <div className="button yellow"></div>
                    <div className="button red"></div>
                </header>
                <section className="terminal">
                    <div class="history"></div>
                    <h1 className="fw-bold">ConquError</h1>
                    $&nbsp; Accessing restricted files..
                    <br/>
                    grabbing files..
                    <br/>
                    <br/>
                    $&nbsp; 404 Internal Error
                    <br/>
                    Please try again later...
                    <br/>
                    <br/>
                    $&nbsp; Please either report this error to an administrator or return 
                    <br/>
                    back and forget you were here...
                    <span class="prompt">
                        
                    </span>
                    <span class="typed-cursor">|</span>
                    
                </section>
                </div>

            <div class="terminal-data mimik-run-output">
            <br/>Found 1 feature<br/>
            ----------------------------------------------<br/>
            Feature: Bottles  <span class="gray"># ./features/bottles.feature</span><br/><br/> 

            Scenario: A bottle falls from the wall<br/>
               <span class="green">✓</span> <span class="gray">Given 100 green bottles are standing</span><br/>
            <span class="green">✓</span> <span class="gray">when 1 green bottle accidentally falls</span><br/>
           <span class="green">✓</span> <span class="gray">then there are 99 green bottles standing</span><br/>
            <br/>
                <span class="gray">---------- ----------- ------- -------- --------</span><br/>
            FeaturesScenarios Steps Passed Failed<br/>
                <span class="gray">---------- ----------- ------- -------- --------</span><br/>
            4<span class="green">✓ 4</span>0      <br/>
            <br/>
           Completed 1 feature in 0.01s<br/>
            <br/>
            </div>

</div>

        </>
    )
}

export default Error
