import Singleton from "./Singleton/Singleton";


function singletonTest () {

    let instanceOne = new Singleton();
    let instanceTwo = new Singleton();

    instanceOne.name = 'Test-1';

    console.log(instanceOne.name);
    console.log(instanceTwo.name);

    instanceTwo.name = 'Test-2';

    console.log(instanceOne.name);
    console.log(instanceTwo.name);
}



