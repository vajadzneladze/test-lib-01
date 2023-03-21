import React from "react";
import styled from "styled-components";

export interface TypographyProps {
  text: string;
  size: '16px' | '32px' | '52px',
  onClick?: () => void;
}

const P = styled.p`
  border:1px solid ${ (props) => props.theme.text  };
  padding:10px 5px;
  color: ${ ({ theme }) => theme.text  };
`;

const Typography = ({ text , size , ...props }: TypographyProps) => {
  return <P style = {{ fontSize:size  }} {...props}> { text }</P>;
};

export default Typography;
