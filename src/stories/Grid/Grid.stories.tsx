import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FormToggle, ThemeProvider } from "../../components";
import Grid from "../../components/Grid/Grid";


const withColorScheme = (Story: any, { globals }: any) => {

  let { scheme } = globals;


  return (
    <div>
      {
        scheme === 'light' && <ThemeProvider variant='light'>
          <div className="bg-for-stories-light">
            <Story />
          </div>
        </ThemeProvider>
      }

      {
        scheme === 'dark' && <ThemeProvider variant="dark">
          <div className="bg-for-stories-dark">
            <Story />
          </div>
        </ThemeProvider>
      }

      {
        scheme === 'both' &&
        <>
          <ThemeProvider variant="light">
            <div className="bg-for-stories-light">
              <Story />
            </div>
          </ThemeProvider>

          <ThemeProvider variant="dark">
            <div className="bg-for-stories-dark">
              <Story />
            </div>
          </ThemeProvider>
        </>
      }

    </div>
  )
}

export default {
  title: "UI-COMPONENTS/Grid",
  decorators: [withColorScheme],
  component: Grid,
} as ComponentMeta<typeof Grid>;

const GridMasterTemplate2 = ({ data }: any) => {
  const { Brands } = data.data.data;

  return (
    <div
      style={{
        width: "80%",
        margin:'auto',
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:'orange',
        color:'white',
      }}
    >
      {Brands}
    </div>
  );
};


const Template: ComponentStory<typeof Grid> = (props) => (
  <Grid {...props} />
);

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
    renderColumn: (data: any) => <FormToggle isOn={data.data.Status} changeHandler={e => console.log(data.data.ID, e)} />,
    allowFiltering: false,
    allowSorting: false
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
    dataField: "Action",
    caption: 'Action',
    allowFiltering: false,
    allowSorting: false,
    show: true
  },
];

export const Primary = Template.bind({});

Primary.args = {
  columns: dataColumns,
  primaryField: "ID", // data: 'https://jsonplaceholder.typicode.com/posts',
  selectedItems: [1, 2],
  selectMode: "none",
  onDelete: (e) => console.log(e),
  fetchData: async (loadOptions: any): Promise<any[]> => {
    const response = await fetch(
      "https://newadmin.upgaming.dev/api/Organizations/Get",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer fd3642ef-f91c-4a14-ab2f-bbf2e6bd672c",
          "ug-proxy": "oneadmin",
        },
        body: JSON.stringify(loadOptions),
      }
    );

    const data = await response.json();
    return data;
  }, 
  onRowClick: (e) => { },
  DetailsComponent: GridMasterTemplate2,
};


