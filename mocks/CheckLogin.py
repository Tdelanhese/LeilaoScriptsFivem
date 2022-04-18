import json
import requests

url = "https://tlqfsgoqta.execute-api.us-east-1.amazonaws.com/Inicial/"

x = {
  "login": "sa",
  "password": "sa_password22"
}

data_body_json = json.dumps(x)

headers = { 
    'Content-type': 'application/json' 
}

response = requests.get(url, data = data_body_json, headers = headers)