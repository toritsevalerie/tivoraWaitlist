import { useState } from "react";
import { ref, push } from "firebase/database";
import { database } from "./firebaseConfig.js";
import "../Styles/Hero.scss";
import arrowIcon from "../assets/arrowicon.svg";

const Hero = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [isThankYouMessageVisible, setThankYouMessageVisible] = useState(false);

  const handleWaitlistClick = () => {
    setFormVisible(!isFormVisible);
    setThankYouMessageVisible(false);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevents refresh of page
    if (!name || !email) {
      setError("Both name and email are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Reset the error message if validation passes
    setError("");
    try {
      // Reference to your database
      const waitlistRef = ref(database, "waitlist");

      // Push the new waitlist entry
      await push(waitlistRef, {
        name,
        email,
      });

      setThankYouMessageVisible(!isThankYouMessageVisible);
      setFormVisible(!isFormVisible);

      // Clear form fields
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error adding document: ", error);
      setError("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div>
      <div className="heroContainer">
        <h1>
          Eco-friendly <br />
          packaging & branding <br />
          solutions made
          <br />
          simple!
        </h1>
        <p>
          Design, customize & order unique packaging & branding <br />
          solutions that align with your brand’s identity — delivered to your
          doorstep.
        </p>
        <div>
          <button onClick={handleWaitlistClick}>
            <div className="joinWaitlistContainer">
              <p>Join Waitlist</p>
              <img src={arrowIcon} alt="arrow icon" />
            </div>
          </button>
          {isFormVisible && (
            <form onSubmit={handleSubmit} method="">
              <div className="inputContainer">
                <input
                  className="nameField"
                  autoComplete="off"
                  type="text"
                  placeholder=" Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="emailField"
                  autoComplete="off"
                  type="text"
                  placeholder=" Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <div>
                <button className="submitButton" type="submit">Done</button>
              </div>
            </form>
          )}
          {isThankYouMessageVisible && (
            <div>
              <p>Sent! Thank You :)</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Hero;
