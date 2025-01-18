var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return "";
    }
    
    let pref = strs[0];
    
    for (let i = 1; i < strs.length; i++) {
        // While the current string does not start with the prefix
        while (strs[i].startsWith(pref) === false) {
            // Remove the last character from the prefix
            pref = pref.slice(0, -1);
        }
    }
        return pref;
};

let strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));