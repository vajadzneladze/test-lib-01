import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "../../components";
import Tree from "../../components/Tree/Tree";

export default {
  title: "UI-COMPONENTS/Tree",
  component: Tree,
} as ComponentMeta<typeof Tree>;

const Template: ComponentStory<typeof Tree> = (props) => (
  <ThemeProvider>
    <Tree {...props} />
  </ThemeProvider>
);

export const Primary = Template.bind({});

Primary.args = {
  data: [
    {
      id:1,
      title:'Fruits'
    },
    {
      id:2,
      title:'Vegetables'
    },
    {
      id:3,
      parentId:1,
      title:'Apple'
    },
    {
      id:4,
      parentId:1,
      title:'Orange'
    }
  ],
  labelKey:'title',
};
