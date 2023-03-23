const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const para = document.createElement("p");
para.textContent = "Hey I'm red!"
para.style.color = "red";

const header = document.createElement("h3");
header.textContent = "I'm a blue h3!";
header.style.color = "blue";

const div = document.createElement("div");
div.style.backgroundColor = "pink";
div.style.border = "2px solid black";

const divHeader = document.createElement("h1");
divHeader.textContent = "I'm in a div";

const divPara = document.createElement("p");
divPara.textContent = "ME TOO!";


container.appendChild(content);
container.appendChild(para);
container.appendChild(header);
div.appendChild(divHeader);
div.appendChild(divPara);
container.appendChild(div);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World");
});