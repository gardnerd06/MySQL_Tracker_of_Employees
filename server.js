const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const getQuest = require('./index');
const cTable = require('console.table');




getQuest.getQuest();
