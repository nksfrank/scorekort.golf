import { useMemo } from "react";

type Props<T> = {
  when: T | false | undefined | null;
  fallback?: JSX.Element | null;
  children: JSX.Element | ((item: T) => JSX.Element | null);
};
export function Show<T>({
  when,
  fallback = null,
  children,
}: Props<T>): JSX.Element | null {
  const condition = useMemo(
    () => Boolean(Array.isArray(when) ? when.length : when),
    [when]
  );
  return useMemo(
    () =>
      condition === false
        ? fallback
        : typeof children === "function"
        ? children(when as NonNullable<T>)
        : children,
    [condition, fallback, children, when]
  );
}
