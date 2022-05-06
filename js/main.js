class Event {
    constructor(name, venue, state, performanceCount) {
        this._name = name
        this._venue = venue
        this._state = state
        this._performanceCount = performanceCount

    }
    get name() {
        return this._name
    }
    get state() {
        return this._state
    }
    get performanceCount() {
        return this._performanceCount
    }
    get venue() {
        return this._venue
    }
    memberBerry() {
        console.log(`OH YEEEEAAHHH that was ${this._venue} on ${this._date} in ${this._state}. He played ${this._performanceCount} sets during that run.`)
    }
    whichCity() {
        console.log(`Dude, that was in ${this._state}.`)
    }
}


class Outdoor extends Event {
    constructor(name, venue, state, performanceCount, dates) {
        super(name, venue, state, performanceCount)
        this._dates = dates
    }
    get dates() {
        return this._dates
    }
    whenWasIt() {
        console.log(`${this._name} at ${this._venue} was ${this._dates}.`)
    }
}


class Theater extends Event {
    constructor(name, venue, state, performanceCount, dates) {
        super(name, venue, state, performanceCount)
        this._dates = dates //date format should be like dis : i.e. Thursday, May 4, 2022.
    }
    get dates() {
        return this._dates
    }
    whenWasIt() {
        console.log(`${this._name} at ${this._venue} was ${this._dates}.`)
    }
}



class Single extends Event {
    constructor(name, venue, dates) {
        super(name, venue)
        this._dates = dates //date format should be like dis : i.e. Thursday, May 4, 2022.
    }
    get dates() {
        return this._dates
    }
    whenWasIt() {
        console.log(`${this._name} at ${this._venue} was ${this._dates}.`)
    }
}
let redRocks = new Outdoor('Tipper Red Rocks', 'Red Rocks Amphitheater', 'Colorado', 'two', 'Friday and Saturday, August 6-7, 2021')

let saengerTheater = new Theater('Tipper & Friends', 'Saenger Theater', 'New Orleans, Louisiana', 'three', 'January 3-5, 2020')

let fullMoonReturn = new Outdoor('Tipper & Friends: The Full Moon Return', 'Suwannee Music Park', 'Florida', 'three', 'April 19-21, 2019')

let astralLights = new Outdoor()

let fourThreeTwoOne = new Outdoor()

let fullMoon = new Outdoor()

let nola1 = new Theater()