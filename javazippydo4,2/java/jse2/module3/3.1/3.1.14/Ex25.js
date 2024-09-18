let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam.";
let words = text.toLowerCase().replaceAll('.','').replaceAll(',','').split(' ');
console.log(words.length); // -> 30
