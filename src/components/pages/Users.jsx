import styled from "styled-components"
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
const users = [...Array(10).keys()].map(((val) => {
    return {
        id: val,
        name: `じゃけえ${val}`,
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=662&q=80",
        email: "12345@example.com",
        tell: "000-000-0000",
        company: {
            name: "テスト株式会社"
        },
        website: "https://google.com"
    };
}));
export const Users = () => {
    return (
        <SContainer>
            <h2>ユーザ一覧です</h2>
            <SearchInput />
            <SUserArea>
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </SUserArea>
        </SContainer>
    );
};
const SContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;
const SUserArea = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr)) ;
    grid-gap: 20px;

`