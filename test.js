// assertEquals copied from To-Roman-Numerals

function assertEquals(expected, actual, message) {
    if (expected != actual) {
        msg = "expected: " + expected + ", actual: " + actual
        if (message != null) {
            msg = "ERROR: " + message + ": " + msg
        }
        console.error(msg)
    }
    else console.error(" Hurra! exp = actual! " + "expected: " + expected + ", actual: " + actual)
}

console.error("TESTING BEGINS HERE")
assertEquals("a", codeChar("a"))
assertEquals("N", codeChar("A"))
assertEquals("!", codeChar("!"))
