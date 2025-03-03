let num = parseInt(prompt("nhập một số nguyên"));
if(num <= 0){
    document.write("số" + num + "không phải là số nguyên:");
}else{
    if(num % 2 == 0) {
        document.write("số" + " " + num + " " + "là số chẵn:");
    }else {
        document.write("số" + " " + num + " " +" là số lẻ:");
    }
};
