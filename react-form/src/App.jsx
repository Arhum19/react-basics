import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    termsAccepted: false,
    comments: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  // Generic input handler
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.termsAccepted) {
      alert("You must accept the terms and conditions before submitting.");
      return;
    }

    setSubmittedData(form);

    // optional: clear inputs after submit
    setForm({
      name: "",
      email: "",
      password: "",
      gender: "",
      termsAccepted: false,
      comments: "",
    });
  };

  return (
    <div>
      <h1>Form Demo:</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <br />

        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <br />

        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <br />

        <div>
          <label>Gender: </label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={form.gender === "male"}
            onChange={handleChange}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            checked={form.gender === "female"}
            onChange={handleChange}
          />{" "}
          Female
        </div>
        <br />

        <div>
          <label>Terms and conditions: </label>
          <input
            type="checkbox"
            name="termsAccepted"
            checked={form.termsAccepted}
            onChange={handleChange}
          />{" "}
          Accept
        </div>
        <br />

        <div>
          <label>Comments: </label>
          <input
            type="text"
            name="comments"
            value={form.comments}
            onChange={handleChange}
          />
        </div>
        <br />

        <button type="submit">Submit Form</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h2>Submitted Data:</h2>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Password:</strong> {submittedData.password}
          </p>
          <p>
            <strong>Gender:</strong> {submittedData.gender}
          </p>
          <p>
            <strong>Terms Accepted:</strong>{" "}
            {submittedData.termsAccepted ? "Yes" : "No"}
          </p>
          <p>
            <strong>Comments:</strong> {submittedData.comments}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
