import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ThemeProvider } from '../../components';

export default {
    title: 'UI-COMPONENTS/Button',
    component: Button
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (props) => <ThemeProvider variant='light'><Button {...props}/></ThemeProvider>

export const Primary = Template.bind({});
export const Outlined = Template.bind({});
export const Text = Template.bind({});

Primary.args = {
    text:'Submit',
    variant:'contained',
}

Outlined.args = {
    text:'Submit',
    variant:'outlined',
}

Text.args = {
    text:'Submit',
    variant:'text',
}

