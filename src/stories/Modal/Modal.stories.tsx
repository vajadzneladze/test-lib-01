import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, Text, ThemeProvider, Toggle } from "../../components";
import Modal from "../../components/Modal/Modal";

export default {
  title: "UI-COMPONENTS/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (props) => (
  <ThemeProvider>
    <Modal {...props}>
      <Text variant="p4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim
        accumsan, facilisi aliquam facilisis nunc suspendisse vitae, elementum
        nisl, nulla ut turpis magna rhoncus porttitor. Ut blandit posuere
        aliquam morbi pharetra amet quam risus. At est varius lobortis in
        iaculis scelerisque. Egestas ut integer amet duis. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Dignissim accumsan, facilisi aliquam
        facilisis nunc suspendisse vitae, elementum eget. Non porttitor posuere
        a congue lacus . Amet nulla fermentum ipsum ac nisl. Dis feugiat nisl,
        nulla ut turpis magna rhoncus porttitor. Ut blandit posuere aliquam
        morbi pharetra amet quam risus. At est varius lobortis in iaculis
        scelerisque. Egestas ut integer amet duis. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Dignissim accumsan, facilisi aliquam
        facilisis nunc suspendisse vitae, elementum eget. Non porttitor posuere
        a congue lacus . Amet nulla fermentum ipsum ac nisl. Dis feugiat nisl,
        nulla ut turpis magna rhoncus porttitor. Ut blandit posuere aliquam
        morbi pharetra amet quam risus. At est varius lobortis in iaculis
        scelerisque. Egestas ut integer amet duis.
      </Text>

    </Modal>
  </ThemeProvider>
);

export const Primary = Template.bind({});

Primary.args = {
  isOpen: true,
  size: "md",
  title: "Modal Header",
  confirmBtn: "Submit",
  closeBtn: "Close",
  onSubmit: () => alert("ConFirm Button Was Clicked"),
  onClose: () => alert("Modal should be close now"),
};
