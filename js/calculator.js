function Operation (leftOperand, rightOperandHolder, result) {
  this.leftOperand = document.getElementById(leftOperand)
  this.rightOperand = document.getElementById(rightOperandHolder)
  this.result = document.getElementById(result)

  this.value1 = 0
  this.value2 = 0
  this.rez = 0

  this.initVars = function () {
    this.value1 = parseFloat(this.leftOperand.value)
    this.value2 = parseFloat(this.rightOperand.value)
  }
  this.displayRez = function () {
    this.result.value = this.rez
  }
  this.validateNumber = function (operand) {
    const pattern = new RegExp('\\d+\.?\\d+', 'g')
    if (!pattern.test(operand.value)) {
      operand.value = null
    }
  }

  this.calculateResult = function (operation) {
    this.initVars()
    this.rez = (('' + this.leftOperand.value === '') || ('' + this.rightOperand.value === '')) ? 'insert numbers' : this.value1 + this.value2
    this.displayRez()
  }

  this.getSum = function () {
    this.initVars()
    this.rez = (('' + this.leftOperand.value === '') || ('' + this.rightOperand.value === '')) ? 'insert numbers' : this.value1 + this.value2
    this.displayRez()
  }
  this.getProd = function () {
    this.initVars()
    this.rez = (('' + this.leftOperand.value === '') || ('' + this.rightOperand.value === '')) ? 'insert numbers' : this.value1 * this.value2
    this.displayRez()
  }
  this.getDiff = function () {
    this.initVars()
    this.rez = (('' + this.leftOperand.value === '') || ('' + this.rightOperand.value === '')) ? 'insert numbers' : this.value1 - this.value2
    this.displayRez()
  }
  this.getDiv = function () {
    this.initVars()
    this.rez = (('' + this.leftOperand.value === '') || ('' + this.rightOperand.value === '')) ? 'insert numbers' : this.value1 / this.value2
    this.displayRez()
  }
  this.delValues = function () {
    this.leftOperand.value = ''
    this.rightOperand.value = ''
    this.result.value = ''
  }
}

const operationUser = new Operation('val1', 'val2', 'rez')


