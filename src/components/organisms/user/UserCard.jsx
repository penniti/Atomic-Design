import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";
export const UserCard = (props) => {
    const {user}=props;
    return (
        <Card>
            <UserIconWithName image={user.image} name={user.name}/>
            <SDl>
                <dt>メール</dt>
                <dd>{user.email}</dd>
                <dt>TEL</dt>
                <dd>{user.tell}</dd>
                <dt>会社名</dt>
                <dd>{user.company.name}</dd>
                <dt>Web</dt>
                <dd>
                    <a href={user.website}>{user.website}</a>
                </dd>
            </SDl>
        </Card>
    )
};
const SDl = styled.dl`
text-align: left;
dt{
    float: left;
}
dd{
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
}
`;