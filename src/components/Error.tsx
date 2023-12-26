import React from "react";

interface ErrorProps {
  error: string | null;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  return error && <p>Error: {error}</p>;
};

export default Error;
