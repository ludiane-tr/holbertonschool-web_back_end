# Python - Variable Annotations

## Description

This project is part of the **Foundations v2 - Part 3** curriculum at Holberton School. It focuses on advanced concepts in Python, specifically type annotations, duck typing, and static type checking with `mypy`.

## Learning Objectives

By the end of this project, you should be able to explain the following concepts without external help:

- Type annotations in Python 3
- How to use type annotations to specify function signatures and variable types
- The concept of duck typing
- How to validate your code using `mypy`

## Requirements

- Allowed editors: `vi`, `vim`, `emacs`
- All files will be interpreted/compiled on Ubuntu 20.04 LTS using Python 3.9
- All files must end with a new line
- The first line of all files must be exactly `#!/usr/bin/env python3`
- A `README.md` file is mandatory
- Code must follow `pycodestyle` (version 2.5)
- All files must be executable
- File length will be tested using `wc`
- All modules, classes, and functions must include documentation in the form of a descriptive sentence

## Tasks

### 0. Basic annotations - add
Write a function `add` that takes two floats and returns their sum as a float.

### 1. Basic annotations - concat
Write a function `concat` that takes two strings and returns a concatenated string.

### 2. Basic annotations - floor
Write a function `floor` that takes a float and returns its floor as an integer.

### 3. Basic annotations - to string
Write a function `to_str` that takes a float and returns its string representation.

### 4. Define variables
Define and annotate the following variables:
- `a`: int, value 1
- `pi`: float, value 3.14
- `i_understand_annotations`: bool, value True
- `school`: str, value "Holberton"

### 5. Complex types - list of floats
Write a function `sum_list` that takes a list of floats and returns their sum as a float.

### 6. Complex types - mixed list
Write a function `sum_mixed_list` that takes a list of ints and floats and returns their sum as a float.

### 7. Complex types - string and int/float to tuple
Write a function `to_kv` that takes a string and an int/float, and returns a tuple (string, square of the number as a float).

### 8. Complex types - functions
Write a function `make_multiplier` that takes a float and returns a function that multiplies a float by it.

### 9. Let's duck type an iterable object
Annotate the parameters and return type of a function that returns a list of tuples containing elements and their lengths.

## Repository Information

- GitHub repository: `holbertonschool-web_back_end`
- Directory: `python_variable_annotations`
