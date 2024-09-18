try {
    let user1 = new User('Aaaa', 'Bbbb', 'Aaaa@gmail.com');
    console.log(user1);
    let user2 = new User('aaaa', 'Bbbb', 'Aaaa@gmail.com'); // -> Error
    
} catch(err) {
    console.log(err.message);}