import React from "react";

interface TruncatedTextProps {
  text: string;
}

export const TruncatedText: React.FC<TruncatedTextProps> = ({ text }) => {
  const index = 110;
  const truncated = index < text.length ? text.slice(0, index) + "..." : text;

  return <p className="description">{truncated}</p>;
};
