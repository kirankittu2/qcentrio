"use client";

import { useRef } from "react";

export default function CustomUploadInput() {
  const customFilename = useRef(null);

  function updateFileName(e) {
    var fileName = e.target.files[0].name;
    customFilename.current.value = fileName;
  }

  return (
    <label
      data-option="up"
      htmlFor="fileInput"
      className="custom-file-input animate animate-hidden">
      <input type="file" id="fileInput" onChange={updateFileName} />
      <input
        ref={customFilename}
        type="text"
        placeholder="Resume / Portfolio Link"
        id="displayInput"
      />
    </label>
  );
}
