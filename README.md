# Be A Typescript Technocrat

## Lessons

### 1. **Primitive Types**
- Basic primitive types: `string`, `number`, `boolean`, `undefined`, `null`
- TypeScript special primitive types: `never`, `unknown`, `void`
- Type safety: prevents assigning wrong types (e.g., can't assign number to string variable)
- Type inference: TypeScript can implicitly determine types without explicit annotations
- Default `any` type when no type annotation is provided

### 2. **Non-Primitive Types**
- **Arrays**: Type-safe arrays using `string[]`, `number[]`, or union types `(string | number)[]`
- **Tuples**: Fixed-length arrays with specific types at each position `[string, number]`
- **Objects**: Structured objects with typed properties
  - Literal value types (specific constant values)
  - Optional properties using `?` operator
  - Readonly properties using `readonly` modifier

### 3. **Functions**
- **Normal functions**: Explicit parameter and return types
- **Arrow functions**: Modern syntax with type annotations
- **Methods**: Functions defined inside objects
- **Callback functions**: Functions passed as arguments (e.g., with `.map()`)
- Type annotations for parameters and return values

### 4. **Union and Intersection Types**
- **Union (`|`)**: Variables can be one of multiple types
  - Example: `type UserRole = "user" | "admin" | "guest"`
- **Intersection (`&`)**: Combines multiple types into one
  - Example: `type EmployeeManager = Employee & Manager` (has all properties from both)

### 5. **Type Aliases**
- Creating reusable type definitions with `type` keyword
- Naming convention: Always use capital letters
- Can be used for objects, functions, unions, and more
- Example: `type User = { id: number; name: string; }`

### 6. **Nullable, Unknown, and Never Types**
- **Nullable**: Union with `null` to allow null values `string | null`
- **Unknown**: Type-safe alternative to `any` - must check type before using
- **Never**: Represents values that should never occur (dead code, infinite loops)

### 7. **Destructuring**
- **Object destructuring**: Extract properties from objects with nested destructuring support
  - Example: `const { name: { firstName } } = user`
- **Array destructuring**: Extract values from arrays
  - Skipping elements: `const [first, , third] = array`
- Note: Don't use type annotations while destructuring

### 8. **Operators (? mark operators)**
- **Ternary operator**: `condition ? trueValue : falseValue`
- **Nullish coalescing (`??`)**: Returns right value if left is null/undefined (different from `||`)
- **Optional chaining (`?.`)**: Safely access nested properties that might not exist
  - Example: `user?.postalCode` returns undefined if postalCode doesn't exist

### 9. **Spread and Rest Operators**
- **Spread operator (`...`)**: 
  - Arrays: Merge arrays `[...arr1, ...arr2]`
  - Objects: Merge/copy objects `{ ...user, ...otherInfo }`
- **Rest operator (`...`)**: 
  - Collect multiple parameters into an array
  - Example: `function sendInvite(...friends: string[])`
  - Used in function parameters to accept variable number of arguments
