import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

function Dropzone(props) {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles);
    },
  });

  const fileList = files.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <div
        {...getRootProps({
          className: "dropzone",
          style: {
            border: "2px dashed #757575",
            borderRadius: "4px",
            padding: "20px",
            cursor: "pointer",
          },
        })}
      >
        <input {...getInputProps()} />
        <p style={{ fontSize: "16px" }}>Drag & Drop your photos here</p>
        <button
          type="button"
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 15px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={open}
        >
          Upload File
        </button>
      </div>
      {/* <aside>
        <h4 style={{ marginTop: "20px" }}>Files</h4>
        <ul style={{ listStyle: "none", padding: 0 }}>{fileList}</ul>
      </aside> */}
    </div>
  );
}

export default Dropzone;
