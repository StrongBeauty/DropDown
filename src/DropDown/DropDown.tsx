import {FC, memo, useMemo, useState, useCallback} from "react";
import {OptionType} from "./types";
import {DropdownItem} from "./DropDownItem/DropDownItem";
import styles from "./DropDown.module.css";
import {DropDownHeader} from "./DropDownHeader/DropDownHeader";
import search from "../svg/search.svg";
import {Icon} from "../Icon/Icon";

type DropDownProps = {
    options: OptionType[];
    multiSelect?: boolean;
    showIcon?: boolean;
}

export const DropDown: FC<DropDownProps> = memo(({ options,
                                                             multiSelect,
                                                             showIcon,
                                                           }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [searchText, setSearchText] = useState<string>("");

    const toggleOption = useCallback((option: string) => {
        if (multiSelect) {
            if (selectedOptions.some((label) => label === option)) {
                    setSelectedOptions(selectedOptions.filter((label) => label !== option));
                } else {
                    setSelectedOptions([...selectedOptions, option]);
                }
        } else {
            if (selectedOptions[0] === option) {
                setSelectedOptions([]);
            } else {
                setSelectedOptions([option]);
                setIsOpen(true);
            }
        }
    }, [multiSelect, selectedOptions, setIsOpen]);

    const filteredOptions = useMemo(() => {
        const searchTextLower = searchText.toLowerCase();
        return options.filter((option) => option.label.toLowerCase().includes(searchTextLower));
    }, [options, searchText]);


    return (
        <div className={styles.dropdown}>
            <div className={styles.label}>Язык</div>
            <DropDownHeader selectedOptions={selectedOptions}
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            toggleOption={toggleOption}
                            showIcon={showIcon}
            />
            {isOpen && (
                <div className={styles.options}>
                    <div className={styles.search}>
                        <div className={styles.icon}>
                            <Icon src={search} />
                        </div>
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="Поиск..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </div>
                    <ul>
                        {filteredOptions.map((option) => (
                            <DropdownItem
                                key={option.label}
                                icon={option.icon}
                                label={option.label}
                                selected={selectedOptions.some((label) => label === option.label)}
                                onSelect={toggleOption}
                                showIcon={showIcon}
                            />
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
});
