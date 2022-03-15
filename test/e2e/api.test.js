import {
    jest,
    expect,
    test,
    describe,
 } from '@jest/globals'

import superTest from 'supertest'
import Server from '../../src/server.js'

 describe('API E2E Test Suite', () => {
     test.todo('GET / - should return an arrey', async () => {
         const response = await superTest(Server)
         .get('/')

         expect()
         console.log('test',response.text)
     })
     test.todo('POST / - should save an item and return ok')
     test.todo('DELETE / - should save an item and return ok')
 })