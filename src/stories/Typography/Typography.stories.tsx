import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from '../../components';

export default {
    title: 'desing-system/Typography',
    component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    text: 'Hello world!',
    size: '52px'
};
