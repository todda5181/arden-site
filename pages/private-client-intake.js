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
      headers: {
        Accept: "application/json",
      },
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
      <>
        <style>{globalStyles}</style>

        <div className="page">
          <div className="success-box">
            <div className="success-kicker">Request Received</div>

            <h1 className="success-title">
              Thank You.
            </h1>

            <div className="divider" />

            <p className="success-copy">
              Your private intake request has been received.
              A member of the Arden team will contact you shortly.
            </p>

            <a href="/" className="back-link">
              Return Home →
            </a>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{globalStyles}</style>

      <
