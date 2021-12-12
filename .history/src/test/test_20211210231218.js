import React from 'react'

export default function asd() {
    return (
        <div>
             <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" pattern="[A-Za-z]" required value="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" pattern="[A-Za-z]" required value="lname"><br><br>
  <input type="submit" value="Submit">

        </div>
    )
}
