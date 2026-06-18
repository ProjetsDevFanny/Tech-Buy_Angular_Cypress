import { Category } from "./category.model";

export class Product {
  public id: number | null;
  public name: string | null;
  public description: string | null;
  public shortDescription: string | null;
  public image: string | null;
  public category: Category | null;
  public reference: string | null;
  public price: number | null;
  public quantity: number = 0;
  public category_id: number | null;
  public best: boolean | null;
  public suggested: boolean | null;

  public constructor({
    id = null,
    name = null,
    description = null,
    shortDescription = null,
    image = null,
    reference = null,
    price = null,
    category = null,
    category_id = null,
    best = null,
    suggested = null
  } = {}) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.reference = reference;
    this.category = category;
    this.category_id = category_id;
    this.price = price;
    this.shortDescription = shortDescription;
    this.image = image;
    this.best = best;
    this.suggested = suggested;
  }
}
