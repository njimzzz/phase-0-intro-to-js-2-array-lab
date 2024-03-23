const cats = ["Milo", "Otis","Garfield"]
 function destructivelyAppendCat() {
    cats.push("Ralph")
 }
 function destructivelyPrependCat (){
    cats.unshift("Bob")
 }
 function destructivelyRemoveLastCat (){
    cats.pop()
 }
 function destructivelyRemoveFirstCat (){
    cats.shift()
 }
 
 function appendCat(){
    const appendCat1 = cats.slice()
    appendCat1.push("Broom")
    return appendCat1
 }

 function prependCat(){
    const prependCat1 = cats.slice()
    prependCat1.unshift("Arnold")
    return prependCat1
 }

 function removeLastCat(){
    const remove1 = cats.slice()
    remove1.pop()
    return remove1

 }

 function removeFirstCat(){
    const remove2 = cats.slice()
    remove2.shift()
    return remove2
 }
 

  


