import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider, GridDrag } from "../../components";

export default {
  title: "UI-COMPONENTS/Drag",
  component: GridDrag,
} as ComponentMeta<typeof GridDrag>;



const dataColumns = [
  {
      dataField: "ID",
      dataType: "number",
      filterOperations: [
          "=",
          "<>",
          "<",
          ">",
          "<=",
          ">=",
          "between",
          "isblank",
          "isnotblank",
          "anyof",
          "noneof",
      ],
      allowFiltering: false,
  },
  {
      dataField: "Name",
      dataType: "string",
      filterOperations: [
          "=",
          "<>",
          "isblank",
          "isnotblank",
          "anyof",
          "noneof",
          "contains",
          "notcontains",
          "startswith",
          "endswith",
      ],
      allowFiltering: true,
  },
  {
      dataField: "KeyName",
      dataType: "string",
      filterOperations: [
          "=",
          "<>",
          "isblank",
          "isnotblank",
          "anyof",
          "noneof",
          "contains",
          "notcontains",
          "startswith",
          "endswith",
      ],
      allowFiltering: false,
  },
  {
      dataField: "Status",
      dataType: "number",
      filterOperations: [
          "=",
          "<>",
          "<",
          ">",
          "<=",
          ">=",
          "between",
          "isblank",
          "isnotblank",
          "anyof",
          "noneof",
      ],
      allowFiltering: false,
  },
  {
      dataField: "CreateTime",
      dataType: "datetime",
      filterOperations: [
          "=",
          "<>",
          "<",
          ">",
          "<=",
          ">=",
          "between",
          "isblank",
          "isnotblank",
          "anyof",
          "noneof",
      ],
      allowFiltering: true,
  },
  {
      dataField: "Products",
      dataType: "string",
      filterOperations: [
          "=",
          "<>",
          "isblank",
          "isnotblank",
          "anyof",
          "noneof",
          "contains",
          "notcontains",
          "startswith",
          "endswith",
      ],
      allowFiltering: false,
  },
  {
      dataField: "Brands",
      dataType: "string",
      show:true,
      filterOperations: [
          "=",
          "<>",
          "isblank",
          "isnotblank",
          "anyof",
          "noneof",
          "contains",
          "notcontains",
          "startswith",
          "endswith",
      ],
      allowFiltering: false,
  },
];


const Template: ComponentStory<typeof GridDrag> = (props) => (
  <ThemeProvider variant={"light"}>
    <GridDrag {...props} />
  </ThemeProvider>
);

export const Primary = Template.bind({});

Primary.args = {
  columns : dataColumns,
  selectColumnHandler: (e:any) => console.log(e)
}
