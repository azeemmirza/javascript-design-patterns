class Singleton {


    private instance = null;

    private constructor () {}

    public static getInstance () {

        if (this.instance == null) {

            this.instance = new Singleton();
            return this.instance;

        } else {

            return this.instance;

        }

    }
}