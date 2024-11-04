import { Guid } from "guid-typescript";

export enum MenuItemType {
    Home = 0,
    NewTest,
    OpenTest,
    EditTest,
    RunTest
}

export interface IMenuItem {
    type: MenuItemType;
    title: string;
    examId?: Guid;
}

export interface MenuItems extends Array<IMenuItem> {
}

export class MenuItem {
    public static isEdit = (item: IMenuItem): boolean => {
        if (item.type === MenuItemType.NewTest || item.type === MenuItemType.EditTest) {
            return true;
        }
        return false;
    };
}