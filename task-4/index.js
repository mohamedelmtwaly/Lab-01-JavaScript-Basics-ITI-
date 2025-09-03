//TASK :

//WRITE SCRIPT ASK USER ENTER IMAGE NAME AND FONT COLOR AND DISPLAY THE RESULT  

let imageName = prompt("enter image name ");

let color = prompt("enter color ");

  let imgEle = `<img src="images/${imageName}.PNG" style="border:2px ${color} solid"/>
>`
// document.body.innerHTML= imgEle;