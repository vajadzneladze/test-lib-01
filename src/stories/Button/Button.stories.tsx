import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, Icon, Notify, ThemeProvider } from "../../components";
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
  title: "UI-COMPONENTS/Button",
  decorators: [withColorScheme],
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (props) => (
  <Button {...props} />
);

export const Primary = Template.bind({});
export const Outlined = Template.bind({});
export const Text = Template.bind({});

Primary.args = {
  text: "Submit",
  variant: "contained",
  onClick: () => alert("Button was Clicked"),
};

Outlined.args = {
  text: "Submit",
  variant: "outlined",
  onClick: () => toast("Wow so easy !"),
};

Text.args = {
  text: "Submit",
  variant: "text",
  onClick: () =>
    Notify({
      message: "Notification .... ",
      type: "success",
      position: "top-right",
    }),
};
