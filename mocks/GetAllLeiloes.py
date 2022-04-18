import json
import requests

url = "https://tlqfsgoqta.execute-api.us-east-1.amazonaws.com/Inicial/"

headers = { 
    'Content-type': 'application/json' 
}

response = requests.get(url, headers = headers)