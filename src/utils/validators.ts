export const validateEmail = (email: string): boolean => {
  const regex = /^([\p{L}+\w+\-?]+\.?)*[\w\p{L}]+@(([a-z\d]+[a-z\d\-]?[a-z\d]+)\.)+([a-z]{2,}|\d{3})$/iu
  return regex.test(email)
}
