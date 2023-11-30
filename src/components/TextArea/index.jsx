import React, { useState } from "react";

function TextArea() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <div style={{ marginTop: "10px" }}>
        <strong>Detected Items:</strong> {text}
      </div>
      <h2>Add Items (comma seperated)</h2>
      <textarea
        value={text}
        onChange={handleChange}
        style={{
          width: "300px",
          height: "150px",
          padding: "10px",
          borderRadius: "4px",
          resize: "none",
        }}
        placeholder="add items...."
      />
    </div>
  );
}

export default TextArea;
