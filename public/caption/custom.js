/*global chrome*/
// document.documentElement.innerHTML = document.documentElement.innerHTML.replace(
//     /Flu/gi,
//     '<mark class="calledout">Flu</mark>'
// )

//Wait for the page to load before running the function below
window.addEventListener("load", replace);
mouseListen();

//Replacing the word "flu" separately by the tags h3,h1, and p the common text tags on Reddit. 
//Could probably write a more efficient function to combine these three...
function replace() {
    var allHeaderThreeTags = document.getElementsByTagName("h3");
    var innerHeaderThree;
    for (var i = 0; i < allHeaderThreeTags.length; i++) {
        innerHeaderThree = allHeaderThreeTags[i].innerHTML;
        innerHeaderThree = innerHeaderThree.replace(
            /Flu/gi, 
            '<mark class="calledout">Fam</mark>'
        );
        allHeaderThreeTags[i].innerHTML = innerHeaderThree;
    }

    var allHeaderOneTags = document.getElementsByTagName("h1");
    var innerHeaderOne;
    for (var i = 0; i < allHeaderOneTags.length; i++) {
        innerHeaderOne = allHeaderOneTags[i].innerHTML;
        innerHeaderOne = innerHeaderOne.replace(
            /Flu/gi, 
            '<mark class="calledout">Fam</mark>'
        );
        allHeaderOneTags[i].innerHTML = innerHeaderOne;
    }

    var allParagraphTags = document.getElementsByTagName("p");
    var innerParagraph;
    for (var i = 0; i < allParagraphTags.length; i++) {
        innerParagraph = allParagraphTags[i].innerHTML;
        innerParagraph = innerParagraph.replace(
            /Flu/gi, 
            '<mark class="calledout">Fam</mark>'
        );
        allParagraphTags[i].innerHTML = innerParagraph;
    }
}

//Obtaining the coordinates of the cursor and passing them to a function to find the altered element
function mouseListen() {
    document.addEventListener("mouseover", event => {
        getChangedElement(event.clientX, event.clientY);
    });
}

//Using the coordinates from mouseListen, find the changed elements (<mark class="calledout"...)
function getChangedElement(x,y) {
    var element = document.elementFromPoint(x, y);
    if (element.className === "calledout") {
        console.log('This word was replaced');
    }
}