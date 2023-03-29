"use client";
import { createStore } from "jotai";
import { Provider } from "jotai/react";
import Image from "next/image";
import { PropsWithChildren, useRef } from "react";
import { Show } from "../Show";
import { productAtom, useProduct } from "./context";
import type { Product } from "./types";
import { Button } from "../Button";

type Props = {
  product: Product;
  actions?: JSX.Element;
  info?: JSX.Element;
  image?: JSX.Element;
};

export function Card({ product, info, actions, image }: Props): JSX.Element {
  const store = useRef(createStore()).current;
  store.set(productAtom, product);
  return (
    <Provider store={store}>
      <article>
        <Show when={image}>{image!}</Show>
        <Show when={info}>{info!}</Show>
        <Show when={actions}>{actions!}</Show>
      </article>
    </Provider>
  );
}

export function Title() {
  const { title } = useProduct();
  return <h1>{title}</h1>;
}

export function Description() {
  const { description } = useProduct();
  return <div>{description}</div>;
}

export function Rating() {
  const { rating = 0 } = useProduct();
  return (
    <div>
      {Array.from({ length: rating }, (_, i) => (
        <span key={i}>⭐️</span>
      ))}
    </div>
  );
}
export function Reviews() {
  const { reviews } = useProduct();
  return <div>{reviews}</div>;
}
export function Price() {
  const { price } = useProduct();
  return (
    <div>
      <Show when={price?.original}>{(original) => <s>{original}</s>}</Show>
      <h2>{price?.current}</h2>
    </div>
  );
}
export function Images() {
  const { images } = useProduct();
  return (
    <div>
      {images?.map((img) => (
        <Image key={img.src} {...img} alt={img.alt} />
      ))}
    </div>
  );
}

export function Info({ children }: PropsWithChildren<unknown>) {
  return <div>{children}</div>;
}

export function AddToCart() {
  const { id } = useProduct();
  const handleClick = () => {
    console.log("Product added to cart", id);
  };
  return (
    <div>
      <div>
        <label htmlFor={`${id}-quantity`}>Quantity: </label>
        <input id={`${id}-quantity`} name="quantity" />
      </div>
      <Button onClick={handleClick}>Add To Cart</Button>
    </div>
  );
}
