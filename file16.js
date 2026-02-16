let cart=[]
//click on add to cart button on iphone product
cart=[...cart,{name:"iphone",price:45000,qty:1}]
//console.log(cart)
cart=[...cart,{name:"speaker",price:1000,qty:1}]
console.log(cart)

const order={
    email:"john@gmail.com",
    items:cart,
    orderValue:46000,
    status:"pending",
}
db.orders.insertOne(order)

//create flipkart database
//create collection orders>email,items,orderValue,status,orderDate
//create collection users>name,email,password,role
//Insert seed data
//Write aggregate query to display all the orders
//placed by a particular user

//Create database
//use flipkart

//creating collections
//users,orders

//inserting data
db.users.insertMany([
  {
    name: "Debosmita",
    email: "debo@gmail.com",
    password: "123",
    role: "customer"
  },
  {
    name: "Rahul",
    email: "rahul@gmail.com",
    password: "456",
    role: "customer"
  },
  {
    name: "Admin",
    email: "admin@gmail.com",
    password: "789",
    role: "admin"
  }
])



db.orders.insertMany([
  {
    email: "debo@gmail.com",
    items: ["Laptop", "Mouse"],
    orderValue: 65000,
    status: "Delivered",
    orderDate: new Date("2026-02-01")
  },
  {
    email: "debo@gmail.com",
    items: ["Keyboard"],
    orderValue: 2000,
    status: "Shipped",
    orderDate: new Date("2026-02-05")
  },
  {
    email: "rahul@gmail.com",
    items: ["Mobile"],
    orderValue: 15000,
    status: "Placed",
    orderDate: new Date("2026-02-03")
  }
])


//aggregate query to display all orders
db.users.aggregate([
  {
    $match: { email: "debo@gmail.com" }
  },
  {
    $lookup: {
      from: "orders",
      localField: "email",
      foreignField: "email",
      as: "userOrders"
    }
  }
])
