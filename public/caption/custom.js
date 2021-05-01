/*global chrome*/

const replacementAndEducationalModal = `
<span class="calledout">
    <p class="replacement">Fam</p>
    <div class="education-modal">
        <p class="replaced-word-header">Replaced <strong class="actual-word-used">China Virus</strong> with COVID-19</p>
        <i class="one-line-explainer">Calling COVID-19 the “Wuhan Virus” or “China Virus” is inaccurate and xenophobic</i>
        <p class="deeper-explainer"><strong>DO:</strong> Talk about the new coronavirus disease (COVID-19)</p>
        <p class="deeper-explainer"><strong>DO NOT:</strong> Attach locations or ethnicity to the disease; this is not a “Wuhan Virus,” “Chinese Virus,” or “Asian Virus.” The official name for the disease was deliberately chosen to avoid stigmatization.</p>
        <p class="learn-more">Learn more <a class="learn-more-link" target="_blank" href="https://medicine.yale.edu/news-article/calling-covid-19-the-wuhan-virus-or-china-virus-is-inaccurate-and-xenophobic/">here</a></p>
    </div>
</span>`

//Replacing the word "flu" separately by the tags h3,h1, and p the common text tags on Reddit.
//Could probably write a more efficient function to combine these three...
function replace() {
    console.time('replace')
    var allHeaderThreeTags = document.getElementsByTagName('h3')
    var innerHeaderThree
    for (var i = 0; i < allHeaderThreeTags.length; i++) {
        innerHeaderThree = allHeaderThreeTags[i].innerHTML
        innerHeaderThree = innerHeaderThree.replace(
            /Flu/gi,
            replacementAndEducationalModal
        )
        allHeaderThreeTags[i].innerHTML = innerHeaderThree
    }

    var allHeaderOneTags = document.getElementsByTagName('h1')
    var innerHeaderOne
    for (var i = 0; i < allHeaderOneTags.length; i++) {
        innerHeaderOne = allHeaderOneTags[i].innerHTML
        innerHeaderOne = innerHeaderOne.replace(
            /Flu/gi,
            replacementAndEducationalModal
        )
        allHeaderOneTags[i].innerHTML = innerHeaderOne
    }

    var allParagraphTags = document.getElementsByTagName('p')
    var innerParagraph
    for (var i = 0; i < allParagraphTags.length; i++) {
        innerParagraph = allParagraphTags[i].innerHTML
        innerParagraph = innerParagraph.replace(
            /Flu/gi,
            replacementAndEducationalModal
        )
        allParagraphTags[i].innerHTML = innerParagraph
    }
    console.timeEnd('replace')
}

//Wait for the page to load before running the function below
window.addEventListener('load', replace)
