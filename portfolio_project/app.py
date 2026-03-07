from flask import Flask, render_template


class Portfolio:
    def __init__(self):
        self.app = Flask(__name__)
        self.project_name = "Portfolio Site"

        self.setup_route()

    def setup_route(self):
        @self.app.route("/")
        def home():
            return self.home_page()

        @self.app.route("/about")
        def about():
            return self.about_page()

        @self.app.route("/contact")
        def contact():
            return self.contact_page()

        @self.app.route("/projects")
        def projects():
            return self.projects_page()

        @self.app.route("/skills")
        def skills():
            return self.skills_page()

    def home_page(self):
        return render_template("index.html", brand=self.project_name)

    def about_page(self):
        return render_template("about.html", brand=self.project_name)

    def contact_page(self):
        return render_template("contact.html", brand=self.project_name)

    def projects_page(self):
        return render_template("projects.html", brand=self.project_name)

    def skills_page(self):
        return render_template("skills.html", brand=self.project_name)

    def run(self):
        self.app.run(debug=True)


# runing the file
if __name__ == '__main__':
    portfolio_site = Portfolio()
    portfolio_site.run()
