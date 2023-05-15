import React from 'react';
import { StyledTabMenu, StyledTabMenuItems } from './StyledTabMenu';
import Text from '../Text/Text';


const data = [
    {
        label: 'Item 1',
        isActive: false,
    },
    {
        label: 'Item 2',
        isActive: false,
    },
    {
        label: 'Item 3',
        isActive: false,
    },
    {
        label: 'Item 4',
        isActive: true,
    },
    {
        label: 'Item 5',
        isActive: false,
    },
];

const TabMenu = () => {

    return <StyledTabMenu>

        {
            data && data.length > 0 ?  data.map((item, index ) => {

                return <StyledTabMenuItems  key = {index} text = {item.label}  variant = 'p4' weight =  {  item.isActive ? 'bold' : 'regular' } isActive = { item.isActive } />

            }) : null
        }

    </StyledTabMenu>
}

export default TabMenu;