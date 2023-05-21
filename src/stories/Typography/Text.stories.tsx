import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Text, ThemeProvider } from "../../components";
import { Tooltip } from "devextreme-react";

export default {
  title: "UI-COMPONENTS/Typography",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (props) => (
  <ThemeProvider variant="light">
    <Tooltip
      target="#product3"
      showEvent="mouseenter"
      hideEvent="mouseleave"
      hideOnOutsideClick={false} >
      <div>Projector PlusHD</div>
    </Tooltip>
    <Text id="product3" {...props}   ></Text>
  </ThemeProvider>
);

export const Primary = Template.bind({});

Primary.args = {
  text: "Headline 1",
  variant: "h1",
};
