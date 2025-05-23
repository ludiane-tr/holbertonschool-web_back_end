#!/usr/bin/env python3
'''Async comprehension'''


from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    ''' return 10 random numbers using async_generator'''
    randoms: List[float] = [i async for i in async_generator()]
    return randoms
