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

//I feel like I really like the line breaks between different components in the code.
//Not sure if that's a best practice, however.

export const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}