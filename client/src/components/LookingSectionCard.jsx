import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const LookingSectionCard = ({ id, img, title, setDisableBtn }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [paraDisable, setParaDisable] = useState(true);

  const refElem = useRef();
  const handleCard = () => {
    setDisableBtn((prev)=> !prev)
    setParaDisable(!paraDisable);
    if (selectedCard === id) {
      setSelectedCard(null);
    } else {
      setSelectedCard(id);
    }
  };

  return (
    <div
      ref={refElem}
      id={id}
      onClick={handleCard}
      className={`relative border-2 flex flex-col justify-end items-center gap-4 border-gray-200 rounded-lg p-4 cursor-pointer ${
        selectedCard === id ? "border-pink-500 h-[300px] " : null
      } `}
    >
      <div className={`${!paraDisable ? "absolute top-[-100px]" : "relative"}`}>
        <img src={img} className="object-cover" alt="" />
      </div>
      <div className="title">
        <h1 className="font-bold text-xl text-center">{title}</h1>
        <p
          className={` ${
            paraDisable ? "hidden" : "block"
          } mt-3 text-center text-sm text-gray-400`}
        >
          With over 7 million shots from a vast community of designers. Dribbble
          is the leading source for designer inspiration.
        </p>
      </div>
      {paraDisable ? (
        <div className="circle w-8 h-8 mt-4 border-2 border-gray-300 rounded-full"></div>
      ) : (
        <FontAwesomeIcon
          icon={faCircleCheck}
          className="w-8 h-8 mt-4 border-2 text-pink-500"
        />
      )}
    </div>
  );
};

export default LookingSectionCard;
