import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {render, waitForElement} from '@testing-library/react';

import { getCharacters } from '../src/js/rickandmorty'
import CharacterProfile from '../src/components/CharacterProfile'
import useCharacter from '../src/hooks/useCharacter'

Enzyme.configure({ adapter: new Adapter() })

describe("Check Character Component", () => {
    it("Render Profile", async () => {
        const {results} = await getCharacters(1)
        const rick = results[0]
        const card = shallow(
            <CharacterProfile 
                title={rick.name}  
                status={rick.status}
                image = {rick.image}
                character = {rick}       
            />
        )

        expect(card.find("h2").text()).toBe(rick.name)
    })
})


describe("Test Character Hook", () => {
    const Comp = () => {
        const { characters, loading } = useCharacter(1);
        return (
            <div>
                {
                    !loading
                        ?  <div data-testid="title">
                            {
                                characters.map((character) => (
                                    <p data-testid={character.id}  key={character.id}  >
                                        {character.name}
                                    </p>
                                ))
                            }
                            </div>      
                        : <p>...Loading</p>
                }
            </div>
        )
    };

    it("Calues at the beginning", async () => {
        const {results} = await getCharacters(1)
        const rick = results[0]

        const { getByText, getByTestId, rerender }  = render(<Comp />)

        expect(getByText(/...Loading/i).textContent).toBe("...Loading")

        const resolvedEl = await waitForElement(() => getByTestId("title"));
        const firstElement = getByTestId("1")

        expect(firstElement.textContent).toBe(rick.name)
    })
})


