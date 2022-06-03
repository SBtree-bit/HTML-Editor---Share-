from flask import Blueprint, render_template, jsonify, request
import json
from replit import db

views = Blueprint("views", __name__)

@views.route("/")
def home():
  return render_template("index.html")

@views.route("/editor")
def editor():
  return render_template("editor.html", key=getAvaliableKey())

@views.route("/projects")
def projects():
  proj_list = []
  for i in db.keys():
    project = "{"
    project += "name: " + db[i]["name"]
    project += ", html: " + db[i]["html"]
    project += ", css: " + db[i]["css"]
    project += ", js: " + db[i]["js"] + "}"
    proj_list += project
  return render_template("projects.html", project_list=proj_list)

@views.route("/project/<identifier>")
def project(identifier):
  try:
    proj = db[identifier]
  except KeyError:
    proj = {"name": "Error", "html": "<h1>Sorry, this project doesn't exist!", "css": "h1 {text-align: center}", "js": "throw new RangeError('This project doesn't exist')"}
  return render_template("project.html", project=proj)

@views.route("/styles/<style_name>")
def style(style_name):
  file = open("styles/" + style_name)
  return file.read()

@views.route("/proj_data", methods=["POST"])
def postDATA():
  data = request.get_json()
  key = getAvaliableKey()
  db[key] = data
  return ""

@views.route("/edit_proj", methods=["POST"])
def postEDIT():
  data = request.get_json()
  db[data["key"]] = data["project"]
  return ""

def getAvaliableKey():
  keys = db.keys()
  key = len(keys)
  key += 1
  key = str(key)
  key = "2"
  return key