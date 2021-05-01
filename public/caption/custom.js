/*global chrome*/
// document.documentElement.innerHTML = document.documentElement.innerHTML.replace(
//     /Flu/gi,
//     '<mark class="calledout">Flu</mark>'
// )

//Replacing the word "flu" separately by the tags h3,h1, and p the common text tags on Reddit. 
//Could probably write a more efficient function to combine these three...
var allHeaderThreeTags = document.getElementsByTagName("h3");
var innerHeaderThree;
for (var i = 0; i < allHeaderThreeTags.length; i++) {
    innerHeaderThree = allHeaderThreeTags[i].innerHTML;
    innerHeaderThree = innerHeaderThree.replace(
        /Flu/gi, 
        '<mark class="calledout">Flu</mark>'
    );
    allHeaderThreeTags[i].innerHTML = innerHeaderThree;
}

var allHeaderOneTags = document.getElementsByTagName("h1");
var innerHeaderOne;
for (var i = 0; i < allHeaderOneTags.length; i++) {
    innerHeaderOne = allHeaderOneTags[i].innerHTML;
    innerHeaderOne = innerHeaderOne.replace(
        /Flu/gi, 
        '<mark class="calledout">Flu</mark>'
    );
    allHeaderOneTags[i].innerHTML = innerHeaderOne;
}

var allParagraphTags = document.getElementsByTagName("p");
var innerParagraph;
for (var i = 0; i < allParagraphTags.length; i++) {
    innerParagraph = allParagraphTags[i].innerHTML;
    innerParagraph = innerParagraph.replace(
        /Flu/gi, 
        '<mark class="calledout">Flu</mark>'
    );
    allParagraphTags[i].innerHTML = innerParagraph;
}