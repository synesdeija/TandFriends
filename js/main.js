class Event {
    constructor(name, grounds, city, performanceCount) {
        this._name = name
        this._grounds = grounds
        this._city = city
        this._performanceCount = performanceCount

    }
    get name() {
        return this._name
    }
    get city() {
        return this._city
    }
    get performanceCount() {
        return this._performances
    }

    get grounds() {
        return this._grounds
    }
    memberBerry() {
        console.log(`OH YEEEEAAHHH that was ${this._grounds} on ${this._date} in ${this._city}. He played ${performances} sets during that run.`)
    }
    whichCity() {
        console.log(`Dude, that was in ${this._city}.`)
    }
}
class Outdoor extends Event {
    constructor(name, grounds, dates) {
        super(name, grounds)
        this._dates = dates //date format should be like dis : i.e. Thursday, May 4, 2022.
    }
    get dates() {
        return this._dates
    }
    whichFest() {
        console.log(`2021 T&F Red Rocks was ${this._dates}.`)
    }
}

class Theater extends Event {
    constructor() {

    }
}
class Single extends Event {
    constructor() {

    }
}

let redRocks = new Event('Tipper Red Rocks', 'Red Rocks Amphitheater', 'Morrison, Colorado', 'two', 'Friday and Saturday, August 6-7, 2021')