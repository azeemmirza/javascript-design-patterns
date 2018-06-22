import Singleton from "./Singleton/Singleton";

let singleton = new Singleton();
singleton.name = 'Tester';

console.log(singleton.name);

let single2 = new Singleton();

console.log(single2.name);
single2.name = 'Azeem';

console.log('FINAL:');
console.log(singleton.name);
console.log(single2.name);
