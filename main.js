// solving without strings, only using ascii codes as int?

const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function codePhrase(phrase) {

    let upcasePhrase = phrase.toUpperCase()
    let codedPhrase = ""

    for (let i = 0; i < upcasePhrase.length(); i++) {
        codedPhrase += codeChar(upcasePhrase.indexOf(i))
    }

    console.error("the original phrase: " + phrase + ". the coded phrase: " + codedPhrase)
}

function codeChar(letter) {

    let letterIndex = ABC.indexOf(letter)
    if (letterIndex == -1) {
        return letter
    }

    let returnIndex = letterIndex + 13
    if (returnIndex > ABC.length)
        returnIndex -= ABC.length

    return ABC.charAt(returnIndex)
}
