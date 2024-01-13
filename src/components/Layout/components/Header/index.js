import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faFlushed,
    faMagnifyingGlass,
    faPlus,
    faPlusSquare,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import Tippy from '@tippyjs/react/headless';

import Button from '~/components/Layout/Button';
import styles from './Header.module.scss';
import images from '~/assets/img';
import AccountItem from '~/components/AccountItem';
import { Wapper as PropperWrapper } from '~/components/Popper';

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 3000);
    }, []);

    return (
        <header className={clsx(styles.wapper)}>
            <div className={clsx(styles.inner)}>
                <div className={clsx(styles.logo)}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={clsx(styles.searchResults)} {...attrs}>
                            <PropperWrapper>
                                <h4 className={clsx(styles.searchTitle)}>Account</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PropperWrapper>
                        </div>
                    )}
                >
                    <div className={clsx(styles.search)}>
                        <input placeholder="Tìm kiếm" spellCheck={false} />
                        <button className={clsx(styles.clear)}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <button className={clsx(styles.loading)}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>
                        <button className={clsx(styles.searchBtn)}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={clsx(styles.action)}>
                    <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>Tải lên</Button>
                    <Button primary>Đăng nhập</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
