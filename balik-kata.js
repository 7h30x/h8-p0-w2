

//balik kata
function balikKata(kata) {
    let wordlength=kata.length;
    let reversekata=''
    for (x=wordlength-1; x>-1; x--) {
        reversekata += kata[x];    
    }
    return reversekata;
}
balikKata('hello')



