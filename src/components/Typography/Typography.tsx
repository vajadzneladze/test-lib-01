import React from "react";
import styled from "styled-components";

export interface TypographyProps {
  text: string;
  size: '16px' | '32px' | '52px',
  onClick?: () => void;
}

const P = styled.p`
  border:1px solid lightgray;
  padding:10px 25px;
`;

const Typography = ({ text , size , ...props }: TypographyProps) => {
  return <P style = {{ fontSize:size  }} {...props}> { text }</P>;
};

export default Typography;
