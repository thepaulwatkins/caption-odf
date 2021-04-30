// Running function to collect text from inputs (textareas) and listen to changes as the user types
function init() {
    var inputs = getInputs();

    if (inputs.length === 0) {
        return;
    }

    var text = inputs[0].textContent.split().reverse()[0];
    console.log('Here is my text: ' + text)

    inputs[0].value = inputs[0].value;
    inputs[0].addEventListener('input', (e) => {
        var inputs = getInputs();
        if (inputs.length === 0) {
            return;
        }
        var text = inputs[0].textContent.split().reverse()[0];
        console.log('My text is changing: ' + text);

        // hardcoded example of catching text in the textarea and taking action
        if (text.includes('chinavirus')) {
            console.log('Typing "chinavirus" is not okay, here is why')
        }
    });
}

// Function to get all textarea tags on a webpage 
function getInputs() {
    var allTextArea = document.getElementsByTagName("textarea");
    var results = [];

    for (var i = 0; i < allTextArea.length; i++) {
        if (allTextArea[i].localName === 'textarea') {
            results.push(allTextArea[i]);
        }
    }

    return results;
}

init();