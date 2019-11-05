// default implementation to allow testing independently

const state = {}
const app = {
    setItem : function(key, value) {
        state[key] = value
    },
    getItem: function (key) {
        return Promise.resolve(state[key])
        
    },
    getEnv: function () {
        return 'dev'
    }
}

module.exports = app