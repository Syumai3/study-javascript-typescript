// interface User {
//     id: number;
//     name: string;
//     email: string;
//   }

//   // ここに ReadOnlyUser 型を作成してください。
//   type ReadOnlyUser = {
//     readonly [K in keyof User]:User[K]
//   }
//   type ReadOnlyUser = {
//     readonly [key in keyof User]: User[key];
//   };

//   この違いはなんですか？

//   あと、type と interface の違いを教えてください

//   type ReadOnlyUser = {
//     readonly [K in keyof User]: User[K];
//   };

//   interface Product {
//     productId: number;
//     title: string;
//     price: number;
//   }

//   // ここに OptionalProduct 型を作成してください。
//    type  OptionalProduct = {
//     [K in keyof Product]?:Product[K]
//    }

//    interface Config {
//     darkMode: boolean;
//     userId: number;
//     username: string;
//   }

//   // ここに AdjustedConfig 型を作成してください。

//   type AdjustedConfig = {
//     [K in keyof Config]: Config[K] extends boolean ? Config[K] : Config[K] | undefined
//   }
//   type Keys = 'first' | 'second' | 'third';

// // ここに Flags 型を作成してください。

// type Flags = {
//     [K in Keys]:boolean
// }

// 問題１
// interface PartialPerson {
//     name?: string;
//     age?: number;
//     email?: string;
//   }

//   // ここに RequiredPerson 型を作成してください。
//   type RequiredPerson = {
//    [K in keyof PartialPerson]-?:PartialPerson[K]
//   }

//   問題２
//   interface  Employee {
//     name: string;
//     position: string;
//     salary: number;
//   }

//   // ここに UpdatedEmployee 型を作成してください。
//  type UpdatedEmployee = {
//     [K in keyof Employee]: K extends "salary" ? string : Employee[K]
//  }

//  問題3
//  interface Menu {
//     burger: boolean;
//     fries: boolean;
//     soda: boolean;
//   }

//   // ここに PrefixedMenu 型を作成してください。
//  type PrefixedMenu = {
//  [K in keyof Menu as `item${K}`]:Menu[K]
//  }

//  type Dimensions = {
//     width: number;
//     height: number;
//     depth: number;
//   }

//   // ここに関数を作成してください。

//   type Dimensions
