function process(){
    document.getElementById('image').src = "";
    document.getElementById('result').innerText = "";
    var path = document.getElementById('myFile').value;
    var final_path;
    var result;
    var temp = path.substring(12);
    setTimeout(function(){
    if(temp.includes("with_mask"))
    {
        final_path = "./assets/images/"+temp;
        result = "Person is Wearing Mask";
    }
    if(temp.includes("without_mask")){
        final_path = "./assets/images/"+temp;
        result = "Person is not Wearing Mask";
    }
    else{
        final_path = "./assets/images/"+temp;
        result = "Unidentified Image";
    }
    document.getElementById('image').src = final_path;
    document.getElementById('result').innerText = result;
    },2000)
}