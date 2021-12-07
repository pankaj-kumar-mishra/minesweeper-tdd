let t1: number;
let t2: boolean;
let t3: string;

// PART  TYPE
type User = {
  name: string;
  surname: string;
  age: number;
  isAdmin: boolean;
};

const user: User = {
  name: "Pankaj",
  surname: "Mishra",
  age: 27,
  isAdmin: true,
};

const multiply = (a: number, b: number): number => a * b;
multiply(10, 5);

// NOTE  better way using type function
type CalcFunc = (a: number, b: number) => number;
const mul: CalcFunc = (a, b) => a * b;
const div: CalcFunc = (a, b) => a / b;
const add: CalcFunc = (a, b) => a + b;
const sub: CalcFunc = (a, b) => a - b;

// PART  INTERFACE
interface BasicUser {
  name: string;
  surname: string;
  age: number;
  isAdmin: boolean;
  address?: string;
}

const user1: BasicUser = {
  name: "PK 1",
  surname: "Mishra",
  age: 27,
  isAdmin: true,
};
// combine new interface with parent interface (using extends)
interface AdvUser extends BasicUser {
  permissions: string[]; // generic call Array<string>
}
const user2: AdvUser = {
  name: "PK 1",
  surname: "Mishra",
  age: 27,
  isAdmin: true,
  permissions: ["manager", "operator", "instructor"],
  address: "India",
};

// PART  GENERICS
interface BasicUser2<A = boolean> {
  name: string;
  surname: string;
  age: number;
  isAdmin: A;
  address?: string;
}

const user3: BasicUser2 = {
  name: "PK 1",
  surname: "Mishra",
  age: 27,
  isAdmin: true,
};
const user4: BasicUser2<string> = {
  name: "PK 1",
  surname: "Mishra",
  age: 27,
  isAdmin: "yes",
};

const usersArr: BasicUser[] = [user1, user2, user3];

function getFirst<T>(arr: T[]): T {
  return arr[0];
}

getFirst<BasicUser>(usersArr);

// Combining both types (TYPES, INTERFACES, GENERICS, UNION)
type Gender = "male" | "female";

type UserAcc<A = number, G = Gender> = {
  account: A;
  gender: G;
};

type FullUser<A = number, G = string> = User & UserAcc<A, G>;

const bankUser: FullUser<number, Gender> = {
  name: "Pankaj 2",
  surname: "Mishra",
  age: 27,
  isAdmin: true,
  account: 1000,
  gender: "male",
};

// UNKNOWN, NEVER, TUPLE
const logFunc0 = (data: unknown): void => {
  const data2: unknown = data;
  console.log(data);
  console.log(data2);
  throw new Error("Bad");
};
const logFunc = (data: unknown): never => {
  const data2: unknown = data;
  console.log(data);
  console.log(data2);
  if (true) {
    console.log("success");
  }
  throw new Error("Bad");
};

type TupleAge = [Gender, Gender];

type Animal<A = number, G = TupleAge> = {
  age: A;
  gender: G;
};

const dog: Animal = {
  age: 5,
  gender: ["male", "female"],
};

// UTILITY
type BasicUserReadOnly = Readonly<BasicUser>;
type BasicUserRequired = Required<BasicUser>;
type BasicUserPartial = Partial<BasicUser>;
type BasicUserReadOnlyRequired = Readonly<Required<BasicUser>>;

interface DepartmentsForPermissions {
  depName: string;
  lvl: number;
}

const DeptsForPerms: Record<Gender, DepartmentsForPermissions> = {
  male: {
    depName: "A",
    lvl: 5,
  },
  female: {
    depName: "B",
    lvl: 3,
  },
};

// Omit uses to remove property(key)
type BasicUserWithoutPermissions = Omit<AdvUser, "permissions">;
type GenderWithoutMale = Exclude<Gender, "male">;
