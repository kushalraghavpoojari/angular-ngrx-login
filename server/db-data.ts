export const USERS = {
    1: {
      id: 1,
      email: 'test1404@gmail.com',
      password: 'test'
    }
  
};

export function authenticate(email: string, password: string) {
    const user: any = Object.values(USERS).find(user => user.email === email);
  
    if (user && user.password == password) {
      return user;
    } else {
      return undefined;
    }
}