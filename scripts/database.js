const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ]
}

const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {
            id: 1,
            name: "ADHD-Man",
            power: "Vitality sucking monologues"
        },
        {
            id: 2,
            name: "Manufacturer's Coupon",
            power: "Manufactures conditions capable of altering reality"
        }
    ]
}

//I feel like I really like the line breaks between different components in the code.
//Not sure if that's a best practice, however.

export const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}

export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}