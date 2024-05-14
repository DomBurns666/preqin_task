from flask import Flask, render_template

app = Flask(__name__)
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/investors/<firm_id>')
def investor_details(firm_id):
    return render_template('investor.html', firm_id=firm_id)

if __name__ == '__main__':
    app.run(debug=True)
