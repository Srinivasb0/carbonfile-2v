from flask import Flask, request
import pickle
import json
from flask_cors import CORS, cross_origin
app = Flask(__name__)
CORS(app, support_credentials=True)

# data = [[96.53629303,1.195881128,407.0305176,0.33975932,0.745303929,1.191978574,0.623761475,0.404462814,1.323605418,3.322424173,
#  2.803720236,333.6352844,1378.880859,1741.066528,1091.472656,1523.585449,717.5,1177.5,0.004692383,0.422699928,0.729155719,2.713955164,3.591895342,
# 3.567108154,
#  19.0,
#  54.0,
#  60.0,
#  1.115696907,
#  1.209330082,
#  0.89304471,
#  19.0,
#  26.0,
#  60.0,
#  2.94852066,
#  0.559443474,
#  0.817534447,
#  2.076514244,
#  0.908767223,
#  0.015077704,
#  0.000882426,
#  0.751848042,
#  14.14213562,
#  8.1049757,
#  0.095970303,
#  9.293166161,
#  405.8115234,
#  0.997240126,
#  4.920476913,
#  3.96e-06,
#  2.44937849,
#  0.304784656,
#  6.910558701,
#  0.813673198,
#  97.75122833,
#  0.931171417,
#  0.570615828,
#  0.297301097,
#  -80.264135,
#  43.709067]]

@app.route('/')
def start():
    return "Project APP"

@app.route('/predict',methods = ['GET','POST'])
@cross_origin(supports_credentials=True)
def main():
    body = {
    "message": "OK",
        }
    content = json.loads(request.data)
    data = content['data']
    model = pickle.load(open('soc.pkl', "rb"))
    body['SOC'] = str(model.predict(data)[0])
    response = {
            "statusCode": 200,
            "body": json.dumps(body),
            "header" : {
                "Content-Type": "application/json", 
                "Access-Control-Allow-Origion" : "*"
            }
        }
    return response

if __name__ == '__main__':
	app.run(debug=True)