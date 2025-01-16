let s="anagram"
let t="nagaram"

function anagram(s,t){

    if (s.length !== t.length) {
        return false;
    }
    else return s.split("").sort().join("")===t.split("").sort().join("");
}

function anagram2(s,t){
    if (s.length !== t.length) {
        return false;
    }
    let freq = {};
    for (let i = 0; i < s.length; i++) {
        if (freq[s[i]]) {
            freq[s[i]]++;
        }
        else {
            freq[s[i]] = 1;
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (freq[t[i]]) {
            freq[t[i]]--;
        }
        else {
            return false;
        }
    }
    return true;
}
console.log(anagram(s,t));
console.log(anagram2(s,t));