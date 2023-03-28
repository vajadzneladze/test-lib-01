import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, Notify, ThemeProvider } from '../../components';
import ToastNotification from '../../components/ToastNotification/ToastNotification';

export default {
    title: 'UI-COMPONENTS/TostNotification',
    component: ToastNotification
} as ComponentMeta<typeof ToastNotification>;


const Template: ComponentStory<typeof ToastNotification> = (props) => <ThemeProvider variant='light' >
    <Button
        variant='contained'
        text = "Notify"
        onClick={() => Notify( {...props})}
    />
</ThemeProvider>

export const Primary = Template.bind({});
export const Success = Template.bind({});
export const Warning = Template.bind({});
export const Danger = Template.bind({});

Primary.args = {
    message: 'Let"s go',
    type : 'info',
    autoClose : 200,
    closeButtonText:  "Action",
    actionHandler: () => console.log('lets do it')
    // onClose: () => alert('info notifcation was closeed')
}

Success.args = {
    message: 'Let"s go',
    type : 'success',
    autoClose : 200,
    // onClose: () => alert('success notifcation was closeed')
}

Warning.args = {
    message: 'Let"s go',
    type : 'warning',
    autoClose : 200,
    // onClose: () => alert('warning notification was closed')
}

Danger.args = {
    message: 'Let"s go',
    type : 'error',
    autoClose : 200,
    // onClose: () => alert('warning notification was closed')
}



