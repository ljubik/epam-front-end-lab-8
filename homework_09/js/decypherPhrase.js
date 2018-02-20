const decypherPhrase = (object, str) => {
    let reverseObject = {}

    for (let k in object) {
        reverseObject[object[k]] = k
    }

    return decypherPhrase(reverseObject, str)
}