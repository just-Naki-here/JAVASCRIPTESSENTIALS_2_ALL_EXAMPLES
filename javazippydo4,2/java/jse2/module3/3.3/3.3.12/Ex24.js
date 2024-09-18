let re = /id\d+/;
console.log(re.exec("My ids.")); // -> null
console.log(re.exec("id60001")); // -> ["id60001", index: 0, input: "id60001", groups: undefined]
