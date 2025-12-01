# TypeScript-এ Interface এবং Type-এর পার্থক্য

TypeScript-এ interface এবং type—দুটোই মূলত ডেটা স্ট্রাকচার বা টাইপ ডিফাইন করতে ব্যবহৃত হয়। কাজ অনেকটা একই হলেও এদের ব্যবহারে কিছু সূক্ষ্ম ও গুরুত্বপূর্ণ পার্থক্য রয়েছে। নিচে বিষয়গুলো সহজভাবে আলোচনা করা হলো:

## ১. মূল ধারণা (Basic Concept)

Interface এবং Type উভয়ই ডেটার আকৃতি (shape) বা structure প্রি-ডিফাইন (predefine) করতে ব্যবহৃত হয়। যেমন, কোনো object এ যে সকল property থাকবে, তাদের টাইপ কী হবে এগুলো নির্ধারণ করার জন্য ব্যবহার করা হয়।

## ২. সিনট্যাক্স (Syntax)

### Interface

Interface এ কখনোই `=` সাইন ব্যবহার করা হয় না। এটি সরাসরি অবজেক্টের blueprint তৈরি করে।

```ts
interface Car {
  brand: string;
  model: string;
}
```

### Type

Type লিখতে `=` ব্যবহার করা হয়।

```ts
type Car = {
  brand: string;
  model: string;
};
```

**নোট:** কনভেনশন অনুযায়ী দুটোরই নাম Capital letter দিয়ে শুরু করা ভালো, যেমন `Car`, `User` ইত্যাদি।

## ৩. এক্সটেন্ড করা (Extending)

একটি টাইপের সাথে নতুন প্রপার্টি যুক্ত করার পদ্ধতি দুই ক্ষেত্রে ভিন্ন।

### Interface

Interface এক্সটেন্ড করতে `extends` কিউওয়ার্ড ব্যবহার করা হয়:

```ts
interface Car {
  brand: string;
  model: string;
}

interface ElectricCar extends Car {
  battery: number;
}
```

### Type

Type এক্সটেন্ড করতে `&` (intersection) ব্যবহার করা হয়:

```ts
type Car = {
  brand: string;
};

type ElectricCar = Car & {
  battery: number;
};
```

## ৪. ডিক্লারেশন মার্জিং (Declaration Merging)

Interface এর একটি বিশেষ সুবিধা হলো এটি declaration merging সাপোর্ট করে। অর্থাৎ যদি একই নামে দুটি interface তৈরি করা হয়, TypeScript অটোমেটিক্যালি সেগুলোকে একটি ইন্টারফেস হিসেবে ব্যবহার করে।

```ts
interface Car {
  brand: string;
}

interface Car {
  model: string;
}

const car: Car = { brand: "BMW", model: "M5" };
```

Type-এর ক্ষেত্রে মার্জ হয় না। একই নামে দুইবার টাইপ declare করলে code এ এরর (Error) আসবে।

## ৫. জটিল টাইপ (Complex Types)

Type alias দিয়ে অনেক জটিল টাইপ তৈরি করা যায়, যা Interface দিয়ে সম্ভব নয়। যেমন:

* Union type
* Intersection
* Conditional types
* Primitive alias

উদাহরণ:

```ts
type Status = "success" | "error" | "loading";
type Point = [number, number]; // Tuple
```

## ৬. একনজরে পার্থক্য (Comparison Table)

| বৈশিষ্ট্য     | Interface                | Type                                  |
| ------------- | ------------------------ | ------------------------------------- |
| Syntax        | = চিহ্ন লাগে না          | = চিহ্ন লাগে                          |
| Extending     | extends ব্যবহার করে      | & (Intersection) ব্যবহার করে          |
| Merging       | সাপোর্ট করে (Auto merge) | সাপোর্ট করে না (Error দেয়)           |
| Complex Types | অবজেক্টের জন্য ভালো      | Union, Tuple, Primitive হ্যান্ডেল করে |

## ৭. কোনটা কখন ব্যবহার করবেন? (Usage Guidelines)

### ✅ Interface ব্যবহার করুন যখন:

* আপনি অবজেক্ট ওরিয়েন্টেড স্টাইলে (OOP) কোড লিখছেন।
* ডিক্লারেশন মার্জিং-এর সুবিধা নিতে চান।

### ✅ Type ব্যবহার করুন যখন:

* Union, Intersection বা Conditional টাইপ তৈরি করতে হয়।
* Primitive টাইপের জন্য এলিয়াস (Alias) তৈরি করতে হয়।

## ৮. উপসংহার

Interface আর Type দুটোই দরকারি। অনেক সময় এরা একই কাজ করে, কিন্তু কাজের ধরন আলাদা। কোনটা ব্যবহার করবেন, সেটা নির্ভর করে ডেভেলপারের ওপর। প্রজেক্টের প্রয়োজন বা টিমের পছন্দ অনুযায়ী ডেভেলপাররা উভয়ই ব্যবহার করে থাকে।  

________________________________________

# TypeScript এ `keyof` Keyword এর ব্যবহার 

TypeScript এ `keyof` keyword টি ব্যবহার করা হয় কোনো object-এর key বা property গুলো অন্য জায়গায় type হিসেবে ব্যবহার করার জন্য।   

## উদাহরণ:

```ts
type Car = {
  brand: string;
  model: string;
  year: number;
};

type CarProperties = keyof Car; // "brand" | "model" | "year"

const carKey: CarProperties = "model"; // valid
```

এভাবে keyof ব্যবহার করে আপনি object-এর structure অনুযায়ী আরও নিরাপদ এবং clean কোড লিখতে পারেন।

