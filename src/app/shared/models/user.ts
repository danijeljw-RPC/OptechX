import { UserParams } from "../interface/userParams";

export class User {
  id: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: string;
  country: string;
  jwtToken: string;

  constructor(params: UserParams = {}) {
    Object.assign(this, params);
  }
}
