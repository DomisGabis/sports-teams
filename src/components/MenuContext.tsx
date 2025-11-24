import { createContext, type ReactNode } from "react";

type MenuContextType = {
    leftSectionContent: ReactNode;
    centerSectionContent: ReactNode;
    rightSectionContent: ReactNode;
    setLeftSectionContent: (node: ReactNode) => void;
    setCenterSectionContent: (node: ReactNode) => void;
    setRightSectionContent: (node: ReactNode) => void;
};

const MenuContext = createContext<MenuContextType>({
    leftSectionContent: <></>,
    centerSectionContent: <></>,
    rightSectionContent: <></>,
    setLeftSectionContent: () => {},
    setCenterSectionContent: () => {},
    setRightSectionContent: () => {},
});

export default MenuContext