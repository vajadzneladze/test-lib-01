import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "../../components";
import Search from "../../components/Search/Search";

export default {
  title: "UI-COMPONENTS/Search",
  component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (props) => (
  <ThemeProvider>
    <Search suggestions = {['vaja', 'nia', 'nino', 'iako']} onSearch={ (e ) => { console.log(e)}} />
  </ThemeProvider>
);

export const Primary = Template.bind({});

Primary.args = {
};
