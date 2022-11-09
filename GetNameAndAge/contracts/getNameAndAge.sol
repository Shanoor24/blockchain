// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract GetNameAndAgeContract {
    string public name;
    uint public age;

    constructor(string memory _name, uint _age) {
        name = _name;
        age = _age;
    }


    function getName() public view returns(string memory) {
        return name;
    }

    function getAge() external view returns(uint) {
        return (age*2);
    }

}