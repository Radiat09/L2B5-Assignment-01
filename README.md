# TypeScript Mastery Repository

Welcome to my TypeScript learning journey! This repository showcases my understanding of TypeScript concepts through both explanatory content and practical assignments.

## 📚 Blog Content

### Type Inference in TypeScript

TypeScript has the extraordinary ability to automatically detect or assign types to variables even when you don't explicitly declare them.

**Examples:**

```typescript
let age = 25; // TypeScript infers `age` as `number`
let name = "Alice"; // TypeScript infers `name` as `string`
const isActive = true; // TypeScript infers `isActive` as `boolean`
```

Here, TypeScript automatically assigns types to age, name, and isActive without requiring : number, : string, or : boolean.

### Union and Intersection Types

#### Union Types:

Allow a variable to hold one of several possible types.

```typescript
function printId(id: number | string) {
  console.log(`ID: ${id}`);
}
```

#### Intersection Types:

Combine multiple types into one super type.

```typescript
type User = {
  name: string;
  age: number;
};

type Admin = {
  role: "admin";
  permissions: string[];
};

type AdminUser = User & Admin; // Must have ALL properties

const superUser: AdminUser = {
  name: "Alice",
  age: 30,
  role: "admin",
  permissions: ["delete", "ban_users"],
};
```

### 🚀 Try It Yourself!

```typescript
type A = { a: number };
type B = { b: string };
type C = A | B; // Must have `a` OR `b`  [Union]
type D = A & B; // Must have `a` AND `b` [Intersection]
```
