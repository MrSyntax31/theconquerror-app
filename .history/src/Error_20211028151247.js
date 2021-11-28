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

            
<div className="bg-dark.bg-gradient"></div>
            <div id="particles-js"></div>
                <div className="terminal-window">
                <header>
                    <div className="button green"></div>
                    <div className="button yellow"></div>
                    <div className="button red"></div>
                </header>
                <section className="terminal">
                    <div class="history"></div>
                    <h1 className="fw-bold text-white text-center">ConquError</h1>
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
                    <span className="prompt">
                        
                    </span>
                    <span className="typed-cursor">|</span>
                    
                </section>
                </div>

            <div className="terminal-data mimik-run-output">
            <br/>Found 1 feature<br/>
            ----------------------------------------------<br/>
            Feature: Bottles  <span className="gray"># ./features/bottles.feature</span><br/><br/> 

            Scenario: A bottle falls from the wall<br/>
               <span className="green">✓</span> <span className="gray">Given 100 green bottles are standing</span><br/>
            <span className="green">✓</span> <span className="gray">when 1 green bottle accidentally falls</span><br/>
           <span className="green">✓</span> <span className="gray">then there are 99 green bottles standing</span><br/>
            <br/>
                <span className="gray">---------- ----------- ------- -------- --------</span><br/>
            FeaturesScenarios Steps Passed Failed<br/>
                <span className="gray">---------- ----------- ------- -------- --------</span><br/>
            4<span className="green">✓ 4</span>0      <br/>
            <br/>
           Completed 1 feature in 0.01s<br/>
            <br/>
            </div>
</div>
</div>

        </>
    )
}

export default Error
