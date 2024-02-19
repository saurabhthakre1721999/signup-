import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import Createpost from "./Atoms/createpost";
const Home = () => {
  const post = useNavigate();
  const [logInUser, setlogInUser] = useState();
  const [textContent, setTextContent] = useState("");
  const [imageContent, setImageContent] = useState("");
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  //------------------------------image ref------------------------------------------------------------------

  const onImageChange = (e) => {
    if (e.target.value.length > 0) {
      setImageContent(e.target.files[0]);
      console.log(imageContent);
    }
  };

  console.log("local", imageContent);
  //-----------------------
  const OnInputChange = (e) => {
    setTextContent((pre) => {
      return e.target.value;
    });
    console.log(textContent);
  };
  console.log("image", imageContent);
  useEffect(() => {
    const userDetail = localStorage.getItem("loguser");
    if (userDetail && userDetail.length) {
      const user = JSON.parse(userDetail);
      setlogInUser(user);
      console.log(user);
    } else {
      alert();
    }
  }, []);
  const onButtonClick = (e) => {
    setIsCreatingPost((prev) => !prev);
  };
  console.log(logInUser);
  return (
    <>
      {logInUser ? (
        <div>
          {logInUser.map((us) => {
            return (
              <div>
                <div> {us.name}</div>
                <div>
                  <button onClick={onButtonClick}> Start post </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
      {isCreatingPost && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {logInUser.map((us) => {
            return (
              <Createpost
                key={us.email}
                textContent={textContent}
                us={us}
                imageContent={imageContent}
                onImageChange={onImageChange}
                OnInputChange={OnInputChange}
              />
            );
          })}
        </div>
      )}
    </>
  );
};
export default Home;
