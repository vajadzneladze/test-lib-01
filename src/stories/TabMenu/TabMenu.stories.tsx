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
  <TabMenu />
);

export const Primary = Template.bind({});

Primary.args = {

};
