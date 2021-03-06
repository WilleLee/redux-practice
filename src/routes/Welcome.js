import { Link } from "react-router-dom";
import styled from "styled-components";

const WelcomeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Welcome() {
  return (
    <WelcomeBox>
      <h2>
        <Link to="/redux-practice/home">Go Browse &rarr;</Link>
      </h2>
    </WelcomeBox>
  );
}
