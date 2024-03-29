import * as React from "react";
import { useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";

function Qr() {
  const [img, setImg] = useState(null);
  const webcamRef = useRef(null);

  const videoConstraints = {
    width: { min: 480 },
    height: { min: 720 },
    // facingMode: { exact: "environment" },
  };

  const capture = useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    const blob = await fetch(imageSrc).then((res) => res.blob());
    const formData = new FormData();
    formData.append("image", blob, "image.jpeg");
    console.log("aaa blob", blob.size);
    console.log("aaa f", formData);

    alert("size in MB: " + blob.size/1000000);
    setImg(imageSrc);
  }, [webcamRef]);

  return (
    <div style={{ textAlign: "center" }}>
      {img === null ? (
        <>
          <Webcam
            imageSmoothing={true}
            audio={false}
            // mirrored={true}
            height={"70%"}
            width={"90%"}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            screenshotQuality={1}
            // ImageSmoothingQuality = "high" | "low" | "medium";
            ImageSmoothingQuality="high"
            resizeQuality="high"
            videoConstraints={videoConstraints}
          />
          <br />
          <button onClick={capture} style={{ marginTop: 20 }}>
            Capture photo
          </button>
        </>
      ) : (
        <>
          <img src={img} alt="screenshot" />
          <br />
          <button onClick={() => setImg(null)} style={{ marginTop: 20 }}>
            Retake
          </button>
        </>
      )}
    </div>
  );
}

export default Qr;
