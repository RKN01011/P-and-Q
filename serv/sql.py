from sqlite3 import connect
from json import dumps

class Data:
    def __init__(self):
        self._conn = connect('mydatabase.db', check_same_thread=False)
        self._cursor = self._conn.cursor()

    def _to_list(self, request_item):
        return {
            'id': request_item[0],
            'head': request_item[1]
        }

    def get_diary_list(self):
        self._cursor.execute('SELECT id, head FROM diary')
        result = self._cursor.fetchall()

        return dumps(list(map(self._to_list, result)))

    def get_diary_item(self, el):
        self._cursor.execute('SELECT content FROM diary WHERE id = (?)', [el])
        result = self._cursor.fetchall()

        return result
