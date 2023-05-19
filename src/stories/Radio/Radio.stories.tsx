import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Radio, Icon, Notify, ThemeProvider } from "../../components";



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
  title: "UI-COMPONENTS/Radio",
  decorators: [withColorScheme],
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (props) => (
  <Radio {...props} />
);

export const Primary = Template.bind({});

Primary.args = {
  onChange: e => console.log('Single Radio ', e),
  data: [
    { label: 'Radio Item 1', value: false },
    { label: 'Radio Item 2', value: true },
    { label: 'Radio Item 3', value: false },
  ]
}
