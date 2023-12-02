import { CreateUserHelper } from "../models/APIHelpers";

describe('User Signup API Test', () => {
  it('should sign up a new user', () => {
    const user = {
      "firstname": "Mariia",
      "lastname": "Ivanisova",
      "username": "Maryyyyyy",
      "password": "123123Mariia",
      "confirmPassword": "123123Mariia",
      "gender": "Female"
    };
    const createUserHelper = new CreateUserHelper();
    createUserHelper.signupUser(user);
  });
});