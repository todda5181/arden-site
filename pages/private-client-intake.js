import React, { useState } from "react";

const globalStyles = `
  body {
    margin: 0;
    background: #050505;
    color: #f4eee3;
    font-family: Georgia, "Times New Roman", serif;
  }

  .page {
    min-height: 100vh;
    padding: 60px 24px;
    background:
      radial-gradient(circle at top left, rgba(198,164,108,0.12), transparent 32%),
      linear-gradient(180deg, #050505 0%, #090909 100%);
  }

  .wrap {
    max-width: 760px;
    margin: 0 auto;
    border: 1px solid rgba(198,164,108,0.22);
    background: rgba(255,255,255,0.02);
    padding: 60px;
    box-shadow: 0 24px 80px rgba(0,0,0,0.4);
 
