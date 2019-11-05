var expect = require('chai').expect
const { AppContext } = require('../')

describe('Basic app context', () => {
    
    it('state saving', async () => {
        AppContext.setItem('a', 'b')
        const value = await AppContext.getItem('a')
        expect(value).to.equal('b')
    })

    it('getting env', async () => {
        const env = await AppContext.getEnv()
        expect(env).to.equal('dev')
    })
})