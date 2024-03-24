export interface SignUp{
  email:String,
  firstName:String,
  lastName:String,
  password:String,
  confirmPassword:String
}

export interface Product{
  code:Number,
  name:String,
  image:String,
  description:String,
  price:Number,
  category:String,
  brand:String
  availableQuantity:Number
}
