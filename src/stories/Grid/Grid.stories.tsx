import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Text, ThemeProvider } from "../../components";
import Grid from "../../components/Grid/Grid";

export default {
  title: "UI-COMPONENTS/Grid",
  component: Grid,
} as ComponentMeta<typeof Grid>;

const data = [
  {
    id: 1,
    CompanyName: "Super Mart of the West",
    Address: "702 SW 8th Street",
    City: "Bentonville",
    State: "Arkansas",
    Zipcode: 72716,
    Phone: "(800) 555-2797",
    Fax: "(800) 555-2171",
    Website: "http://www.nowebsitesupermart.com",
    status: "success",
  },
  {
    id: 2,
    CompanyName: "Electronics Depot",
    Address: "2455 Paces Ferry Road NW",
    City: "Atlanta",
    State: "Georgia",
    Zipcode: 30339,
    Phone: "(800) 595-3232",
    Fax: "(800) 595-3231",
    Website: "http://www.nowebsitedepot.com",
    status: "success",
  },
  {
    id: 3,
    CompanyName: "K&S Music",
    Address: "1000 Nicllet Mall",
    City: "Minneapolis",
    State: "Minnesota",
    Zipcode: 55403,
    Phone: "(612) 304-6073",
    Fax: "(612) 304-6074",
    Website: "http://www.nowebsitemusic.com",
    status: "warning",
  },
  {
    id: 4,
    CompanyName: "Tom's Club",
    Address: "999 Lake Drive",
    City: "Issaquah",
    State: "Washington",
    Zipcode: 98027,
    Phone: "(800) 955-2292",
    Fax: "(800) 955-2293",
    Website: "http://www.nowebsitetomsclub.com",
    status: "rejected",
  },
  {
    id: 5,
    CompanyName: "E-Mart",
    Address: "3333 Beverly Rd",
    City: "Hoffman Estates",
    State: "Illinois",
    Zipcode: 60179,
    Phone: "(847) 286-2500",
    Fax: "(847) 286-2501",
    Website: "http://www.nowebsiteemart.com",
    status: "info",
  },
  {
    id: 6,
    CompanyName: "Walters",
    Address: "200 Wilmot Rd",
    City: "Deerfield",
    State: "Illinois",
    Zipcode: 60015,
    Phone: "(847) 940-2500",
    Fax: "(847) 940-2501",
    Website: "http://www.nowebsitewalters.com",
    status: "info",
  },
  {
    id: 7,
    CompanyName: "StereoShack",
    Address: "400 Commerce S",
    City: "Fort Worth",
    State: "Texas",
    Zipcode: 76102,
    Phone: "(817) 820-0741",
    Fax: "(817) 820-0742",
    Website: "http://www.nowebsiteshack.com",
    status: "info",
  },
  {
    id: 8,
    CompanyName: "Circuit Town",
    Address: "2200 Kensington Court",
    City: "Oak Brook",
    State: "Illinois",
    Zipcode: 60523,
    Phone: "(800) 955-2929",
    Fax: "(800) 955-9392",
    Website: "http://www.nowebsitecircuittown.com",
    status: "info",
  },
  {
    id: 9,
    CompanyName: "Premier Buy",
    Address: "7601 Penn Avenue South",
    City: "Richfield",
    State: "Minnesota",
    Zipcode: 55423,
    Phone: "(612) 291-1000",
    Fax: "(612) 291-2001",
    Website: "http://www.nowebsitepremierbuy.com",
    status: "info",
  },
  {
    id: 10,
    CompanyName: "ElectrixMax",
    Address: "263 Shuman Blvd",
    City: "Naperville",
    State: "Illinois",
    Zipcode: 60563,
    Phone: "(630) 438-7800",
    Fax: "(630) 438-7801",
    Website: "http://www.nowebsiteelectrixmax.com",
    status: "info",
  },
  {
    id: 11,
    CompanyName: "Video Emporium",
    Address: "1201 Elm Street",
    City: "Dallas",
    State: "Texas",
    Zipcode: 75270,
    Phone: "(214) 854-3000",
    Fax: "(214) 854-3001",
    Website: "http://www.nowebsitevideoemporium.com",
    status: "info",
  },
  {
    id: 12,
    CompanyName: "Screen Shop",
    Address: "1000 Lowes Blvd",
    City: "Mooresville",
    State: "North Carolina",
    Zipcode: 28117,
    Phone: "(800) 445-6937",
    Fax: "(800) 445-6938",
    Website: "http://www.nowebsitescreenshop.com",
    status: "info",
  },
];

// const columns = ["id","CompanyName", "City", "State", "Phone", "Fax"];

const columns = [
  {
    dataField: "id",
    caption: "ID",
    align: "center",
    dataType: "number",
    width: "50px",
    // format: "#,##0",
    cssClass: "primary-field",
  },
  {
    dataField: "CompanyName",
    caption: "Company Name",
    align: "center",
    width: "200px",
    allowFilter: false,
    allowSorting: false,
  },
  {
    dataField: "City",
    caption: "City",
    align: "center",
  },
  {
    dataField: "Address",
    caption: "Address",
    align: "center",
    width: "200px",
  },

  {
    dataField: "status",
    caption: "Status",
    align: "center",
    width: "150px",
    renderColumn: (data: any) => {
      return (
        <div
          className={`status-${
            data.value === "rejected" ? "error" : data.value
          }`}
          style={{ margin: "auto" }}
        >
          {" "}
          {data.value.charAt(0).toUpperCase() + data.value.slice(1)}{" "}
        </div>
      );
    },
  },
  {
    dataField: "Phone",
    caption: "Phone",
    align: "center",
    width: "200px",
  },
  {
    dataField: "Zipcode",
    caption: "Zip Code",
    align: "center",
    width: "100px",
  },

  {
    dataField: "Website",
    caption: "URL",
    align: "center",
    renderColumn: (data: any) => {
      return (
        <a href={data.value}> {data.value.split("www.")[1].split(".")[0]} </a>
      );
    },
  },
];

const Template: ComponentStory<typeof Grid> = (props) => (
  <ThemeProvider variant="light">
    <Grid {...props} />
  </ThemeProvider>
);

export const Primary = Template.bind({});

Primary.args = {
  columns: columns,
  data: data,
  onRowClick: (e) => {},
};
