import styled from "styled-components";

export const Header = styled.header`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  margin-bottom: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 12px;
  }
  p {
    color: #718096;
    font-size: 1.1rem;
    letter-spacing: -1px;
    font-weight: 400;
  }
`;
