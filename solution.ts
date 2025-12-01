const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return value === true ? false : true;
  }
};

const getLength = (value: string | any[]): number | undefined => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type Items = {
  title: string;
  rating: number;
};

const filterByRating = (items: Items[]): Items[] => {
  return items.filter((item) => item.rating >= 4);
};

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
const filterActiveUsers = (user: User[]): User[] => {
  return user.filter((userInfo) => userInfo.isActive === true);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available:`,
    book.isAvailable === true ? `Yes` : `No`
  );
};

const getUniqueValues = (
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] => {
  const result: (string | number)[] = [];

  for (let i = 0; i < arr1.length; i++) {
    let exist: boolean = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j] === arr1[i]) {
        exist = true;
        break;
      }
    }
    if (exist != true) {
      result[result.length] = arr1[i];
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    let exist: boolean = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j] === arr2[i]) {
        exist = true;
        break;
      }
    }
    if (exist != true) {
      result[result.length] = arr2[i];
    }
  }

  return result;
};

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (product: Product[]): number => {
  if (product.length === 0) {
    return 0;
  }
  const price = product.map(
    (item) =>
      (item.price - (item.price * (item.discount ?? 0)) / 100) * item.quantity
  );
  return price.reduce((total, current) => total + current, 0);
};
