var newNum = '';
var opera = '';
var bNeedClear = false;	//是否清除输入框的内容

// 指针对li的操作
 window.onload = function () {
    var aLi = document.getElementsByTagName('li');
        for (i = 0; i < aLi.length; i++) {
            aLi[i].onmousedown = clickInput;
            aLi[i].onmouseover = function () {
                this.className = 'active';
            };

            aLi[i].onmouseout = function () {
                this.className = '';
            };
    }
};

// 计算功能部分
function calc(num1, num2, opera){
	var result = 0;
	switch(opera){
		case '×':
			result = num1 * num2;
			break;
        case '+': 
            result = num1 + num2;
            break;    
		case '-':
			result = num1 - num2;
			break;
		case '÷':
			result = num1 / num2;
			break;
		default:
			result = num2;	
	}

	return result;
}

// 点击部分
function clickInput() {
    var onInput = document.getElementById('input1');
    var newText = this.innerHTML.replace();

    switch (newText) {
        case '=':
            onInput.value = calc(parseInt(newNum), parseInt(onInput.value), opera);
            newNum = '';
            opera = '';
            bNeedClear = true;
            break;
       
        case '+':
        case '-':
        case '×':
        case '÷':
            bNeedClear = true;

            if (newNum.length != 0) {
                onInput.value = calc(parseInt(newNum), parseInt(onInput.value), opera);
            }

            opera = newText;
            newNum = onInput.value;
            break;
        
        case 'C':
            onInput.value = '0';
            newNum = '';
            opera = '';
            break;

//数字时,beNeedClear判断        
        default:	
            if (bNeedClear) {
                onInput.value = parseInt(newText, 10);
                bNeedClear = false;
            }
            else {
                onInput.value = parseInt(onInput.value + newText, 10);
            }
            break;
    }
}

