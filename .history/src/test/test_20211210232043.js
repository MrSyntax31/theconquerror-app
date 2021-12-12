import React from 'react'

export default function Test() {
    return (
        <div className="ediwow">
              <form>
              <label for="fname">First name:</label>
              <input type="text" id="fname" name="fname" pattern="[a-zA-Z]*" required />
              <label for="lname">Last name:</label>
              <input type="text" id="lname" name="lname" pattern="[a-zA-Z]*" required />
              <input type="submit" value="Submit"/>
              </form>
        </div>
    )
}
