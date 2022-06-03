// This is the project variable
var project = {
  /* This is the project name */
  name: "",
  /* This is the project's HTML data */
  html: "",
  /* This is the project's CSS data */
  css: "",
  /* This is the project's JS data */
  js: ""
}

fetch("/proj_data", {
  "method": "POST",
  "headers": {
    "Content-type": "application/json",
    "Accept": "application/json"
  },
  "body": JSON.stringify(project)
})

var project_id = document.currentScript.getAttribute("proj_id")

document.querySelector("#result_link").href = "localhost:8000/project/" + project_id
document.querySelector("#result").src = "localhost:8000/project/" + project_id

document.querySelector("#name").onchange = function () {
  project.name = this.value
  fetch("/edit_proj", {
    "method": "POST",
    "headers": {
      "Content-type": "application/json",
      "Accept": "application/json"
    },
    "body": `{"key": ${project_id}, "project":             ${JSON.stringify(project)} }`
  })
  document.querySelector("#result").src = "localhost:8000/project/" + project_id
}

document.querySelector("#html").onchange = function () {
  project.html = this.value
  fetch("/edit_proj", {
    "method": "POST",
    "headers": {
      "Content-type": "application/json",
      "Accept": "application/json"
    },
    "body": `{"key": ${project_id}, "project":             ${JSON.stringify(project)} }`
  })
  document.querySelector("#result").src = "localhost:8000/project/" + project_id
}

document.querySelector("#css").onchange = function () {
  project.css = this.value
  fetch("/edit_proj", {
    "method": "POST",
    "headers": {
      "Content-type": "application/json",
      "Accept": "application/json"
    },
    "body": `{"key": ${project_id}, "project":             ${JSON.stringify(project)} }`
  })
  document.querySelector("#result").src = "localhost:8000/project/" + project_id
}

document.querySelector("#js").onchange = function () {
  project.js = this.value
  fetch("/edit_proj", {
    "method": "POST",
    "headers": {
      "Content-type": "application/json",
      "Accept": "application/json"
    },
    "body": `{"key": ${project_id}, "project":             ${JSON.stringify(project)} }`
  })
  document.querySelector("#result").src = "localhost:8000/project/" + project_id
}

// This is the code to init the project:
/*
fetch("/proj_data", {
  "method": "POST",
  "headers": {
    "Content-type": "application/json",
    "Accept": "application/json"
  },
  "body": JSON.stringify(project)
})
*/
// This is the code to edit the project:
/*
fetch("/edit_proj" {
  "method": "POST",
  "headers": {
    "Content-type": "application/json",
    "Accept": "application/json"
  },
  "body": `{"key": ${project_id}, "project": ${JSON.stringify(project)} }`
})
*/