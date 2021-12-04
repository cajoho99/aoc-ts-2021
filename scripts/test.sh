#!/bin/bash

DAY=$1
jest --passWithNoTests --verbose false ./test/${DAY}.test.ts 
