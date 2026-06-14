import { Container, NameText, Progress, UserPicture } from "./styles"
import type { IUserInfo } from "./types";

const UserInfo = ({ name, image, percent }: IUserInfo) => {
  return (
    <Container>
        <UserPicture src={image} />
        <div>
            <NameText>{name}</NameText>
            <Progress percentual={percent} />
        </div>
    </Container>
  )
}

export { UserInfo }