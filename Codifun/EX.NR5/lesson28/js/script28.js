function Operation (val1Holder, val2Holder, rezHolder) {
    this.leftOperand = document.getElementById(val1Holder);
    this.rightOperand = document.getElementById(val2Holder);
    this.result = document.getElementById(rezHolder);

    this.value1 = 0;
    this.value2 = 0;
    this.rez = 0;

    this.initVars = function() {
        this.value1 = parseFloat(this.leftOperand.value);
        this.value2 = parseFloat(this.rightOperand.value);
    };
    this.displayRez = function() {
        this.result.value= this.rez;
    };
    this.validateNumber = function() {
        var pattern = new RegExp("^[0-9]{0,5}[\.]?[0-9]{0,5}$");
        if(!(pattern.test(this.leftOperand.value))) {
            this.leftOperand.value = this.leftOperand.value.substr(0, this.leftOperand.value.length-1);
        }
        if(!(pattern.test(this.rightOperand.value))) {
            this.rightOperand.value = this.rightOperand.value.substr(0, this.rightOperand.value.length-1);
        }
    };
    this.getSum = function() {
        this.initVars();

		if( ("" + this.leftOperand.value =="") || ("" + this.rightOperand.value =="") ) {
		this.rez = "insert numbers"
		}else {
		this.rez = this.value1 + this.value2;
		}

        this.displayRez();
    };
    this.getProd = function() {
        this.initVars();
        this.rez = (("" + this.leftOperand.value =="") || ("" + this.rightOperand.value =="")) ? "insert numbers" : this.value1 * this.value2;
        this.displayRez();
    };
    this.getDiff = function() {
        this.initVars();
        this.rez = (("" + this.leftOperand.value =="") || ("" + this.rightOperand.value =="")) ? "insert numbers" : this.value1 - this.value2;
        this.displayRez();
    };
    this.getDiv = function() {
        this.initVars();
        this.rez = (("" + this.leftOperand.value =="") || ("" + this.rightOperand.value =="")) ? "insert numbers" : this.value1 / this.value2;
        this.displayRez();
    };
    this.delValues = function() {
        this.leftOperand.value = "";
        this.rightOperand.value = "";
        this.result.value = "";
    };
}
var operationUser = new Operation("val1", "val2", "rez");
