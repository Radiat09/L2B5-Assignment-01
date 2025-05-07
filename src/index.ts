//***  Solution 1 ***/

function formatString(input: string, toUpper: boolean = true): string {
  if (toUpper) {
    return input.toUpperCase();
  } else return input.toLowerCase();
}

// console.log(formatString("wassap", false));

//***  Solution 2 ***/
function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4.5);
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

// console.log(filterByRating(books));

//***  Solution 3 ***/
function concatenateArrays<T>(...arrays: T[][]): T[] {
  return ([] as T[]).concat(...arrays);
}

const a = [1, 2];
const b = [3, 4];
const c = [5];

// console.log(concatenateArrays(a, b, c));

//***  Solution 4 ***/
class Vehicle {
  constructor(
    private make: string,
    private year: number,
    public color: string,
    public isRunning: boolean
  ) {}

  getInfo() {
    return {
      make: this.make,
      year: this.year,
      color: this.color,
      isRunning: this.isRunning,
    };
  }
}

class Car extends Vehicle {
  constructor(
    make: string,
    year: number,
    color: string,
    isRunning: boolean,
    private model: string
  ) {
    super(make, year, color, isRunning);
  }

  getModel(): { model: string } {
    return { model: this.model };
  }
}

const myCar = new Car("Toyota", 2020, "Blackish Red", true, "Corolla");

// console.log(myCar.getInfo());
// console.log(myCar.getModel());

//***  Solution 5 ***/
function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else if (typeof value === "number") {
    return value * 2;
  } else return 404;
}

// console.log(processValue("hello"));
// console.log(processValue(10));

//***  Solution 6 ***/
interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }

  const prices = products.map((product) => product.price);
  const highestPrice = Math.max(...prices);

  const theExpensiveOne = products.find(
    (product) => product.price === highestPrice
  );

  return theExpensiveOne ?? null;
}

const products: Product[] = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 10 },
  { name: "Bag", price: 10 },
];
// console.log(getMostExpensiveProduct(products));
