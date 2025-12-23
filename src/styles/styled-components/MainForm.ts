import styled from "styled-components";

export const MainForm = styled.form`
  background-color: white;
  max-width: 650px;
  margin: 0 auto;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  .title {
    text-align: center;
    font-size: 2rem;
    font-weight: 800;
    color: #2d3748;
    margin-bottom: 32px;
  }
  .default-label-box {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    label {
      margin-bottom: 8px;
      font-weight: 500;
      color: #4a5568;
      font-size: 15px;
    }
    input,
    textarea,
    select {
      padding: 16px 20px;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      font-size: 15px;
    }
  }

  .form-check {
    display: flex;
    align-items: center;
    gap: 15px;
    background-color: #fff;
    padding: 15px 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    width: fit-content;
  }

  .form-check input[type="checkbox"] {
    width: 22px;
    height: 22px;
    accent-color: #4f46e5;
    cursor: pointer;
    transition: transform 0.2s;
  }

  .form-check input[type="checkbox"]:hover {
    transform: scale(1.1);
  }

  .form-check label {
    cursor: pointer;
    font-weight: 600;
    color: #333;
    font-size: 16px;
  }
  .form-btns {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-top: 32px;

    button {
      padding: 14px 28px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      font-size: 15px;
      transition: background-color 0.1s ease;
    }
    button:nth-child(1) {
      background-color: #edf2f7;
      color: #4a5568;
      border: 1px solid #e2e8f0;
      &:hover {
        background-color: #e0e5eaff;
      }
    }
    button:nth-child(2) {
      background-color: #4a6fa5;
      color: white;
      border: none;
      &:hover {
        background-color: #3e5c8aff;
      }
    }
  }
`;
