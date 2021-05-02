/*global chrome*/

expandEducationalModal = () => {
    document.getElementById('education-modal').style.width = '350px'
    const addContent = () => {
        document.getElementById('more-educational-material').innerHTML = `
        <p class="one-line-explainer">Calling COVID-19 the “Wuhan Virus” or “China Virus” is inaccurate and xenophobic</p>
        <p class="deeper-explainer"><strong>DO:</strong> Talk about the new coronavirus disease (COVID-19)</p>
        <p class="deeper-explainer"><strong>DO NOT:</strong> Attach locations or ethnicity to the disease; this is not a “Wuhan Virus,” “Chinese Virus,” or “Asian Virus.” The official name for the disease was deliberately chosen to avoid stigmatization.</p>
        <p class="learn-more">Learn more <a class="learn-more-link" target="_blank" href="https://medicine.yale.edu/news-article/calling-covid-19-the-wuhan-virus-or-china-virus-is-inaccurate-and-xenophobic/">here</a></p>
        `
    }
    setTimeout(addContent, 100)
}

const replacementAndEducationalModal = `
<span class="calledout">
    <p class="replacement">COVID-19</p>
    <div class="education-modal" id="education-modal">
        <div class="education-modal-starter">
            <p>Replaced:</p>
            <strong class="actual-word-used">China Virus</strong>
            <div class="learn-more-prompt">
                <img src="https://i.imgur.com/XITiHDy.jpg" width="30px" />
                <button id="down-arrow-show-more">Learn Why &#10549;</button>
            </div>
        </div>
        <div class="learn-more-clicked" id="more-educational-material">            
        </div>
    </div>
</span>`

let runBefore = false

function replace() {
    if (runBefore) {
        return
    }
    runBefore = true
    console.time('replace')
    const allTags = [
        ...document.getElementsByTagName('h3'),
        ...document.getElementsByTagName('h1'),
        ...document.getElementsByTagName('p'),
    ]
    var content
    for (var i = 0; i < allTags.length; i++) {
        content = allTags[i].innerHTML
        content = content.replace(
            /China\sVirus/gi,
            replacementAndEducationalModal
        )

        allTags[i].innerHTML = content
    }
    document
        .getElementById('down-arrow-show-more')
        .addEventListener('click', expandEducationalModal)
    console.timeEnd('replace')
}

//Wait for the page to load before running the function below
window.addEventListener('load', replace)

// ...or just get it to run after a short amount of time
setTimeout(replace, 5000)

console.log('about to run!')
