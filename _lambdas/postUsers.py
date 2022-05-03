import json
from datetime import datetime
import boto3

dynamodb = boto3.resource('dynamodb')

tableUsers = dynamodb.Table('Users')


def lambda_handler(event, context):
    # data_hora = (datetime.now()).strftime("%Y-%m-%d %H:%M:%S")

    login = str(event['login'])
    senha = str(event['senha'])
    nome = str(event['nome'])
    sobrenome = str(event['sobrenome'])
    cpf = str(event['cpf'])
    dataNascimento = str(event['dataNascimento'])

    try:
        tableUsers.put_item (
            Item = {
                'login': login,
                'senha': senha,
                'nome': nome,
                'sobrenome': sobrenome,
                'cpf': cpf,
                'dataNascimento': dataNascimento,
            }
        )

        return {
            'statusCode': 200,
            'body': json.dumps('Usuário ' + login + ' inserido com sucesso no Banco de Dados')
        }

    except:
        print('Erro: LambdaZO terminada sem sucesso')

        return {
            'statusCode': 400,
            'body': json.dumps('Erro ao tentar processar mensagem')
        }