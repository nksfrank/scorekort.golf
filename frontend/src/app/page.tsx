import styles from "./page.module.css";
import * as ProductCard from "@/components/ProductCard";

const products = [
  {
    id: "1",
    title: "Sleek Marble Coffee Table",
    description:
      "Add a touch of elegance to your living room with this sleek marble coffee table. Made from high-quality materials and designed to last, this table is perfect for entertaining guests or relaxing with your favorite book.",
    images: [
      {
        src: "https://picsum.photos/seed/sleek/500.webp",
        alt: "Sleek Marble Coffee Table",
        width: 500,
        height: 500,
      },
      {
        src: "https://picsum.photos/seed/marbel/500.webp",
        alt: "Sleek Marble Coffee Table",
        width: 500,
        height: 500,
      },
    ],
    price: {
      original: 500,
      current: 399,
    },
    rating: 4.5,
    reviews: 10,
  },
  {
    id: "2",
    title: "Vintage Leather Sofa",
    description:
      "Bring some vintage charm to your home with this beautiful leather sofa. Crafted from high-quality materials and designed with comfort in mind, this sofa is perfect for relaxing after a long day.",
    images: [
      {
        src: "https://picsum.photos/seed/vintage/500.webp",
        alt: "Vintage Leather Sofa",
        width: 500,
        height: 500,
      },
    ],
    price: {
      current: 899,
    },
    rating: 4.2,
    reviews: 5,
  },
  {
    id: "3",
    title: "Rustic Wood Dining Table",
    description:
      "Gather around this rustic wood dining table for a family meal or a game night with friends. Made from high-quality wood and designed to last, this table is the perfect addition to any home.",
    images: [
      {
        src: "https://picsum.photos/seed/rustic/500.webp",
        alt: "Rustic Wood Dining Table",
        width: 500,
        height: 500,
      },
      {
        src: "https://picsum.photos/seed/wood/500.webp",
        alt: "Rustic Wood Dining Table",
        width: 500,
        height: 500,
      },
    ],
    price: {
      current: 699,
    },
    rating: 4.7,
    reviews: 20,
  },
  {
    id: "4",
    title: "Modern Glass Pendant Lights",
    description:
      "Illuminate your home with these modern glass pendant lights. Made from high-quality materials and designed to add a touch of elegance to any room, these lights are perfect for creating a warm and inviting atmosphere.",
    images: [
      {
        src: "https://picsum.photos/seed/moden/500.webp",
        alt: "Modern Glass Pendant Lights",
        width: 500,
        height: 500,
      },
      {
        src: "https://picsum.photos/seed/glass/500.webp",
        alt: "Modern Glass Pendant Lights",
        width: 500,
        height: 500,
      },
    ],
    price: {
      current: 149,
    },
    rating: 3.8,
    reviews: 2,
  },
  {
    id: "5",
    title: "Luxury Egyptian Cotton Sheets",
    description:
      "Experience the ultimate in comfort with these luxury Egyptian cotton sheets. Made from the finest materials and designed to last, these sheets are the perfect addition to any bedroom.",
    images: [
      {
        src: "https://picsum.photos/seed/luxury/500.webp",
        alt: "Luxury Egyptian Cotton Sheets",
        width: 500,
        height: 500,
      },
      {
        src: "https://picsum.photos/seed/egyptian/500.webp",
        alt: "Luxury Egyptian Cotton Sheets",
        width: 500,
        height: 500,
      },
      {
        src: "https://picsum.photos/seed/cotto/500.webp",
        alt: "Luxury Egyptian Cotton Sheets",
        width: 500,
        height: 500,
      },
    ],
    price: {
      current: 299,
    },
    rating: 4.9,
    reviews: 16,
  },
];
export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        {products.map((product) => (
          <ProductCard.Card
            key={product.id}
            product={product}
            image={<ProductCard.Images />}
            info={
              <ProductCard.Info>
                <ProductCard.Title />
                <ProductCard.Description />
                <ProductCard.Rating />
                <ProductCard.Reviews />
                <ProductCard.Price />
              </ProductCard.Info>
            }
            actions={<ProductCard.AddToCart />}
          />
        ))}
      </div>
    </main>
  );
}
