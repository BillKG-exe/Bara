const toFirstLetterUpper = (str) => {
    str += ""
    var newStr = ""

    for(var i = 0; i < str.length; i++) {
        if(i === 0) {
            newStr += str[i].toUpperCase()
        } else {
            newStr += str[i].toLowerCase()
        }
    }

    return newStr
}

class StringCleaner {
    compare(str1, str2) {
        str1 += ""
        str2 += ""

        str1 = str1.split(" ").join("").toLowerCase()
        str2 = str2.split(" ").join("").toLowerCase()

        return str1 === str2 
    }

    clean(string) {
        string += ""
        string = string.trim().toLowerCase()
        var strArr = string.split(" ")

        var newString = ""

        for(var i = 0; i < strArr.length; i++) {
            newString += toFirstLetterUpper(strArr[i])
            newString += ' '
        }

        return newString
    }

    beginWith(str1, str2) {
        str1 += ""
        str2 += ""

        return str1.toLowerCase().startsWith(str2.split(" ")[0].toLowerCase())
    }
}

export default StringCleaner