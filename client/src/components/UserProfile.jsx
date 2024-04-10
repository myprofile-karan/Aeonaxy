import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";

const UserProfile =  () => {
  const {username} = useParams()
  const [userData, setUserData] = useState()

  useEffect(()=> {
 async function fetchUserData() {
  try {
    const response =  await axios.get(`http://localhost:3001/api/user-profile/${username}`)
    console.log(response.data);
    setUserData(response.data)
  } catch (error) {
      console.log("ERROR: ", error);
  }
 } 
 fetchUserData();
  },[])

  return (
    <div className="w-full md:h-screen">
      <Header userData={userData} />

      <section className="w-full md:h-[500px] h-[450px] flex flex-col items-center justify-center text-center gap-3">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Please verify your email...
        </h1>
        <div className="email relative">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-[5rem] md:text-[7rem] text-[#BBBBBB]"
          />
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="absolute -top-2 -right-6 text-4xl text-pink-500 border-4 rounded-full border-white"
          />
        </div>
        <div className="w-[80%] sm:w-[60%] section-content flex flex-col items-center gap-3 text-md sm:text-lg font-semibold text-[#7E7D82]">
          <p>
            Please verify your eamil address. We've sent a confirmation email
            to.
          </p>
          <h4 className="font-bold text-black">{userData?.user?.email}</h4>
          <p>
            Click the confirmation link in that email to begin using Dribble.
          </p>
          <p className="text-center">
            Didn't recieve the email? Check your Spam folder , it may have been
            caught by a filter. If you still don't see it, you can{" "}
            <span className="text-pink-500 font-semibold">
              resend the confirmation email.
            </span>{" "}
          </p>
          <p>
            Wrong email address?{" "}
            <span className="text-pink-500">Change it.</span>{" "}
          </p>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
