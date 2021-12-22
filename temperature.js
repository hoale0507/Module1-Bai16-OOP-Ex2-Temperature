class Temperature {
    degreeC;
    constructor(degreeC) {
        this.degreeC = degreeC;
    }
    transferToF (){
        return this.degreeC * 9 / 5 + 32;
    }
    transferToK(){
        return this.degreeC + 273.15;
    }
}
