export class Counter {

    static createWith(counter){
        return new this(counter.getCount())
    }
    constructor(amount = 0) {
        this._count = amount;
    }

    getCount() {
        return this._count;
    }

    increment() {
        this._count++;
    }

    decrement(){
        this._count--;
    }

    incrementByAmount(amount) {
        this._count += amount;
    }
}