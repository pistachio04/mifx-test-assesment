import { initContractPlugin } from 'https://jslib.k6.io/k6chaijs-contracts/4.3.4.0/index.js';
import { describe, expect, chai } from 'https://jslib.k6.io/k6chaijs/4.3.4.1/index.js'
import { user_step } from '../step/get-user.step.js';
import { USER_DATA } from '../data/user.data.js';
import http from 'k6/http';

initContractPlugin(chai)

http.setResponseCallback(http.expectedStatuses({ min: 200, max: 500 }));

export default function (id) {
    describe('Get User By Id : Success', () => {
    const response = user_step.getUserById(USER_DATA.validId)

    if (response.status != 200) {
        console.log(response.body)
    }

    //assertion for expected and actual result
    expect(response.status, 'API status code').to.equal(200)
    expect(response).to.have.validJsonBody()
    //we can add more asertion....
    }) &&

    describe('Get User By Id : Not Found', () => {
    const response = user_step.getUserById(USER_DATA.notfoundId)

    if (response.status != 404) {
        console.log(response.body)
    }

    //assertion for expected and actual result
    expect(response.status, 'API status code').to.equal(404)
    expect(response).to.have.validJsonBody()
    //we can add more asertion....
    }) &&
    
    describe('Get User By Id : Invalid', () => {
    const response = user_step.getUserById(USER_DATA.invalidId)

    if (response.status != 404) {
        console.log(response.body)
    }

    //assertion for expected and actual result
    expect(response.status, 'API status code').to.equal(404)
    expect(response).to.have.validJsonBody()
    //we can add more asertion....
    })
}