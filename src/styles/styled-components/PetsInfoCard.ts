import styled from "styled-components";

export const PetsInfoCard = styled.article`
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  .img-title {
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
    .image {
      font-size: 5rem;
      background-color: #edf2f7;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      width: 320px;
      height: 320px;
      margin-bottom: 20px;
    }
    .title {
      width: 100%;
      .popular {
        width: fit-content;
        color: #dd6b20;

        border-radius: 8px;
        font-size: 1rem;
        padding: 10px 20px;
        font-weight: 900;
        border: 1px solid #f6ad55;
        background-color: #feebc8;
      }
      h1 {
        font-size: 2.8rem;
        font-weight: 800;
        color: #2d3748;
        margin-bottom: 20px;
      }
      .category {
        background-color: #4a6fa5;
        width: fit-content;
        color: white;
        padding: 12px 24px;
        border-radius: 25px;
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 30px;
      }
      .price-box {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(3, 1fr);
        margin-bottom: 30px;
        gap: 24px;
        .price-item {
          padding: 20px;
          background: #f8f9fa;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
        }
        .price-tag {
          font-size: 0.9rem;
          color: #718096;
          margin-bottom: 8px;
          font-weight: 500;
        }
        .price {
          font-size: 1.8rem;
          font-weight: 700;
        }
        .price-usd {
          color: #38a169;
        }
        .price-gel {
          color: #c53030;
        }
      }
    }
  }
  .description-box {
    .description-title {
      color: #2d3748;
      margin-bottom: 20px;
      font-size: 1.4rem;
      font-weight: 700;
    }
    .description {
      background: #f8f9fa;
      padding: 28px;
      border-radius: 10px;
      margin-bottom: 30px;
      border: 1px solid #e2e8f0;
    }
    .edit-delete {
      display: flex;
      width: fit-content;
      margin: 0 auto;
      gap: 20px;
      button {
        padding: 14px 28px;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 500;
        transition: all 0.3s ease;
        font-size: 15px;
      }
      button:nth-child(1) {
        border: none;
        background-color: #4a6fa5;
        color: white;
        &:hover {
          background-color: #3c5a88ff;
        }
      }
      button:nth-child(2) {
        border: none;

        background-color: #c53030;
        color: white;
        &:hover {
          background-color: #a52929ff;
        }
      }
    }
  }
`;
