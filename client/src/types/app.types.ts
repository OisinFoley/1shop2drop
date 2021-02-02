export interface AuthenticatedUser extends UserDetails {}

/**
 * @description Simple User object excluding sensitive info,
 * intended for consumption in the web app
 * @todo Move me to a package
 * */
export interface UserDetails {
  id: string;
  email: string;
  displayName: string;
  dateJoined: Date;
}

/**
 * @description Abstraction of expected input for a login request
 * @todo Move me to a package
 * */
export interface LoginInput {
  email: string;
  password: string;
}

/**
 * @description Abstraction of expected response from a successful login
 * @todo Move me to a package
 * */
export interface LoginResponse {
  success: boolean;
  token: string;
}

/**
 * @description Represents Category of Shopping Items
 * */
export interface ShopCategory {
  id: number;
  title: string;
  routeName: string;
  items: ShopItem[];
}

/**
 * @description Represents a specific Shopping Item
 * */
export interface ShopItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

/**
 * @description Represents a specific Shopping Cart Item
 * @extends ShopItem
 * */
export interface ShoppingCartItem extends ShopItem {
  quantity: number;
}
