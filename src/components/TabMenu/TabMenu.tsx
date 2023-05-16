import React, { useState } from 'react';
import { StyledTabMenu, StyledTabMenuItems } from './StyledTabMenu';
import Text from '../Text/Text';
import { ITabMenuItem, TabMenuProps } from './TabMenu.types';




const TabMenu = ({ data = [], setActiveHandler , flexDir = 'row' }: TabMenuProps) => {

    const [list, setList] = useState<ITabMenuItem[]>(data);

    const clickHandler = (i: number) => {

        if (!list[i].isActive) {
            const arr = list.map((item: ITabMenuItem, index: number) => {
                item.isActive = index === i;
                return item;
            });

            setList(arr);

            if (setActiveHandler) {
                setActiveHandler(i, arr);
            }
        }
    }

    console.log(flexDir)
    return <StyledTabMenu  flexDir = {flexDir}>
        {
            list && list.length > 0 ? list.map((item, index) => {

                return <StyledTabMenuItems isActive={item.isActive} key={index} onClick={() => clickHandler(index)}>
                    <Text text={item.label} variant='p4' weight={item.isActive ? 'bold' : 'regular'} ></Text>
                </StyledTabMenuItems>

            }) : null
        }

    </StyledTabMenu>
}

export default TabMenu;