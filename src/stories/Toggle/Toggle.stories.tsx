import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {   ThemeProvider, Toggle } from '../../components';

export default {
    title: 'UI-COMPONENTS/Toggle',
    component: Toggle
} as ComponentMeta<typeof Toggle>;


const Template: ComponentStory<typeof Toggle> = (props) => <ThemeProvider variant={ props.isOn ? 'light' : 'dark'} ><Toggle {...props}/></ThemeProvider>

export const Primary = Template.bind({});



