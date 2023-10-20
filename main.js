const add = document.querySelector(".add");
const input =  document.querySelector(".input");
const ul = document.querySelector("ul");
add.onclick = () =>
{
    if(input.value != "")
    {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        ul.appendChild(li);
        li.appendChild(span);
    } 
    input.value = ""
}
ul.onclick = (e) =>
{
    if(e.target.tagName === "LI") e.target.classList.toggle("done");
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove()
    }
}