import { Controller } from "react-hook-form";
import { IconContainer, ErrorText, InputContainer, InputText } from "./styles";
import type { IInput } from "./types";

const Input = ({leftIcon, name, control, errorMessage, ...rest}: IInput) => {
  return (
    <>
      <InputContainer>
          {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
          <Controller
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field }) => <InputText {...field}{...rest} /> }
            />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>

  )
}

export { Input };