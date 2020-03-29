import React, { useState } from "react";
import "./index.css";
import Map from '../Location/location'
function Signup(props) {


  return (
    <div class="ui middle aligned center aligned grid">
      <div class="column">
        <h2 class="ui image header">
          <div class="content">Sign up an account</div>
        </h2>
        <form
          action="https://s.codepen.io/voltron2112/debug/PqrEPM?"
          method="get"
          class="ui large form"
        >
          <div class="ui stacked secondary  segment">
            <div class="field">
              <div class="ui input">
                <input type="text" placeholder="Email"></input>
              </div>
            </div>
            <div class="field">
              <div class="ui input">
                <input type="text" placeholder="Password"></input>
              </div>
            </div>
            <div class="field">
              <div class="ui input">
                <input type="text" placeholder="Confirm Password"></input>
              </div>
            </div>
            <div class="field">
              <select class="ui dropdown">
                <option value="">Gender</option>
                <option value="0">Male</option>
                <option value="1">Female</option>
                <option value="2">Rather not specify</option>
              </select>
            </div>

            <div class="ui fluid large submit red button">Register</div>

          </div>

          <div class="ui error message"></div>
        </form>
      </div>
    </div>
  );
}



export default Signup;
