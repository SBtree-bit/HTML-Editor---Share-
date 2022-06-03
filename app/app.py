from flask import Flask
from views import views
from flask_cors import CORS

app = Flask(__name__)

app.register_blueprint(views, url_prefix="/")

cors = CORS(app)

if __name__ == '__main__':
  app.run(debug=True, port=8000)