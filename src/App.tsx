import React, {FC} from "react";
import {DropDown} from "./DropDown/DropDown";
import {LANGUAGES} from "./const/const";
import styles from "./App.module.css";

export const App: FC = () => {
  return (
      <div className={styles.container}>
          <DropDown options={LANGUAGES}
               multiSelect
               showIcon
          />
      </div>
  );
}
