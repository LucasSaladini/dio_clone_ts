import { ButtonContainer } from "./styles";
import type { IButton } from "./types";

const Button = ({title, variant = "primary", onClick, ...rest}: IButton) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick} {...rest}>
        {title}
    </ButtonContainer>
  )
}

export { Button }