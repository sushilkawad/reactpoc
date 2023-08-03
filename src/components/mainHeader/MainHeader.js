import React, { useContext, useState } from "react";
import { useRef, useCallback } from "react";
import Webcam from "react-webcam";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../../App";
import "./MainHeader.css";

const MainHeader = React.memo(() => {
  const { cart, handleSearch } = useContext(ShopContext);
  const [search, setSearch] = useState("");
  const totalItems = cart.reduce((a, b) => a + b.quantity, 0);
  const { pathname } = useLocation();

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

    alert("size in MB: " + blob.size / 1000000);
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

  // return (
  // <header className="main-header d-flex justify-content-space-between">
  //     <Link to="/">Home1</Link>
  //     {pathname !== '/cart' && <div className="mr-10">
  //         <input type="text" onChange={(e) => { setSearch(e.target.value); handleSearch(e) }} id="search" value={search} placeholder="Search" />
  //         <Link to="/cart">
  //             <i className="fa fa-shopping-cart">
  //                 {totalItems > 0 && <span className="count">{totalItems}</span>}
  //             </i>
  //         </Link>
  //     </div>}
  // </header>
  // )
});

export default MainHeader;
