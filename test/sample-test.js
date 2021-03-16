const { assert } = require('chai')

describe('Greeter', function () {
    it("Should return the new greeting once it's changed", async function () {
        const Greeter = await ethers.getContractFactory('Greeter')
        const greeter = await Greeter.deploy('Hello, world!')

        await greeter.deployed()
        assert((await greeter.greet()) === 'Hello, world!')

        await greeter.setGreeting('Hola, mundo!')
        assert((await greeter.greet()) === 'Hola, mundo!')
    })
})
