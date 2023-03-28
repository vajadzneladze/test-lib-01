import styled from "styled-components";
const sun = require('../../assets/sun.svg')
const moon = require('../../assets/moon.svg')

export const StyledToggle = styled.div<{ isDay: Boolean }>`
  width: 50px;
  height: 24px;
  border-radius: ${({ theme }) => theme.size.radius.circle};
  background-color: ${({ isDay }) => (isDay ? "#FFC757" : "white")};
  transition: 500ms;
  box-sizing: border-box;
  position:relative;

  display:flex;
  align-items:center;
  justify-content:space-between;
  cursor:pointer;

  &::before , &::after {
    background-repeat:no-repeat;
    background-size:15px;
    background-position:center center;
    display:block;
    width:100%;
    height:100%;
  }

  &::before {
    content: "";
    background-image: url(${sun});
    float: left;
    padding-left:6px;
  }

  &::after {
    content: "";
    background-image: url(${moon});
    float: right;
    padding-right:6px;
  }


`;

export const StyledToggleCircle = styled.div<{ isDay: Boolean }>`
  width:20px;
  height:20px;
  border-radius:100%;
  background-color: ${ ({ isDay }) => isDay ? 'white' : '#283593' };
  position:absolute;
  transition:500ms;
  transform : translateX( ${ ({ isDay }) => !isDay ? `2px` : `27px`})
`;
