var Observable = require("data/observable").Observable;

function createViewModel() {
    var viewModel = new Observable();

    viewModel.zbroji = function() {  
        var num1 = this.get("num1");
        var num2 = this.get("num2");
        if (num1 != undefined && num2 != undefined){
            this.set("zbroj", parseInt(num1) + parseInt(num2));

      }

    }

    return viewModel;
}

exports.createViewModel = createViewModel;

