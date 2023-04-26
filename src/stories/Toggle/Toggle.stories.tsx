import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider, Toggle } from "../../components";


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
  title: "UI-COMPONENTS/Toggle",
  decorators: [withColorScheme],
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (props) => (
    <Toggle {...props} />
);

export const Primary = Template.bind({});
