const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(){
    cats.push("Ralph")
}
function destructivelyPrependCat(){
    cats.unshift("Bob")
}
function  destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(){
    const cats = ["Milo", "Otis", "Garfield"]
    const newcts = [...cats, "Broom"]
    return newcts
}
function prependCat(){
    const cats = ["Milo", "Otis", "Garfield"];
    const addcat = ["Arnold", ...cats]
    return addcat
}
function  removeLastCat(){
    const cats = ["Milo", "Otis", "Garfield"];
    const eliminate = cats.slice(cats,cats.length-1)
    return eliminate
}
function removeFirstCat(){
    const cats = ["Milo", "Otis", "Garfield"];
    const remove = cats.slice(1)
    return remove
}