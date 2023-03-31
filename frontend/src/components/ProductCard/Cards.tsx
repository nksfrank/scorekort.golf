import styles from "./Cards.module.css";

type CardsProps<T> = {
  items: T[];
  children: (item: T, index: number, array: T[]) => JSX.Element;
};

export function Cards<T extends { key: string | number }>({
  items,
  children,
}: CardsProps<T>) {
  return (
    <div className={styles.cards}>
      {items.map((item, index, arr) => (
        <div key={item.key} className={styles.cell}>
          {children(item, index, arr)}
        </div>
      ))}
    </div>
  );
}
