from flask import Flask, request
from flask_cors import CORS
​
app = Flask(__name__)
​
cors = CORS(app)
​
# / - root
@app.route('/', methods=['GET', 'POST'])
def home():
    file = open("text.txt","a")
    print(request.args)
    param1 = request.args.get('param1')
    try:
        print(param1)
        file.write(param1)
        fi
        write("\n")
    except:
        print("param1 isn't in param list")
    file.close()
    return "This is home"
​
@app.route('/hello/', methods=['GET', 'POST'])
def welcome():
    return "Hello World!"
​
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=105)