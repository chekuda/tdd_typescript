import roman from '../src/roman'

describe('roman',function(){
	it('Right roman number', function(){
		expect(roman(1)).toEqual('0');
	});
});