function maskify (cc) {
    // In case the number of characters in the string entered by the user is higher then 4 characters, 
    // we'll mask the last 4 digits.
    if (cc.length > 4) {
        let mySymbol = "#"
        // What the line below does?
        // It gets all the characters in the string up until the last fourth character and replaces them with '#'.
        // The substring method is responsible for returning the characters cited above and the repeat method replaces
        // the characters found by the substring method with '#' by repeating that symbol 'x' amount of times. 
        // 'x' equals the number of characters up until the last fourth character.
        return cc.replace(cc.substring(cc.length0,cc.length-4), mySymbol.repeat((cc.length)-4));
    } else {
        return cc
    }
};
