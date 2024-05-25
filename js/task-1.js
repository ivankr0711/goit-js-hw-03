function slugify(title) {
    let slovo = title.toLowerCase().split(' ');
    let rezyltat = slovo.join('-');
    return rezyltat;
}
console.log(slugify("Arrays for begginers")); 
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript")); 
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); 
