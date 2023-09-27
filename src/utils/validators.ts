export const validateEmail = (email: string): boolean => {
  const regex = /^([\p{L}+\w+\-?]+\.?)*[\w\p{L}]+@(([a-z\d]+[a-z\d\-]?[a-z\d]+)\.)+([a-z]{2,}|\d{3})$/iu
  return regex.test(email)
}

export const validatePhoneNumber = (phone: string): boolean => {
  const regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
  return regex.test(phone)
}
