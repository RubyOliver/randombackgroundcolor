var button = document.querySelector("button");
var myContainer = document.querySelector(".myContainer");
var myH4 = document.querySelector(".myH4")


button.addEventListener("click", function(){
  // code to generate hex code
  const random_hex_color_code = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
  };

  // calling the function and assigning to variable to add styling and innterHTML
  var newColor = random_hex_color_code()
  myContainer.style.background = newColor;
  myH4.innerHTML = newColor;

})
