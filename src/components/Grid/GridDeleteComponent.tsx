import React from 'react';
import { StyledGridDeleteSection } from "./StyledGrid"
import Icon from '../Icon/Icon';
import Text from '../Text/Text';

export interface GridDeleteComponentProps {
    selectedRowKeys: any[],
    handleDeleteRows: (e: any) => void
}

const GridDeleteComponent = ({ selectedRowKeys, handleDeleteRows }: GridDeleteComponentProps) => {

    return (

        <StyledGridDeleteSection
            style={{
                visibility: selectedRowKeys.length > 0 ? "visible" : "hidden",
            }}
        >
            <div onClick={() => handleDeleteRows(selectedRowKeys)}>
                <Icon name="TrashOutlined" />
            </div>
            <Text
                text={`Delete ${selectedRowKeys.length} Checked Item`}
                variant="p3"
                weight="medium"
            />
        </StyledGridDeleteSection>
    )

}


export default GridDeleteComponent;