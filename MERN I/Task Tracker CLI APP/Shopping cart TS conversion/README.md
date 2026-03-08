# TS-Shopping-Cart
# TypeScript Shopping Cart with Utility Types

A type-safe Shopping Cart system built using **TypeScript**.
This project focuses on improving code reliability and maintainability using TypeScript's powerful **type system and utility types**.

It is a TypeScript version of the JavaScript shopping cart project, enhanced with strict typing and advanced type features.

## Features

* Type-safe product creation
* Cart management with strict types
* Product updates using controlled property access
* Order processing system
* Strong typing across the entire project

---

## TypeScript Concepts Demonstrated

This project highlights several advanced TypeScript concepts:

* **Generics with constraints**
* **Mapped types**
* **Utility types**

  * `Partial`
  * `Pick`
  * `Record`
* `ReturnType` for deriving function return types
* Readonly type mapping
* Type-safe object manipulation

---

## Example Output

After compiling TypeScript and running the project:

```json
{
  "success": true,
  "items": [
    {
      "product": {
        "id": "1",
        "name": "Laptop",
        "price": 1200,
        "category": "electronics"
      },
      "quantity": 2
    }
  ]
}
```

---

## How to Run the Project

Install dependencies:

```
npm install
```

Compile TypeScript:

```
npx tsc
```

Run the compiled project:

```
node dist/main.js
```

---

## Purpose of the Project

This project demonstrates how **TypeScript enhances JavaScript applications** by enforcing strict typing, improving maintainability, and reducing runtime errors.
