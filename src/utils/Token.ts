export default class Token {
  private token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2FpbyIsImlhdCI6MTUxNjIzOTAyMn0.wzd1YBZ7ikIDTm5ry2rDJwVq3mtcBncVzvYrS4B-hcE";

  getToken() : string {
    return this.token;
  }
}