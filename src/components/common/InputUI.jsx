"use client";

import { useState } from "react";
import { Input } from "@nextui-org/input";
import { Eye, EyeOff } from "lucide-react";

const InputUI = ({
  name,
  label,
  placeholder,
  variant,
  color,
  size,
  startContent,
  endContent,
  // register,
  // required,
  // errors,
  className,
  placement,
  type,
  onChange
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <>
      <Input
        onChange={(e)=> onChange(e.target.value)}
        label={
          placement ? (
            <label className="font-bold text-white">{label ?? ""}</label>
          ) : (
            label ?? ""
          )
        }
        placeholder={placeholder ?? "Enter placeholder"}
        labelPlacement={placement}
        size={size ?? "md"}
        variant={variant ?? "faded"}
        color={color ?? "primary"}
        // color={errors?.[name] ? "danger" : color ? color : "primary"}
        startContent={startContent}
        endContent={
          type === "password" ? (
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeOff className="text-2xl pointer-events-none text-default-400" />
              ) : (
                <Eye className="text-2xl pointer-events-none text-default-400" />
              )}
            </button>
          ) : endContent ? (
            endContent
          ) : null
        }
        className={`w-full ${className ?? ""}`}
        radius="sm"
        // isInvalid={errors?.[name] ? true : false}
        // errorMessage={errors?.[name] && String(errors[name]?.message)}
        // {...register(name, {
        //   required: required === false ? false : "This field is required",
        // })}
      />
    </>
  );
};

export default InputUI;
