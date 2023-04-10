import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "../../components";
import Grid from "../../components/Grid/Grid";

export default {
  title: "UI-COMPONENTS/Grid",
  component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (props) => (
  <ThemeProvider variant="light">
    <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
      <Grid {...props} />
    </div>
  </ThemeProvider>
);

export const Primary = Template.bind({});

Primary.args = {};
