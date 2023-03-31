"use client";
import { createStore } from "jotai";
import { Provider } from "jotai/react";
import Image from "next/image";
import { PropsWithChildren, useRef } from "react";
import { Show } from "../Show";
import { productAtom, useProduct } from "./context";
import type { Product } from "./types";
import styles from "./Card.module.css";
import { Button } from "../Button";

type Props = {
  product: Product;
  actions?: JSX.Element;
  info?: JSX.Element;
  image?: JSX.Element;
};

export function Card({ product, info, actions, image }: Props): JSX.Element {
  const store = useRef(
    (() => {
      const store = createStore();
      store.set(productAtom, product);
      return store;
    })()
  ).current;
  return (
    <Provider store={store}>
      <article className={styles.card}>
        <Show when={image}>
          {(image) => <div className={styles.imageArea}>{image}</div>}
        </Show>
        <Show when={info}>
          {(info) => <div className={styles.infoArea}>{info}</div>}
        </Show>
        <Show when={actions}>
          {(actions) => <div className={styles.actionArea}>{actions}</div>}
        </Show>
      </article>
    </Provider>
  );
}

export function Title() {
  const { title } = useProduct();
  return <h1 className={styles.title}>{title}</h1>;
}

export function Description() {
  const { description } = useProduct();
  return <div className={styles.description}>{description}</div>;
}

export function Rating() {
  const { rating = 0 } = useProduct();
  return (
    <div className={styles.rating}>
      {Array.from({ length: rating }, (_, i) => (
        <span key={i}>⭐️</span>
      ))}
    </div>
  );
}
export function Reviews() {
  const { reviews } = useProduct();
  return <div className={styles.reviews}>{reviews}</div>;
}
export function Price() {
  const { price } = useProduct();
  return (
    <div className={styles.price}>
      <Show when={price?.discount}>
        {(discount) => <span>{discount}</span>}
      </Show>
      <Show when={price?.original}>{(original) => <s>{original}</s>}</Show>
      <h2>{price?.final}</h2>
    </div>
  );
}
export function Images() {
  const { images } = useProduct();
  return (
    <div className={styles.images}>
      {images?.map((img) => (
        <Image key={img.src} {...img} alt={img.alt} />
      ))}
    </div>
  );
}

export function Info({ children }: PropsWithChildren<unknown>) {
  return <div className={styles.info}>{children}</div>;
}

export function Actions({ children }: PropsWithChildren<unknown>) {
  return <div className={styles.actions}>{children}</div>;
}

export function Quantity() {
  const { id } = useProduct();
  return (
    <div>
      <label htmlFor={`${id}-quantity`}>Quantity: </label>
      <input id={`${id}-quantity`} name="quantity" />
    </div>
  );
}
export function AddToCart() {
  const { id } = useProduct();
  const handleClick = () => {
    console.log("Product added to cart", id);
  };
  return <Button onClick={handleClick}>Add To Cart</Button>;
}
