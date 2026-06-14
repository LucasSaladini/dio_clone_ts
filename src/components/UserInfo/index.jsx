import { Container, NameText, Progress, UserPicture } from "./styles"

const UserInfo = ({ name, image, percent }) => {
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