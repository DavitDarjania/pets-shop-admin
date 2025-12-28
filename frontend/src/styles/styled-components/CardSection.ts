import styled from "styled-components";

export const CardSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`;

export const PetCard = styled.article`
  background-color: white;
  padding: 28px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transform: translate(0, -10px);
  }
  .image {
    font-size: 3.5rem;
    background-color: #edf2f7;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    height: 220px;
    margin-bottom: 20px;
  }
  .title {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 12px;
  }
  .category {
    background-color: #4a6fa5;
    width: fit-content;
    color: white;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    padding: 6px 16px;
    margin-bottom: 16px;
  }
  .price {
    display: flex;
    gap: 20px;
    margin-bottom: 16px;
    p {
      font-weight: 800;
      font-size: 1.1rem;
    }
    p:nth-child(1) {
      color: #38a169;
    }
    p:nth-child(2) {
      color: #c53030;
    }
  }
  .description,
  .pet-count {
    color: #718096;
    font-size: 0.95rem;
    margin-bottom: 20px;
    line-height: 1.6;
    font-weight: 600;
  }
  .pop-stock {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .popular {
      width: fit-content;
      color: #dd6b20;
      padding: 6px 12px;
      border-radius: 8px;
      font-size: 0.75rem;
      font-weight: 700;
      border: 1px solid #f6ad55;
      background-color: #feebc8;
    }
    .stock {
      color: #4a5568;
      font-weight: 500;
      font-size: 0.9rem;
    }
  }
  .edit-delete {
    display: flex;
    gap: 12px;
    button {
      border-radius: 8px;
      padding: 10px 18px;
      font-size: 13px;
      font-weight: 600;
    }
    button:nth-child(1) {
      background-color: #edf2f7;
      color: #4a5568;
      border: 1px solid #e2e8f0;
      transition: background-color 0.1s ease;
      &:hover {
        background-color: #d9dee3ff;
      }
    }
    button:nth-child(2) {
      background-color: #c53030;
      color: white;
      border: none;
      &:hover {
        background-color: #ab2b2bff;
      }
    }
  }
`;
