from flask import Flask


class HelloApp:
    def __init__(self):
        self.app = Flask(__name__)
        self.project_name = "Hello Web App"

        self.setup_route()

    def setup_route(self):
        @self.app.route("/")
        def hello():
            return f"Welcome to {self.project_name}!"

    def run(self):
        self.app.run(debug=True)


if __name__ == "__main__":
    hello_app = HelloApp()
    hello_app.run()
