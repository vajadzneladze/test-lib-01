import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "../../components";
import Tree from "../../components/Tree/Tree";

export default {
  title: "UI-COMPONENTS/Tree",
  component: Tree,
} as ComponentMeta<typeof Tree>;

const Template: ComponentStory<typeof Tree> = (props) => (
  <ThemeProvider >
    <Tree {...props} />
  </ThemeProvider>
);

export const Primary = Template.bind({});

Primary.args = {
  data: [
    {
      id:1,
      title:'Fruits',
      icon:'Lamp'
    },
    {
      id:2,
      title:'3Dcube',
      icon:'UserSearch'
    },
    {
      id:3,
      parentId:1,
      title:'Apple',
      icon:'3Dcube'

    },
    {
      id:4,
      parentId:1,
      title:'Orange'
    }
  ],
  labelKey:'title',
  onChangeHandler: (e:any) => console.log('......................', e),
};
