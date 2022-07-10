import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export default function NotFound() {
  return (
    <Container>
      <h2
        style={{
          fontWeight: 600,
          fontSize: "24px",
          color: "tomato",
        }}
      >
        Wrong Way to Approach
      </h2>
      <div>
        <Link to="/redux-practice/home">Back to Home &rarr;</Link>
      </div>
    </Container>
  );
}
