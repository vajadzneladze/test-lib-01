import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ThemeProvider } from '../../components';

export default {
    title: 'UI-COMPONENTS/Button',
    component: Button
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (props) => <ThemeProvider variant='light'><Button {...props}/></ThemeProvider>

export const Primary = Template.bind({});
export const Loading = Template.bind({});

Primary.args = {
    text:'Here we go'
}

Loading.args = {
    isLoading: true
}