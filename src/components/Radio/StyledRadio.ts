import styled from "styled-components";
import { StyledRadioProps } from "./Radio.types";

export const StyledRadio = styled.div<StyledRadioProps>`
    .dx-radiogroup {

        .dx-collection {

            display:flex;
            gap:10px;
            flex-direction: ${({ flexDirection }) => flexDirection};


            .dx-radiobutton {
                display:flex;
                gap:10px;

                .dx-radio-value-container {
                    padding-right:0px;

                    .dx-radiobutton-icon {

                    
                        transition:100ms;
                        width: 18px; 
                        height: 18px;
                        box-sizing: border-box;
                        position:relative;
                        margin:0px;
                        position:relative;

                        &::before {
                            width:18px;
                            height:18px;
                            box-sizing: border-box;
                            background: ${({ theme }) => theme.color.steel.grey_05};
                            border: 1px solid ${({ theme }) => theme.color.steel.grey_09}; 

                            
                        }

                        .dx-radiobutton-icon-dot {
                            
                            width:12px;
                            height:12px;
                            border-radius:6px;
                            margin:0px;
                            top: 50%;
                            left: 50%;
                            position: absolute;
                            transform: translateY(-50%) translateX(-50%);
                            position:absolute;
                        }

                        &:hover {
                            &::before {
                                background: ${({ theme }) => theme.color.semantic.positive_20};
                                border: 1px solid ${({ theme }) => theme.color.semantic.positive_100}; 
                            }
                        }

                        &:active {
                            &::before {
                                background: ${({ theme }) => theme.color.semantic.positive_20};
                                border: 1px solid ${({ theme }) => theme.color.semantic.positive_120}; 
                            }
                        }

                        &:disabled {
                            &::before {
                                background: #F3F5F6;
                                border: 1px solid #E9EBEC; 
                            }
                        }


                        &.dx-radiobutton-icon-checked {


                            &::before {
                                border: 1px solid ${({ theme }) => theme.color.semantic.positive_100}; 
                                background:none ;
                             
                            }

                            .dx-radiobutton-icon-dot {
                                background: ${({ theme }) => theme.color.semantic.positive_100};
                            }


                            &:hover {

                                &::before {
                                    background: ${({ theme }) => theme.color.semantic.positive_10};
                                }
                            }


                            &:active {

                                &::before {
                                    background: ${({ theme }) => theme.color.semantic.positive_10};
                                    border: 1px solid ${({ theme }) => theme.color.semantic.positive_120}; 

                                }

                                .dx-radiobutton-icon-dot {
                                    background: ${({ theme }) => theme.color.semantic.positive_120};
                                }

                            }

                        }
                    }
                }
                
                .dx-item-content {
                    color: ${({ theme }) => theme.color.text.primary};
                    font-family: ${({ theme }) => theme.typography.font.regular};
                    text-align: left;
                    font-size: ${({ theme }) => theme.typography.fontSize.fs_12};
                    line-height: ${({ theme }) => theme.typography.lineHeight.md};

                }
            }
        }


        .dx-radiobutton-checked {
            
        }


        &.dx-state-disabled {

            .dx-radiobutton-icon {
                &::before {
                    background: #F3F5F6 !important;
                    border: 1px solid #E9EBEC !important; 
                }
            }


            .dx-radiobutton-checked { 


                .dx-radiobutton-icon {
                    &::before {
                        background: #F9FAFA;
                        border: 1px solid #E1E4E5; 

                        background:red;
                    }


                    .dx-radiobutton-icon-dot {
                        background: #E1E4E5 !important;
                    }
                }
            }
        }


        
    }
`;