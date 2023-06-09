import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CheckBox, Icon, Notify, ThemeProvider } from "../../components";



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
  title: "UI-COMPONENTS/CheckBox",
  decorators: [withColorScheme],
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (props) => (
    <CheckBox {...props} />
);

export const Primary = Template.bind({});

Primary.args = {
  onChange:  e => console.log('Single CheckBox ' , e)
}
