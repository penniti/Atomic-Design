import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = () => {
    return (
        <SHeader>
            <SLink to="/">HOME</SLink>
            <SLink to="/">USERS</SLink>
        </SHeader>
    )
}
const SHeader = styled.header`
    background-color: #11999e;
    color: #fff;
    text-align: center;
    padding: 8px 0;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
`
const SLink = styled(Link)`
    margin: 0 8px;
`