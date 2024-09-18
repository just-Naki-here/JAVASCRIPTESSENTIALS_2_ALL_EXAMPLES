let users = new Users();
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Mmmm", "Ffff", "eeee@gmail.com");
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Xxxx", "Oooo", "dddd@gmail.com");
console.log(users.get("dddd@gmail.com"));
console.log(users.getAll("name").map(u => u.name));
console.log(users.getAll("surname").map(u => u.surname));
console.log(users.getAll("email").map(u => u.email));