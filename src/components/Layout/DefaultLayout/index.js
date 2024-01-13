import clsx from "clsx";
import styles from "./DefauLayout.module.scss"
import Header from "~/components/Layout/components/Header";
import Sidebar from "./Sidebar";

function DefaultLayout({children}) {
    return ( 
        <div className={clsx(styles.wapper)}>
            <Header/>
            <div className={clsx(styles.container)}>
                <Sidebar/>
                <div className={clsx(styles.content)}>{children}</div>
            </div>
        </div>
     );
}

export default DefaultLayout;