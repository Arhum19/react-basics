import React, { useState } from "react";

function App() {
  const [inname, insetName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [comments, setComments] = useState("");

  // store submitted data
  const [submittedData, setSubmittedData] = useState(null);

  let handleSubmit = (e) => {
    e.preventDefault();

    // validate terms
    if (!termsAccepted) {
      alert("You must accept the terms and conditions before submitting.");
      return;
    }

    // store all form values
    setSubmittedData({
      name: inname,
      email,
      password,
      gender,
      termsAccepted,
      comments,
    });

    // optional: clear inputs after submit
    insetName("");
    setEmail("");
    setPassword("");
    setGender("");
    setTermsAccepted(false);
    setComments("");
  };

  return (
    <div>
      <h1>Form Demo:</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={inname}
            onChange={(e) => insetName(e.target.value)}
            required
          />
        </div>
        <br />

        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <br />

        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <br />

        <div>
          <label>Gender: </label>
          <input
            type="radio"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          Male
          <input
            type="radio"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          Female
        </div>
        <br />

        <div>
          <label>Terms and conditions: </label>
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />{" "}
          Accept
        </div>
        <br />

        <div>
          <label>Comments: </label>
          <input
            type="text"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </div>
        <br />

        <button type="submit">Submit Form</button>
      </form>

      {/* Show submitted data */}
      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h2>Submitted Data:</h2>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Password:</strong> {submittedData.password}</p>
          <p><strong>Gender:</strong> {submittedData.gender}</p>
          <p>
            <strong>Terms Accepted:</strong>{" "}
            {submittedData.termsAccepted ? "Yes" : "No"}
          </p>
          <p><strong>Comments:</strong> {submittedData.comments}</p>
        </div>
      )}
    </div>
  );
}

export default App;
