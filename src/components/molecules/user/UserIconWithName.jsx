import styled from "styled-components";
export const UserIconWithName = (props) => {
    const { image, name } = props;
    return (
        <SContainer>
            <SImg width={160} height={160} src={image} alt={name} />
            <p>{name}</p>
        </SContainer>
    )
}
const SContainer=styled.div`
    text-align: center;
`;
const SImg=styled.img`
    border-radius: 50%;
    object-fit: cover;
`;
const SName=styled.p`
    font-size: 18px;
    font-family: bold;
    margin: 0;
`