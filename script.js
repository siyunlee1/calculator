
const calculator = {
    x : 0,

    operatorText: "",

    y: 0,

    add : function(x, y){return x+y;},

    subtract : function(x,y){return x-y;},

    multiply : function(x,y){return x*y;},

    divide : function(x,y){return x/y;},

    operation : function(func, x, y){return func(x,y);},

    clickActionNumber : function(number){
        let display = document.querySelector(".display");
        if (!(number.textContent == "." && display.textContent.includes("."))){
            display.textContent += number.textContent;
            console.log(display.textContent)
        };
        
    },

    clickActionOperator : function(operator){
        this.x = Number(document.querySelector(".display").textContent);
        this.operatorText = operator.textContent;

        this.clickActionAC();
        
        // display.textContent
    },
    clickActionEqual : function(){
        let display = document.querySelector(".display")
        this.y = Number(display.textContent);
        console.log(this.operatorText);
        console.log(this.x);
        console.log(this.y)
        switch (this.operatorText) {
            case "X":
                var displayText = this.operation(this.multiply, this.x, this.y);
                break;
            case "/":
                var displayText = this.operation(this.divide, this.x, this.y);
                break;
            case "+":
                var displayText = this.operation(this.add, this.x, this.y);
                break;
            case "-":
                var displayText = this.operation(this.subtract, this.x, this.y);
                break;
        
            default:
                break;
        }
        display.textContent = Math.round(displayText * 1000000) / 1000000;
    },
    clickActionAC : function(){
        let display = document.querySelector(".display");
        display.textContent = "";
    },

    clickActionDel : function(){
        let display = document.querySelector(".display");
        display.textContent = display.textContent.slice(0,display.textContent.length-1)
    },

    checkClicked : function(){
        let numbers = document.querySelectorAll(".number");
        numbers.forEach((number) => {
            number.addEventListener("click", () => this.clickActionNumber(number));
        });

        let operators = document.querySelectorAll(".normal");
        operators.forEach((operator) => {
            operator.addEventListener("click", ()=> this.clickActionOperator(operator));
        });

        let ac = document.querySelector(".ac");
        ac.addEventListener("click", ()=> this.clickActionAC());

        let del = document.querySelector(".del");
        del.addEventListener("click", ()=> this.clickActionDel());

        let equal =document.querySelector(".equal");
        equal.addEventListener("click", () => this.clickActionEqual());
    }
}

calculator.checkClicked()