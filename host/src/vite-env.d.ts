/// <reference types="vite/client" />

declare module "marketing/Counter" {
  const Counter: React.ComponentType<React.PropsWithChildren<object>>;
  export default Counter;
}

declare module "uk-kit/Card" {
  const Card: React.ComponentType<{
    title?: string;
    description?: string;
    children?: React.ReactNode;
  }>;
  export default Card;
}
declare module "uk-kit/Button" {
  const Button: React.ComponentType<
    React.ButtonHTMLAttributes<HTMLButtonElement>
  >;
  export default Button;
}
