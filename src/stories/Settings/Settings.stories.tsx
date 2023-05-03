import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, Icon, Notify, Settings, ThemeProvider } from "../../components";
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
  title: "UI-COMPONENTS/Settings",
  decorators: [withColorScheme],
  component: Settings,
} as ComponentMeta<typeof Settings>;

const Template: ComponentStory<typeof Settings> = (props) => (
  <Settings {...props} />
);

export const Primary = Template.bind({});


Primary.args = {
  actionList: [
    {
      icon: 'Lamp',
      label: 'Light Up',
      action: 'light'
    },
    {
      icon: 'TrashOutlined',
      label: 'Delete',
      action: 'delete'
    },
    {
      icon: 'EditOutlined',
      label: 'Edit',
      action: 'edit'
    }
  ],
  clickHandler: action => console.log(action),
  isOpen: true
};