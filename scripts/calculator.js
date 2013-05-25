function Calculator(){
	if(!(this instanceof Calculator)){
		return new Calculator();
	}
	
	this.expression=''; //現在の計算式を表すプロパティ
	
	this.getExpression=function(){
	return this.expression;
	}
	
	/**
	*指定された文字を式の末尾に追加する。
	**/
	this.append=function(ch){
		return this.expression = this.expression + ch;
	};
	
	/**
	*保持している式の末尾を削除する
	**/
	this.clearEntry=function(){
		return this.expression =this.expression.substring(0,this.expression.length-1);
	};

	this.clear=function(){
		return this.expression= '';
	}
	
	this.calculate=function(){
		for(var i=0;i<=this.expression.length;i++){
		if(this.expression.substring(i,1)===×)
		this.expression.substring(i,1)=*
		}else if{
		if(this.expression.substring(i,1)===÷)
		this.expression.substring(i,1)=/
		}
		return c=eval(this.expression);
		<!--document.write("c.expression");-->
	}
}
