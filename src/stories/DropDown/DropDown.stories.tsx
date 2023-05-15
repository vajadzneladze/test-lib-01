import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "../../components";
import DropDown from "../../components/DropDown/DropDown";

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
  title: "UI-COMPONENTS/DropDown",
  decorators: [withColorScheme],
  component: DropDown,
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (props) => (
  <DropDown {...props} style={{ width: '350px' }} />
);

export const Primary = Template.bind({

});




Primary.args = {
  options: [
    {
      "ID": 1,
      "ItemName": "Stores",
      "expanded": true
    },
    {
      "ID": "1_1",
      "categoryId": 1,
      "ItemName": "Super Mart of the West",
      "expanded": true
    },
    {
      "ID": "1_1_1",
      "categoryId": "1_1",
      "ItemName": "Video Players"
    },
    {
      "ID": "1_1_1_1",
      "categoryId": "1_1_1",
      "ItemName": "HD Video Player",
      "price": 220
    },
    {
      "ID": "1_1_1_2",
      "categoryId": "1_1_1",
      "ItemName": "SuperHD Video Player",
      "price": 270
    },
    {
      "ID": "1_1_2",
      "categoryId": "1_1",
      "ItemName": "Televisions",
      "expanded": true
    },
    {
      "ID": "1_1_2_1",
      "categoryId": "1_1_2",
      "ItemName": "SuperLCD 42",
      "price": 1200
    },
    {
      "ID": "1_1_2_2",
      "categoryId": "1_1_2",
      "ItemName": "SuperLED 42",
      "price": 1450
    },
    {
      "ID": "1_1_2_3",
      "categoryId": "1_1_2",
      "ItemName": "SuperLED 50",
      "price": 1600
    },
    {
      "ID": "1_1_2_4",
      "categoryId": "1_1_2",
      "ItemName": "SuperLCD 55",
      "price": 1750
    },
    {
      "ID": "1_1_2_5",
      "categoryId": "1_1_2",
      "ItemName": "SuperLCD 70",
      "price": 4000
    },
    {
      "ID": "1_1_3",
      "categoryId": "1_1",
      "ItemName": "Monitors"
    },
    {
      "ID": "1_1_3_1",
      "categoryId": "1_1_3",
      "ItemName": "19\""
    },
    {
      "ID": "1_1_3_1_1",
      "categoryId": "1_1_3_1",
      "ItemName": "DesktopLCD 19",
      "price": 160
    },
    {
      "ID": "1_1_4",
      "categoryId": "1_1",
      "ItemName": "Projectors"
    },
    {
      "ID": "1_1_4_1",
      "categoryId": "1_1_4",
      "ItemName": "Projector Plus",
      "price": 550
    },
    {
      "ID": "1_1_4_2",
      "categoryId": "1_1_4",
      "ItemName": "Projector PlusHD",
      "price": 750
    }
  ],
  label: 'Drop Down Label',
  mainKey: 'ID',
  labelKey :'ItemName',
  onChangeHandler: (selected: any) => console.log(selected)

};
