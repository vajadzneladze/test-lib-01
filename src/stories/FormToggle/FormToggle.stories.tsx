import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider, FormToggle } from "../../components";

export default {
  title: "UI-COMPONENTS/FormToggle",
  component: FormToggle,
} as ComponentMeta<typeof FormToggle>;

const Template: ComponentStory<typeof FormToggle> = (props) => (
  <ThemeProvider variant={"light"}>
    <FormToggle {...props} />
  </ThemeProvider>
);

export const Primary = Template.bind({});
