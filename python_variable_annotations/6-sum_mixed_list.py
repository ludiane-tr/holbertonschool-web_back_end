#!/usr/bin/env python3
"""
Module providing function that take mixed type and return a sum of the float
"""
from typing import List


def sum_mixed_list(mxd_lst: List[int | float]) -> float:
    """
    Function that return the sum of the float
    """
    return float(sum(mxd_lst))
