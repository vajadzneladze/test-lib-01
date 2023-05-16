export interface TabMenuProps {
    data: ITabMenuItem[],
    setActiveHandler?: (index: number, data: ITabMenuItem[]) => void
    flexDir?: 'row' | 'column' | undefined
}


export interface ITabMenuItem {
    label: string,
    isActive: boolean,
}