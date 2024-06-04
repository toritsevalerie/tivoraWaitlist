import { useState } from "react";
import { ref, push } from "firebase/database";
import { database } from "./firebaseConfig.js";

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
      <div>
        <h1>Eco-friendly packaging & branding solutions made simple!</h1>
        <p>
          Design, customize & order unique packaging & branding solutions that
          align with your brand’s identity — delivered to your doorstep.
        </p>
        <div>
          <button onClick={handleWaitlistClick}>
            <div>Join Waitlist</div>
            <img src="" alt="" />
          </button>
          {isFormVisible && (
            <form onSubmit={handleSubmit} method="">
              <input
                autoComplete="off"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                autoComplete="off"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && <p style={{ color: "red" }}>{error}</p>}
              <div>
                <button type="submit">Done</button>
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
