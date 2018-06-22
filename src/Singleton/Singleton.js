let _instance = null;

class Singleton {


    static get instance (){
        return _instance;
    }

    constructor () {

        this.name;
        if (Singleton.instance === null) {
            _instance = this;
        }
        return Singleton.instance;
    }
}

export default Singleton;