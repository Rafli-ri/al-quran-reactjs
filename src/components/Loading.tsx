import React from "react";

interface LoadingProps {
  loading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ loading }) => {
  return loading && <p>Loading ....</p>;
};

export default Loading;
