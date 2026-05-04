import React, { useState } from "react";

export default function PrivateClientIntake() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/xojreojj", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div style={{ textAlign: "center", padding: "100px", color: "white" }}>
        <h1>Request Received</h1>
        <p>We’ll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <div style={{ background: "#050505", color: "#f4eee3", minHeight: "100vh", padding: "80px 20px", textAlign: "center" }}>
      <h1 style={{ marginBottom: "20px" }}>Private Client Intake</h1>

      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "600px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <input name="name" placeholder="Full Name" required style={input} />
        <input name="email" type="email" placeholder="Email" required style={input} />
        <input name="phone" placeholder="Phone Number" style={input} />
        <input name="location" placeholder="Property Location" style={input} />

        <textarea
          name="message"
          placeholder="Tell us about your needs"
          rows="5"
          required
          style={input}
        />

        <button type="submit" style={button}>
          {status === "loading" ? "Submitting..." : "Submit Request"}
        </button>

        {status === "error" && (
          <p style={{ color: "#C6A46C" }}>Something went wrong. Try again.</p>
        )}
      </form>
    </div>
  );
}

const input = {
  padding: "14px",
  background: "rgba(255,255,255,0.02)",
  border: "1px solid rgba(198,164,108,0.3)",
  color: "#fff",
};

const button = {
  padding: "16px",
  background: "#C6A46C",
  color: "#111",
  border: "none",
  cursor: "pointer",
};
