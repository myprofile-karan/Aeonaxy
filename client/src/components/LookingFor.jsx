import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import LookingSectionCard from "./LookingSectionCard";
import Logo from "../assets/logo.png"
import Card1 from "../assets/card1.png"
import Card2 from "../assets/card2.png"
import Card3 from "../assets/card3.png"

const LookingFor = () => {
  const {username} = useParams();
  const [disableBtn, setDisableBtn] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="w-full pb-10">
      <header className="py-8 px-3 flex gap-4">
        <div className="image w-[120px] md:w-[150px]">
          <img src={Logo} className="w-full object-cover" alt="" />
        </div>
        <Link
          to={`/create-profile/${username}`}
          className="flex items-center justify-center bg-gray-200 px-5 rounded-md text-xl"
        >
          &lt;
        </Link>
      </header>

      <section className="container flex flex-col items-center mx-auto w-[75%]">
        <div className="section-top flex flex-col items-center gap-4">
          <h1 className="text-3xl md:text-[2.6rem] font-extrabold text-center">
            What brings you on Dribbble?
          </h1>
          <p className="text-[1.1rem] text-gray-400 font-semibold mt-3 text-center">
            Select the options that best describe you. Dont't worry, you can
            explore other options later.
          </p>
        </div>

        <div className="section-card grid sm:grid-cols-2  lg:grid-cols-3 gap-6 py-20 md:py-24">
          <LookingSectionCard
            id="card1"
            img={Card1}
            title="I'm a designer looking to share my work"
            setDisableBtn={setDisableBtn}
          />
          <LookingSectionCard
            id="card2"
            img={Card2}
            title="I'm looking to hire a designer"
            setDisableBtn={setDisableBtn}
          />
          <LookingSectionCard
            id="card3"
            img={Card3}
            title="I'm looking for design inspiration"
            setDisableBtn={setDisableBtn}
          />
        </div>
        <h4 className="text-2xl font-bold mb-3 text-center">
          Anything else? You can select multiple
        </h4>
        <button
          disabled={disableBtn ? true : false}
          onClick={()=> navigate(`/user-profile/${username}`) }
          className={` ${
            disableBtn ? "bg-[#F8B8D0]" : "bg-pink-500"
          } w-[250px] mt-5 py-2  text-white rounded-md flex justify-center`}
        >
          Finish
        </button>
      </section>
    </div>
  );
};

export default LookingFor;
