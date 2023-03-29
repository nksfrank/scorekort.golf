import { HTMLAttributes, PropsWithChildren } from "react";
import styles from "./Button.module.css";

export function Button({
  children,
  ...attr
}: PropsWithChildren<HTMLAttributes<HTMLButtonElement>>) {
  return (
    <button className={styles.button} {...attr}>
      {children}
    </button>
  );
}
