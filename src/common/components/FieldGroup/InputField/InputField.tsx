import { forwardRef } from "react";
import classNames from "classnames/bind";
import styles from "./InputField.module.scss";

import { PrefixElement, ErrorMessage, Input, SuffixUnit } from "../parts/index";
import { ClassNameCSSProperties, InputFieldProps } from "../type";

const cn = classNames.bind(styles);

export default forwardRef<HTMLInputElement, InputFieldProps>(function InputField(
  {
    name,
    type = "text",
    size = "md",
    color = "white",
    isError = false,
    unit,
    prefix,
    value,
    onChange,
    border = "solid",
    errorMessage = "",
    className,
    ...rest
  },
  ref,
) {
  const combinedClassName = cn("default", size, color, border, { error: isError });
  const style: ClassNameCSSProperties = {
    "--width": className || "100vw",
  };

  return (
    <div className={cn("inputField", className)}>
      <div className={combinedClassName} style={style}>
        {prefix && <PrefixElement element={prefix} />}
        <Input
          name={name}
          type={type}
          size={size}
          color={color}
          value={value}
          onChange={onChange}
          ref={ref}
          {...rest}
        />
        {unit && <SuffixUnit unit={unit} />}
      </div>
      {isError && <ErrorMessage message={errorMessage} />}
    </div>
  );
});
