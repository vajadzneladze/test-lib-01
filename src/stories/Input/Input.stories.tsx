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
    <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
      <Input {...props} style={{ width: "350px" }} />
      <Input
        label="First Name"
        onChange={(e) => console.log("firstName ", e)}
        type="text"
        style={{ width: "350px" }}
      />

      <Input
        label="With Icon"
        onChange={(e) => console.log("firstName ", e)}
        type="text"
        icon="Lamp"
        style={{ width: "350px" }}
      />

      <Input
        label="UserName"
        status="success"
        description="Enter Your Email Address"
        onChange={(e) => console.log("username ", e)}
        type="email"
        style={{ width: "350px" }}
      />

      <Input
        label="Password"
        status="error"
        description="Enter Valid Password"
        onChange={(e) => console.log("password ", e)}
        type="password"
        style={{ width: "350px" }}
      />

      <Input
        label="With Icon"
        onChange={(e) => console.log("firstName ", e)}
        type="text"
        disabled
        icon="Lamp"
        style={{ width: "350px" }}
      />
    </div>
  </ThemeProvider>
);

export const Primary = Template.bind({});

Primary.args = {
  label: "Label",
  value: "",
  description: "",
  onChange: (e) => {
    console.log(e);
  },
};
