import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TabMenu, Icon, Notify, ThemeProvider } from "../../components";
import { toast } from "react-toastify";



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
  title: "UI-COMPONENTS/TabMenu",
  decorators: [withColorScheme],
  component: TabMenu,
} as ComponentMeta<typeof TabMenu>;

const Template: ComponentStory<typeof TabMenu> = (props) => (
  <div>
    <TabMenu {...props} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  data: [
    {
      label: 'Tab menu item 1',
      isActive: false,
    },
    {
      label: 'Tab menu item 2',
      isActive: false,
    },
    {
      label: 'Tab menu item 3',
      isActive: false,
    },
    {
      label: 'Tab menu item 4',
      isActive: true,
    },
    {
      label: 'Tab menu item 5',
      isActive: false,
    },
  ],

  setActiveHandler: (index, data) => {

    console.log('index', index);
    console.log('data', data);
  }

};
