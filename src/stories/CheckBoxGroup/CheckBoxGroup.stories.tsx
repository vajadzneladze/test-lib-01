import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TabMenu, Icon, Notify, ThemeProvider, CheckBoxGroup } from "../../components";
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
  title: "UI-COMPONENTS/CheckBoxGroup",
  decorators: [withColorScheme],
  component: CheckBoxGroup,
} as ComponentMeta<typeof CheckBoxGroup>;

const Template: ComponentStory<typeof CheckBoxGroup> = (props) => (
    <CheckBoxGroup {...props} />
);

export const Primary = Template.bind({});

Primary.args = {
  data: [
    {
      value: false,
      label: ''
    },
    {
      value: true,
      label: 'Label' ,
      labelPosition: 'right'
    },
    {
      value: true,
      label: 'Label',
      labelPosition: 'right'
    },
    {
      value: true,
      label: 'Label',
      labelPosition: 'left'
    },
    {
      value: true,
      label: '',
      labelPosition: 'left'
    },
    {
      value: true,
      label: 'Label',
      labelPosition: 'left'
    }
  ],
  onChangeHandler: e => console.log('CheckBox Group ',  e.target.value)
};
