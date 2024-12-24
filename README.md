# Type Error in TypeScript Function

This repository demonstrates a common type error in TypeScript when working with functions that expect specific data types as arguments.  The `add` function is defined to take two numbers as input and return their sum. However, attempting to pass a string as an argument results in a type error.

The solution showcases how to properly handle potential type mismatches to prevent unexpected errors during runtime.

## Bug

The TypeScript compiler will correctly identify the type error because we attempt to pass a string ('3') to a parameter that expects a number.

## Solution

Implementing input validation is a solution, such as type guards or using conditional logic. This will check the type before performing operations, or using a more robust type definition which can handle both numbers and strings. 