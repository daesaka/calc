test('コンストラクタのテスト',function(){

	var c=new Calculator();
	
	ok( c instanceof Calculator,'new演算子をつけてコンストラクタを呼び出す検査');

	var c= Calculator();
	
	ok( c instanceof Calculator,'new演算子をつけてコンストラクタを呼び出す検査');
});

test('getExpressionメソッドのテスト',function(){
	var c= new Calculator();
	
	var result=c.getExpression();
	equal(result, '');
});

test('append',function(){
	var c= new Calculator();
	
	var result=c.append('a');
	equal(result, 'a');
});

test('clearEntry',function(){
	var c= new Calculator();
	
	var result=c.clearEntry();
	equal(result, '');
});

test('clear',function(){
	var c= new Calculator();
	
	var result=c.clear();
	equal(result, '');
});

test('calculate',function(){
	var c= new Calculator();
	
	var result=c.calculate(1*1);
	equal(result, '1');
});
