import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, Notify, ThemeProvider } from "../../components";
import ToastNotification from "../../components/ToastNotification/ToastNotification";

export default {
  title: "UI-COMPONENTS/TostNotification",
  component: ToastNotification,
} as ComponentMeta<typeof ToastNotification>;

const Template: ComponentStory<typeof ToastNotification> = (props) => (
  <ThemeProvider variant="light">
    <div
      style={{ display: "flex", gap: "15px", flexWrap: "wrap", width: "700px" }}
    >
      <Button
        variant="contained"
        text="Info"
        onClick={() =>
          Notify({
            message: "This BuTton is Variant : Contained",
            type: "info",
          })
        }
        style={{ width: "250x" }}
      />

      <Button
        variant="outlined"
        text="Success"
        onClick={() =>
          Notify({
            message: "This BuTton is Variant : Outlined",
            type: "success",
          })
        }
        style={{ width: "250x" }}
      />

      <Button
        variant="text"
        text="Warning"
        onClick={() =>
          Notify({
            message: "This BuTton is Variant : Text",
            type: "warning",
          })
        }
        style={{ width: "250x" }}
      />

      <Button
        variant="outlined"
        text="Error"
        onClick={() =>
          Notify({
            message: "This BuTton is Variant : Outlined",
            type: "error",
          })
        }
        style={{ width: "250x", borderColor: "red", color: "red" }}
      />





      <Button
        variant="contained"
        text="Info"
        icon="Lamp"
        onClick={() =>
          Notify({
            message: "We Can Do Some Action",
            type: "info",
            closeButtonText:'Alert',
            actionHandler: () => alert('This is Info Type Notification , with nice action button')
          })
        }
        style={{ width: "250x" }}
      />

      <Button
        variant="outlined"
        text="Success"
        icon="Lamp"
        iconPosition="right"
        onClick={() =>
          Notify({
            message: "This BuTton is Variant : Outlined",
            type: "success",
            closeButtonText:'Alert',
            actionHandler: () => alert('This is Success Type Notification , with nice action button')
          })
        }
        style={{ width: "250x" }}
      />

      <Button
        variant="text"
        text="Warning"
        onClick={() =>
          Notify({
            message: "This BuTton is Variant : Text",
            type: "warning",
          })
        }
        style={{ width: "250x" }}
      />

      <Button
        variant="outlined"
        text="Error"
        onClick={() =>
          Notify({
            message: "This BuTton is Variant : Outlined",
            type: "error",
          })
        }
        style={{ width: "250x", borderColor: "red", color: "red" }}
      />
    </div>

    {/* <Button
      variant="contained"
      text="Notify"
      onClick={() => Notify({ ...props })}
    /> */}
  </ThemeProvider>
);

export const Primary = Template.bind({});
export const Success = Template.bind({});
export const Warning = Template.bind({});
export const Danger = Template.bind({});

Primary.args = {
  message: 'Let"s go',
  type: "info",
  autoClose: 200,
  closeButtonText: "Action",
  actionHandler: () => console.log("lets do it"),
  // onClose: () => alert('info notifcation was closeed')
};

Success.args = {
  message: 'Let"s go',
  type: "success",
  autoClose: 200,
  // onClose: () => alert('success notifcation was closeed')
};

Warning.args = {
  message: 'Let"s go',
  type: "warning",
  autoClose: 200,
  // onClose: () => alert('warning notification was closed')
};

Danger.args = {
  message: 'Let"s go',
  type: "error",
  autoClose: 200,
  // onClose: () => alert('warning notification was closed')
};
