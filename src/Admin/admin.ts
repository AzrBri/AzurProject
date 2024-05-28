interface User {
  emailAddress: string;
  password: string;
}

const mockUser: User = {
  emailAddress: "admin",
  password: "123",
};

export const getUser = (): User => {
  return mockUser;
};