import React, { useRef, useState } from "react";
import { currencyFormater } from "./utils/CurrencyFormater";
import  './styles.css'


export function MaskedCurrencyInput() {
  const [currencyInput, setCurrencyInput] = useState({
    rawValue: 0,
    maskedValue: currencyFormater(0),
  });

  const inputRef = useRef(null);
  const accetablekeys = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "Backspace",
  ];
  const handleChange = (key) =>{
    if (!accetablekeys.includes(key)) return;

    let newValue = "";

    if (key === "Backspace") {
      newValue = currencyInput.rawValue.toString().slice(0, -1);
      setCurrencyInput({
        maskedValue: currencyFormater(Number(newValue) / 100),
        rawValue: Number(newValue),
      });
      return;
    }

    newValue = currencyInput.rawValue + key;
    if(newValue === Infinity || isNaN(newValue)){
      newValue = 0
    }

    setCurrencyInput({
      maskedValue: currencyFormater(Number(newValue) / 100),
      rawValue: Number(newValue),
    });
  }
  const CurrencyInput = ({ClassName, Styles}) => (
    <input
      className={ClassName||'MaskedInput'}
      onKeyDown={(e) => handleChange(e.key)}
      ref={inputRef}
      value={currencyInput.maskedValue}
      onChange={e => null}
      style={Styles||{}}
    />
  );
  
  return {
    rawValue: currencyInput.rawValue / 100,
    maskedInput: CurrencyInput
  };
}
