﻿var Person = function (name) {
    this.name = name;
    this.greeting = function () {
        alert('Hi! I\'m ' + this.name + '.');
    };
};