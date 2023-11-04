import React, {FC, memo, useCallback} from "react";
import {Icon} from "../../Icon/Icon";
import styles from "./DropDownItem.module.css";
import check from "../../svg/check.svg"

type DropdownItemProps = {
    icon: string;
    label: string;
    selected: boolean;
    onSelect: (label: string) => void;
    showIcon?: boolean;
}

export const DropdownItem: FC<DropdownItemProps> = memo(({ icon,
                                                                     label,
                                                                     selected,
                                                                     onSelect,
                                                                     showIcon
                                                                  }) => {
    const handleItemClick = useCallback(() => {
        onSelect(label);
    }, [onSelect, label]);

    return (
        <li className={styles.item}
            onClick={handleItemClick}
        >
            {showIcon
                && <div className={styles.icon}>
                       <Icon src={icon} />
                   </div>
            }
            {label}
            <div className={`${styles.checkbox} ${selected && styles.checked}`}>
                {selected ? <Icon src={check} /> : null}
            </div>
        </li>
    );
});