import json
import requests

url = "https://d4wezrjrlf.execute-api.us-east-1.amazonaws.com/Versao2"

x = {
  "user": "sa",
  "id_leilao": 3,
  "value": 5000
}

data_body_json = json.dumps(x)

headers = { 'Content-type': 'application/json' }

response = requests.post(url, data = data_body_json, headers = headers)