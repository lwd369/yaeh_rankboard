import Utility from './utility';

test('AddRankNumber method', () => {
  let testArray = [
    {test: 'test1'},
    {test: 'test2'},
    {test: 'test3'},
    {test: 'test4'}
  ];
  const result = Utility.addRankNumber(testArray, 8);
  console.log(result);
  let mock = [
    { test: 'test1', no: 1 },
    { test: 'test2', no: 2 },
    { test: 'test3', no: 3 },
    { test: 'test4', no: 4 },
    {},
    {},{},{}
  ];
  expect(result).toEqual(mock);
});