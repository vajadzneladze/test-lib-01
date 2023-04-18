import React from "react";

export interface GridMasterTemplateProps {
    CompanyName?: string
}

const GridMasterTemplate = ({data}:any) => {

 const { CompanyName } =  data.data;
   
  return <div>{CompanyName}</div>;
};


export default GridMasterTemplate;
