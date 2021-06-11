import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../CriterSmartphone.css";

//result
import { AlertSuccess } from "../result";

//assets
import Alegria from "../../../assets/vectores/CEL_BTN_ALEGRIA.svg";
import Disgusto from "../../../assets/vectores/CEL_BTN_DISGUSTO.svg";
import Enojo from "../../../assets/vectores/CEL_BTN_ENOJO.svg";
import Miedo from "../../../assets/vectores/CEL_BTN_MIEDO.svg";
import Tristeza from "../../../assets/vectores/CEL_BTN_TRISTEZA.svg";

import AlegriaSelect from "../../../assets/vectores/CEL_BTN_ALEGRIA_RESPUESTA.svg";
import DisgustoSelect from "../../../assets/vectores/CEL_BTN_DISGUSTO_RESPUESTA.svg";
import EnojoSelect from "../../../assets/vectores/CEL_BTN_TRISTEZA_RESPUESTA.svg";
import MiedoSelect from "../../../assets/vectores/CEL_BTN_MIEDO_RESPUESTA.svg";
import TristezaSelect from "../../../assets/vectores/CEL_BTN_TRISTEZA_RESPUESTA.svg";

import AlegriaNoSelect from "../../../assets/vectores/CEL_BTN_ALEGRIA_AZUL.svg";
import DisgustoNoSelect from "../../../assets/vectores/CEL_BTN_DISGUSTO_AZUL.svg";
import EnojoNoSelect from "../../../assets/vectores/CEL_BTN_ENOJO_AZUL.svg";
import MiedoNoSelect from "../../../assets/vectores/CEL_BTN_MIEDO_AZUL.svg";
import TristezaNoSelect from "../../../assets/vectores/CEL_BTN_TRISTEZA_AZUL.svg";

//actions
import { selectedOptionQuestion } from "../../../store/action/questionsAction";

//data
import DataJson from "../../../Data/index.json";

const SecondEsenario = ({ state: { selected }, action: { setSelected } }) => {
  const dispatch = useDispatch();
  const { respQuestion2, etapa, questionActive, subQuestion } = useSelector(
    (state) => state.question
  );

  const respSuccess =
    DataJson[etapa][questionActive][subQuestion]["options"]["correct"];
  const first =
    DataJson[etapa][questionActive][subQuestion]["options"]["first"];
  const second =
    DataJson[etapa][questionActive][subQuestion]["options"]["second"];
  const three =
    DataJson[etapa][questionActive][subQuestion]["options"]["three"];

  const optionSelected = (opt) => {
    setSelected(opt);
    dispatch(selectedOptionQuestion(opt, "respQuestion2"));
  };

  const filterImg = (titleImg) => {
    switch (titleImg) {
      case "Alegría:":
        return Alegria;
      case "Disgusto:":
        return Disgusto;
      case "Enojo:":
        return Enojo;
      case "Miedo:":
        return Miedo;
      case "Tristeza:":
        return Tristeza;
      default:
        return Alegria;
    }
  };

  const filterImgSelected = (titleImg) => {
    switch (titleImg) {
      case "Alegría:":
        return AlegriaSelect;

      case "Disgusto:":
        return DisgustoSelect;

      case "Enojo:":
        return EnojoSelect;
      case "Miedo:":
        return MiedoSelect;
      case "Tristeza:":
        return TristezaSelect;

      default:
        return AlegriaSelect;
    }
  };
  const filterImgAzul = (titleImg) => {
    switch (titleImg) {
      case "Alegría:":
        return AlegriaNoSelect;

      case "Disgusto:":
        return DisgustoNoSelect;

      case "Enojo:":
        return EnojoNoSelect;
      case "Miedo:":
        return MiedoNoSelect;
      case "Tristeza:":
        return TristezaNoSelect;

      default:
        return AlegriaNoSelect;
    }
  };

  return (
    <div className="second-container flex justify-between">
      <div className="flex flex-col items-center relative">
        <p className="title-emoji">{first.title}</p>
        <p className="body-emoji">{first.body}</p>
        {selected === "all" ? (
          <button onClick={() => optionSelected("first")}>
            <img src={filterImg(first.title)} className="img-icon" />
          </button>
        ) : selected === "first" ? (
          <>
            <img src={filterImgSelected(first.title)} className="img-icon" />
            {respQuestion2 === respSuccess && respSuccess === "first" ? (
              <AlertSuccess />
            ) : (
              ""
            )}
          </>
        ) : (
          <img src={filterImgAzul(first.title)} className="img-icon" />
        )}
      </div>
      <div className="flex flex-col items-center relative">
        <p className="title-emoji">{second.title}</p>
        <p className="body-emoji">{second.body}</p>
        {selected === "all" ? (
          <button onClick={() => optionSelected("second")}>
            <img src={filterImg(second.title)} className="img-icon" />
          </button>
        ) : selected === "second" ? (
          <>
            <img src={filterImgSelected(second.title)} className="img-icon" />
            {respQuestion2 === respSuccess && respSuccess === "second" ? (
              <AlertSuccess />
            ) : (
              ""
            )}
          </>
        ) : (
          <img src={filterImgAzul(second.title)} className="img-icon" />
        )}
      </div>
      <div className="flex flex-col items-center relative">
        <p className="title-emoji">{three.title}</p>
        <p className="body-emoji">{three.body}</p>
        {selected === "all" ? (
          <button onClick={() => optionSelected("three")}>
            <img src={filterImg(three.title)} className="img-icon" />
          </button>
        ) : selected === "three" ? (
          <>
            <img src={filterImgSelected(three.title)} className="img-icon" />
            {respQuestion2 === respSuccess && respSuccess === "three" ? (
              <AlertSuccess />
            ) : (
              ""
            )}
          </>
        ) : (
          <img src={filterImgAzul(three.title)} className="img-icon" />
        )}
      </div>
    </div>
  );
};

export default SecondEsenario;
