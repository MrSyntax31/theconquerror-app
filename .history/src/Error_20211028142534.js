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

            <h1>Hoi</h1>

            <div id="particles-js"></div>
                <div class="terminal-window">
                <header>
                    <div class="button green"></div>
                    <div class="button yellow"></div>
                    <div class="button red"></div>
                </header>
                <section class="terminal">
                    <div class="history"></div>
                    $&nbsp;<span class="prompt"></span>
                    <span class="typed-cursor"></span>
                    
                </section>
                </div>

            <div class="terminal-data mimik-run-output">
            <br/>Found 1 feature<br/>
            ----------------------------------------------<br/>
            Feature: Bottles  <span class="gray"># ./features/bottles.feature</span><br/><br/> 

            &nbsp;&nbsp;Scenario: A bottle falls from the wall<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">Given 100 green bottles are standing</span><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">when 1 green bottle accidentally falls</span><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">then there are 99 green bottles standing</span><br/>
            <br/>
                <span class="gray">&nbsp;---------- ----------- ------- -------- --------</span><br/>
            &nbsp;&nbsp;Features&nbsp;&nbsp;&nbsp;Scenarios&nbsp;&nbsp;&nbsp;Steps&nbsp;&nbsp;&nbsp;Passed&nbsp;&nbsp;&nbsp;Failed<br/>
                <span class="gray">&nbsp;---------- ----------- ------- -------- --------</span><br/>
            &nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="green">✓ 4</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0      <br/>
            <br/>
            &nbsp;&nbsp;Completed 1 feature in 0.01s<br/>
            <br/>
            </div>

<script>
    {
        particlesJS("particles-js", {
  particles: {
    number: {
      value: 155,
      density: {
        enable: true,
        value_area: 789.1476416322727
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.48927153781200905,
      random: false,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 83.91608391608392,
        size: 1,
        duration: 3,
        opacity: 1,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});

$(function () {
  var data = [
    {
      action: "type",
      strings: ["Accessing restricted files.."],
      output: "grabbing files..<br><br>",
      postDelay: 1000
    },
    {
      action: "type",
      strings: ["500 Internal Error"],
      output: '<span class="gray">Coded by cluzier +CodePen.io</><br>&nbsp;',
      postDelay: 1000
    },
    {
      action: "type",
      strings: [
        "These are not the error codes you're looking for.",
        "Please either report this error to an administrator or return back and forget you were here..."
      ],
      postDelay: 2000
    }
  ];
  runScripts(data, 0);
});

function runScripts(data, pos) {
  var prompt = $(".prompt"),
    script = data[pos];
  if (script.clear === true) {
    $(".history").html("");
  }
  switch (script.action) {
    case "type":
      // cleanup for next execution
      prompt.removeData();
      $(".typed-cursor").text("");
      prompt.typed({
        strings: script.strings,
        typeSpeed: 30,
        callback: function () {
          var history = $(".history").html();
          history = history ? [history] : [];
          history.push("$ " + prompt.text());
          if (script.output) {
            history.push(script.output);
            prompt.html("");
            $(".history").html(history.join("<br>"));
          }
          // scroll to bottom of screen
          $("section.terminal").scrollTop($("section.terminal").height());
          // Run next script
          pos++;
          if (pos < data.length) {
            setTimeout(function () {
              runScripts(data, pos);
            }, script.postDelay || 1000);
          }
        }
      });
      break;
    case "view":
      break;
  }
}

    }
</script>

</div>


        </>
    )
}

export default Error
