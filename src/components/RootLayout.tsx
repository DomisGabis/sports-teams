import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import styles from './RootLayout.module.css';
import { useState, type ReactNode } from "react";
import MenuContext from "./MenuContext";
import Menu from "./Menu";

function RootLayout() {
    const [leftSectionContent, setLeftSectionContent] = useState<ReactNode>(null);
    const [centerSectionContent, setCenterSectionContent] = useState<ReactNode>(null);
    const [rightSectionContent, setRightSectionContent] = useState<ReactNode>(null);
    
    return (
        <div className={styles.root}>
            <MenuContext.Provider value={{ leftSectionContent, centerSectionContent, rightSectionContent, setLeftSectionContent, setCenterSectionContent, setRightSectionContent }}>
                <Menu />
                <div className={styles.pageContent}>
                    <Outlet />
                </div>
                <Footer />
            </MenuContext.Provider>
        </div>
    )
}

export default RootLayout;