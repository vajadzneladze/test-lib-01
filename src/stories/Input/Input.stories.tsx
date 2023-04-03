import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "../../components";
import Input from "../../components/Input/Input";

export default {
  title: "UI-COMPONENTS/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (props) => (
  <ThemeProvider variant="dark">
    <Input
      {...props}
      onChange={(val) => {
        console.log(val);
      }}
    />
  </ThemeProvider>
);

export const Primary = Template.bind({});

Primary.args = {
  label: 'Let"s go',
  value: '',
  description: ''
};
