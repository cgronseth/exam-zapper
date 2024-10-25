export enum MenuItemType {
    Home = 0,
    NewTest,
    EditTest,
    RunTest
}

export interface MenuItem {
    type: MenuItemType;
    title: string;
    testId?: number;
}

export interface MenuItems extends Array<MenuItem> {
}