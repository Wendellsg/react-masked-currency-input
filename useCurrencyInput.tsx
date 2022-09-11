import React, { useRef, useState } from "react";
import { currencyFormater } from "./utils/CurrencyFormater";
import  './styles.module.css'

interface CurrencyInputTypes {
  rawValue: number;
  maskedValue: string;
}

interface CurrencyInputPropsTypes {
    className?: string;
    styles?: React.CSSProperties
}

export function maskedCurrencyInput() {
  const [currencyInput, setCurrencyInput] = useState<CurrencyInputTypes>({
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
  const handleChange = (key: string) =>{
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
    setCurrencyInput({
      maskedValue: currencyFormater(Number(newValue) / 100),
      rawValue: Number(newValue),
    });
  }
  const CurrencyInput: React.FC<CurrencyInputPropsTypes> = ({className, styles}) => (
    <input
      className={className||'MaskedInput'}
      onKeyDown={(e) => handleChange(e.key)}
      ref={inputRef}
      value={currencyInput.maskedValue}
      onChange={e => null}
      style={styles||{}}
    />
  );
  
  return {
    rawValue: currencyInput.rawValue / 100,
    maskedInput:CurrencyInput,
  };
}
