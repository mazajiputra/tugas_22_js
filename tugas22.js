var kalimat = "Saya ingin belajar bersama"
function toArray(data) {
    return data.split(" ");
}
function forEach(data) {
    data.map((item,index,array) =>{
        console.log("Item :",item,"Index ke",index);
    });
}

forEach(toArray(kalimat))
