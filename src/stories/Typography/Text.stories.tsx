import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {  Icon, Text, ThemeProvider } from '../../components';

export default {
    title: 'UI-COMPONENTS/Typography',
    component: Text 
} as ComponentMeta<typeof Text>;


const Template: ComponentStory<typeof Text> = (props) => <ThemeProvider variant='light' > <Icon name = 'he' /><Text {...props}></Text></ThemeProvider>

export const Primary = Template.bind({});

Primary.args = {
    text:'Headline 1',
    variant:'h1',
}


