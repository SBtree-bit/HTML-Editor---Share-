// This contains the project's code
var project = {
  name: document.currentScript.getAttribute("proj_name"),
  html: document.currentScript.getAttribute("proj_html"),
  css: document.currentScript.getAttribute("proj_css"),
  js: document.currentScript.getAttribute("proj_js")
}
document.body.innerHTML=project.html
document.body.innerHTML+=`<style>${project.css}</style>`
eval(project.js)