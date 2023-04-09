import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, Icon, Notify, ThemeProvider } from "../../components";
import { toast } from "react-toastify";

export default {
  title: "UI-COMPONENTS/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (props) => (
  <ThemeProvider variant="light">
    <Button {...props} />
  </ThemeProvider>
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
