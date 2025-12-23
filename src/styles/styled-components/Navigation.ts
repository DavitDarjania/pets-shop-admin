import styled from "styled-components";

export const Navigation = styled.section`
  width: 100%;
  background-color: white;
  display: flex;
  padding: 8px;
  margin-bottom: 40px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  a {
    width: 25%;
    text-decoration: none;
    color: #718096;
    text-align: center;
    padding: 16px 24px;
    border-radius: 8px;
    transition: all 0.3s ease;
    &:hover {
      color: white;
      background-color: #4a6fa5;
    }
    &.active {
      color: white;
      background-color: #4a6fa5;
    }
  }
`;
