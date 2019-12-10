const defaultApp = require('./default-app-context')
// Private

function _getApp() {
    return global._k_app_sdk_impl
}

function _setApp(app) {
    global._k_app_sdk_impl = app
}

// Public

// setting app context
function setAppContext(app) {
    _setApp(app)   
}

// app interface
function getItem(key) {
    return _getApp().getItem(key)      
}

function setItem(key, value) {
    return _getApp().setItem(key, value)      
}

function getEnv() {
    return _getApp().getEnv()      
}

module.exports = {
    setItem,
    getItem,
    getEnv,

    setAppContext
}
