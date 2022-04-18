import json
import requests

url = "https://d4wezrjrlf.execute-api.us-east-1.amazonaws.com/Versao2"

x = {
  "login": "sa",
  "password": "sa_password22",
  "nome": "Paulo",
  "sobrenome": "Plinio",
  "cpf": "458-519-187-69",
  "data_nascimento": "02/07/2002",
  "genero": "M",
}

data_body_json = json.dumps(x)

headers = { 'Content-type': 'application/json' }

response = requests.post(url, data = data_body_json, headers = headers)