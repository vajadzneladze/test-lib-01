import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "../../components";
import SelectBox from "../../components/SelectBox/SelectBox";

export default {
  title: "UI-COMPONENTS/SelectBox",
  component: SelectBox,
} as ComponentMeta<typeof SelectBox>;

const Template: ComponentStory<typeof SelectBox> = (props) => (
  <ThemeProvider variant="light">
      <SelectBox {...props}  />
  </ThemeProvider>
);

export const Primary = Template.bind({});

Primary.args = {
  value : 1,
  onChange: val => console.log(val),
  style : {width:'350px'}
};
