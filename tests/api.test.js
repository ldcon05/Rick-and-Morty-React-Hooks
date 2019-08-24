import { getCharacters } from '../src/js/rickandmorty'

describe("Get Characters", () => {
    test("Validate the Async Await", async () => {
        const {results}  =  await getCharacters(1)
        expect(results[0].name).toBe("Rick Sanchez")
    })  

    test("Validate the API Promises", done => {
        getCharacters(1)
            .then(({ results }) => {
                expect(results[0].name).toBe('Rick Sanchez')
                done()
            })
    })  
})
