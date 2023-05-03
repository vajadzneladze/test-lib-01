import React from 'react';
import { StyledSettings, StyledSettingsAction, StyledSettingsActionsWrapper } from './StyledSettings';
import { SettingsProps } from './Settings.types';
import Icon from '../Icon/Icon';


const Settings = ({ isOpen, actionList, clickHandler }: SettingsProps) => {



    return <StyledSettings open={isOpen} onClick={e => e.stopPropagation()}>
        <StyledSettingsActionsWrapper>

            {
                actionList && actionList.length > 0 && actionList.map(({ icon, label, action }: any, index: any) => {

                    return <StyledSettingsAction key={index} className={action} onClick={() => clickHandler(action)}>
                        <Icon name={icon || 'Empty'} size="xs" />
                        <p> {label} </p>
                    </StyledSettingsAction>
                })
            }

        </StyledSettingsActionsWrapper>
    </StyledSettings>
}


export default Settings;