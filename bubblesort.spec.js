// const {bubblesort, swap} = require('./bubblesort')


describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect(bubblesort([])).toEqual([])
  });

  it('it swaps a certain amount of time', function(){
    spyOn(bubblesort, 'swap').and.callThrough();
    bubblesort([1,5,3,2])
    // expect(bubblesort.swap.calls.count()).toEqual(2)

    bubblesort([1,5,3,2,4,9,8])
    expect(bubblesort.swap.calls.count()).toEqual(4)
  });

  it('actually sorts the array', function(){
    expect(bubblesort([1,5,3,2])).toEqual([1,2,3,5])

    expect(bubblesort([1,5,3,2,4,9,8])).toEqual([1,2,3,4,5,8,9])
  });
})
