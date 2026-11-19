export interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  category: string;
  badge?: string;
}

export interface CartItem extends Product {
  amount: number;
}
