import {FC} from "react";
import {Icon} from "../../Icon/Icon";
import arrowUp from "../../svg/arrowUp.svg";
import arrowDown from "../../svg/arrowDown.svg";
import remove from "../../svg/remove.svg";
import styles from "./DropDownHeader.module.css";

type DropDownHeaderType = {
    selectedOptions: string[];
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    toggleOption: (option: string) => void;
    showIcon?: boolean;
}

export const DropDownHeader: FC<DropDownHeaderType> = ({ selectedOptions,
                                                         isOpen,
                                                         setIsOpen,
                                                         toggleOption,
                                                         showIcon
                                                       }) => {

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleRemoveOptionClick = (label: string) => {
        setIsOpen(isOpen);
        toggleOption(label);
    };

    return (
        <div className={styles.header}>
            <div className={styles.selectedOptions}>
                {selectedOptions.map((label) => (
                    <span key={label} className={styles.selectedOption}>
                            {label}
                        <span className={styles.removeOption} onClick={() => handleRemoveOptionClick(label)}>
                            <Icon src={remove} />
                        </span>
                    </span>
                ))}
            </div>
            <div onClick={toggleDropdown} className={styles.arrow}>
                {showIcon && isOpen
                    ? <div>
                        <Icon src={arrowDown} />
                    </div>
                    : <div>
                        <Icon src={arrowUp} />
                    </div>
                }
            </div>
        </div>
    )
}