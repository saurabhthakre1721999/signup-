import React, { useRef } from "react";

const Createpost = ({
  textContent,
  OnInputChange,
  imageContent,
  onImageChange,
}) => {
  return (
    <>
      <div
        style={{
          border: "1px solid black",
          position: "absolute",
          width: "800px",
          height: "500px",
          top: "17px",
          boxSizing: "border-box",
          margin: "10px",
        }}
      >
        <textarea
          name="textContent"
          id=""
          style={{
            width: "100%",
            height: "80%",
            resize: "none",
            position: "relative",
            boxSizing: "border-box",
          }}
          accept="image/*"
          cols="30"
          value={textContent}
          onChange={OnInputChange}
          maxLength={3000}
        ></textarea>

        <div>
          <input type="file" accept="image/*" onChange={onImageChange} />
        </div>
      </div>
    </>
  );
};
export default Createpost;
