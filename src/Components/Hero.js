import { useState } from "react";

const Hero = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [isThankYouMessageVisible, setThankYouMessageVisible] = useState(false);

  const handleWaitlistClick = () => {
    setFormVisible(!isFormVisible);
    setThankYouMessageVisible(false);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents refresh of page
    setThankYouMessageVisible(!isThankYouMessageVisible);
    setFormVisible(!isFormVisible);
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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
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
