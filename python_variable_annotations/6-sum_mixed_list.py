#!/usr/bin/env python3
''' Type annotated sum_mixed_list '''

from typing import List

def sum_mixed_list(mxd_lst: List[int | float]) -> float:
    '''Documentation mixed sum list'''
    return float(sum(mxd_lst))
