import { Cart, defaultCart } from "./models/Cart";
import { Product } from "./models/Product";
import { User } from "./models/User";

export interface CheckoutResult {
  result: "success" | "cancel" | "failure";
}

export interface UserPicture {
  picture: string;
}

export class ShopAPI {
  static getProducts(): Product[] {
    const res = require("./../assets/data.json");
    const { products } = res;
    return products.sort(() => 0.5 - Math.random());
  }

  static getUser(): User {
    const res = require("./../assets/data.json");
    const { user } = res;
    const { image } = require("./../assets/imageEncoded.json");
    return { ...user, image };
  }

  static getStubCart(): Cart {
    const res = require("./../assets/data.json");
    return { ...defaultCart, id: res.user.id };
  }

  static checkout(): CheckoutResult {
    return { result: "success" };
  }
}
