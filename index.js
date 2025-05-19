function vowelFinder (word){
    let array = [];
    let vowels = ["a","e","i","o","u","y","A","E","I","O","U","Y"];
    for(let j=0; j<word.length; j++){
        for(let i = 0; i<vowels.length; i++){
            if (word[j] == vowels[i]){
                array.push(j)
            }
        } 
    }
    for (let k = 0; k<array.length; k++){
        array[k] +=1
    }
    console.log(array)
}

console.log(vowelFinder("YoMama"))