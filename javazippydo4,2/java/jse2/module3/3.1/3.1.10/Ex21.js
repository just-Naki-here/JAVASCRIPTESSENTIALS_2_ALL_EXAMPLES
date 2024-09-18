let strings = [undefined, "", "ab", "cd ef", 4, null];
for(let i=0; i< strings.length; i++) {
    strings[i] && strings[i].length && console.log(strings[i]);
}
