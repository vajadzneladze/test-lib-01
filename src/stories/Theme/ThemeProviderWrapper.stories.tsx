import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProviderWrapper } from '../../components';

export default {
    title: 'desing-system/theme',
    component: ThemeProviderWrapper,
} as ComponentMeta<typeof ThemeProviderWrapper>;

const Template: ComponentStory<typeof ThemeProviderWrapper> = (args) => <ThemeProviderWrapper { ...args} >  </ThemeProviderWrapper>;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
    variant: 'dark',
};


Secondary.args = {
    variant: 'light',
};
