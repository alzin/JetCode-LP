export let data = [
    {
        id: 1,
        name: "rezk1",
        password: 123
    },
    {
        id: 2,
        name: "rezk2",
        password: 123
    },
    {
        id: 3,
        name: "rezk3",
        password: 123
    }
]


const sleep = ms => {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}

// export const getData = () => data

export const getData = async () => {
    await sleep(1000)
    return data
}