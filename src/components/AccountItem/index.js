import clsx from 'clsx';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function AccountItem() {
    return (
        <div className={clsx(styles.wrapper)}>
            <img
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/48c532978f6a8fd5d75cae1209f3c640~c5_300x300.webp?lk3s=a5d48078&x-expires=1704891600&x-signature=yd9Y4UwU%2FLVBZmYigaGgWBWCTWg%3D"
                alt="Hoaa"
                className={clsx(styles.avatar)}
            />
            <div className={clsx(styles.info)}>
                <div className={clsx(styles.name)}>
                    <h4>Tran Viet Quan</h4>
                    <FontAwesomeIcon className={clsx(styles.check)} icon={faCircleCheck} />
                </div>
                <span className={clsx(styles.username)}>viet.quan</span>
            </div>
        </div>
    );
}

export default AccountItem;
