import instance from './api.js'

export function getData() {
    return instance.get('/instance')
}