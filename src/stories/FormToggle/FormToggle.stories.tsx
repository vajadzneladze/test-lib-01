import React, { useEffect, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider, FormToggle } from "../../components";

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
  title: "UI-COMPONENTS/FormToggle",
  decorators: [withColorScheme],
  component: FormToggle,
} as ComponentMeta<typeof FormToggle>;

const Template: ComponentStory<typeof FormToggle> = (props) => {

  return (
    <FormToggle {...props} />
  );
}

export const Primary = Template.bind({});
