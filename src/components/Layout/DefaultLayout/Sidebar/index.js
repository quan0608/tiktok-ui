import clsx from "clsx";
import styles from "./Sidebar.module.scss"


function Sidebar() {
    return ( <div className={clsx(styles.wapper)}>
        <h2>SideBar</h2>
    </div> );
}

export default Sidebar;