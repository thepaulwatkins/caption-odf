/*global chrome*/
//Wait for the page to load before running the function below
window.addEventListener("load", init);

// Running function to collect text from inputs (textareas) and listen to changes as the user types
function init() {
    var inputs = getInputs()

    if (inputs.length === 0) {
        return
    }

    // var text = inputs[0].value.split().reverse()[0]
    // console.log('Here is my text: ' + text)

    inputs[0].value = inputs[0].value
    inputs[0].addEventListener('input', (e) => {
        var inputs = getInputs()
        if (inputs.length === 0) {
            return
        }
        // var text = inputs[0].value.split().reverse()[0]
        var innerInput = inputs[0].value;
        innerInput = innerInput.replace(
            /Flu/gi, 
            'Fam'
        );
        inputs[0].value = innerInput;
    })
}

// Function to get all input tags on a webpage -- Reddit's search bar has an "input" tag
function getInputs() {
    var allInputArea = document.getElementsByTagName('input')
    var results = []

    for (var i = 0; i < allInputArea.length; i++) {
            results.push(allInputArea[i])
    }
    return results
}

init()
