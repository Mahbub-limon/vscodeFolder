var add = document.getElementById('add');
add.addEventListener('click',function(){
    var input = document.getElementById('input').Value;
     console.log(input);


     var text = document.createTextNode(input);

     var newli = document.createElement('li');
    newli.appendChild(text);

    var newolitem = document.getElementById('olitem');
    newolitem.appendChild(newli);
    console.log(newolitem);
   


})