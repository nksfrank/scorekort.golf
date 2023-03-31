import { cloneElement, useMemo } from "react";

type Props = {
  when: boolean | (() => boolean);
  wrap: JSX.Element;
  children: JSX.Element;
};
export function Wrap({ when = true, wrap, children }: Props): JSX.Element {
  return useMemo(() => {
    if (typeof when === "function" ? when() : when) {
      return cloneElement(wrap, wrap.props, children);
    }
    return children;
  }, [children, when, wrap]);
}
