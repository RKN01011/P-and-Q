from flask import Flask, request
import sql

data = sql.Data()
diary_list = data.get_diary_list()

def get_item(id):
    item = data.get_diary_item(int(id))

    return item[0][0]

app = Flask(__name__, static_folder='.', static_url_path='')

@app.route('/diary-list')
def get_diary_list():
    return diary_list


@app.route('/diary-item')
def get_diary_item():
    return get_item(request.args.get('id'))

app.run(port=5000, debug=False)