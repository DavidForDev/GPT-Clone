export interface UserType {
  id: string;
  email: string;
  name: string;
}

export interface CreateUserTypes {
  newUserInput: {
    name: string;
    email: string;
    password: string;
  };
}

export interface SignInTypes {
  signInInput: {
    email: string;
    password: string;
  };
}

export interface RemoveAccountTypes {
  userId: string;
}
