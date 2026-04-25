export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    description: "High-quality Bluetooth headphones with noise cancellation",
    price: 199.99,
    category: "Electronics",
    image: "https://placehold.co/100x100/png?text=Headphones",
  },
  {
    id: "2",
    name: "Smart Watch",
    description: "Fitness tracker with heart rate monitor",
    price: 299.99,
    category: "Electronics",
    image: "https://placehold.co/100x100/png?text=Watch",
  },
  {
    id: "3",
    name: "Running Shoes",
    description: "Lightweight running shoes with cushioned sole",
    price: 129.99,
    category: "Sports",
    image: "https://placehold.co/100x100/png?text=Shoes",
  },
  {
    id: "4",
    name: "Coffee Maker",
    description: "Automatic drip coffee maker with timer",
    price: 79.99,
    category: "Home",
    image: "https://placehold.co/100x100/png?text=Coffee",
  },
  {
    id: "5",
    name: "Laptop Stand",
    description: "Ergonomic aluminum laptop stand",
    price: 49.99,
    category: "Office",
    image: "https://placehold.co/100x100/png?text=Stand",
  },
];