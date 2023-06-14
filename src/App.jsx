import "./App.css";
import { puppyList } from "./data.js";
import { useState } from "react";
import "./index.css";
import "./style.css";
function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  //console.log("puppyList: ", puppyList);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  //console.log(featPupId);
  return (
    <>
      <h1>Puppies</h1>
      <div className="App">
        <div className="puppies">
          Select a puppy to learn more about them
          {puppies.map((puppy) => {
            return (
              <p
                className="puppy"
                onClick={() => {
                  setFeatPupId(puppy.id);
                }}
                key={puppy.id}
              >
                {puppy.name}
              </p>
            );
          })}
        </div>

        {featPupId && (
          <div className="puppyInfo">
            <h2>
              <u>More Info</u>
              <br></br>Puppy: {featuredPup.name}
            </h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email:{featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
