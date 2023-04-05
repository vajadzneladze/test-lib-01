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
      id: 1,
      parentId: 0,
      name: "Parent Node",
      icon: "folder",
    },
    {
      id: 2,
      parentId: 1,
      name: "Child Node 1",
      icon: "file",
    },
    {
      id: 7,
      parentId: 2,
      name: "Child Node 1",
      icon: "file",
    },
    {
      id: 3,
      parentId: 1,
      name: "Child Node 2",
      icon: "file",
    },
  ],
  labelKey:'name',
  dataStructure: 'tree'
};
