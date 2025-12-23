import styled from "styled-components";

export const AddLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  background-color: white;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 32px;
  h2 {
    font-size: 1.6rem;
    font-weight: 800;
    color: #2d3748;
  }
  button {
    background-color: #4a6fa5;
    padding: 14px 28px;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    color: white;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #354765ff;
    }
  }
`;
