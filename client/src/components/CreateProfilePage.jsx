import toast from "react-hot-toast";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import uploadImg from "./helpers/uploadImg";

const CreateProfilePage = () => {
  const inputRef = useRef(null);
  const [location, setLocation] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [image, setImage] = useState("");
  const [disableBtn, setDisableBtn] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { username } = useParams();

  const handleCreate = async () => {
    const secure_url = await uploadImg();
    setImageURL(secure_url);

    try {
      setLoading(true);
      const response = await axios.put(
        `https://aeonaxy-c8zp.onrender.com/api/update-user/${username}`,
        {
          image: secure_url,
          location,
        }
      );
      console.log(response);
      toast.success("signup successful");
      navigate(`/looking-for/${username}`);
      setLoading(false);
    } catch (error) {
      console.log("ERROR: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    if (event.target.value != "") {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  };

  return (
    <div className="w-full">
      <header className="py-6 px-3">
        <div className="image w-[120px] md:w-[150px]">
          <img src="./assets/logo.png" className="w-full object-cover" alt="" />
        </div>
      </header>
      <section className="container w-[90%] md:w-[80%] lg:w-[55%] mx-auto px-5 py-5 md:py-10">
        <div className="section-head text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold py-3">
            Welcome! Let's create your profile
          </h1>
          <p className="text-gray-600">
            Let others get to know you better! You can do these later
          </p>
        </div>
        <div className="avatar-section flex flex-col md:flex-row items-center gap-10">
          <div className="flex flex-col items-center space-y-4 mt-10">
            <h2 className="text-2xl font-bold">Add an avatar</h2>

            <div className="app">
              <input
                type="file"
                ref={inputRef}
                onChange={handleImageChange}
                className="hidden app_uploadInput"
              />
            </div>

            <div className="image-avatar w-52 h-52 rounded-full overflow-hidden ">
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  className="w-full h-full object-cover"
                  alt=""
                />
              ) : (
                <img
                  src="./assets/avatar-alt.png"
                  className="w-full h-full object-cover"
                  alt=""
                />
              )}
            </div>
          </div>
          <div className="avatar-input flex flex-col items-center md:items-start">
            <button
              className="px-4 py-2 bg-transparent font-bold border-2 border-gray-200 rounded-md "
              onClick={handleImageClick}
            >
              Choose image
            </button>
            <p className="text-gray-400 font-bold mt-3">
              <span className="text-xl">&gt;</span> Or choose one of our
              defaults
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start space-y-4 mt-10">
          <h2 className="text-2xl font-bold">Add your location</h2>
          <input
            type="text"
            value={location}
            onChange={handleLocationChange}
            placeholder="Enter a location"
            className="px-4 py-2 mt-3 text-xl font-bold border-b-2 placeholder:text-center placeholder:md:text-left focus:outline-none  bg-transparent rounded-md w-full"
          />
          <button
            disabled={disableBtn ? true : false}
            onClick={handleCreate}
            className={` ${
              disableBtn ? "bg-[#F8B8D0]" : "bg-pink-500"
            } w-[250px] mt-5 py-2  text-white rounded-md flex justify-center`}
          >
            {loading ? "loading..." : "Next"}
          </button>
        </div>
      </section>
    </div>
  );
};

export default CreateProfilePage;
