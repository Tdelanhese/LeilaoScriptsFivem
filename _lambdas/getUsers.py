import json
import boto3
from boto3.dynamodb.conditions import Key

dynamodb = boto3.resource('dynamodb')

tableUsers = dynamodb.Table('Users')


def lambda_handler(event, context):
    # Dados da mensagem vindos via HTTP GET
    # As chaves de event[] devem bater com os ids do formulário
    #haha
    user = str(event['login'])

    # O try/catch é para erro no acesso ao DynamoDB
    try:
        # Uma role deve ser configurada para a esta função,
        # permitindo Query para DynamoDB
        response = tableUsers.query(
            KeyConditionExpression=Key('login').eq(user))

        return {
        # Sucesso
            'statusCode': 200,
            'body': json.dumps(response["Items"])
        }

    except:
        # Erro: Imprime mensagem de erro no log da função lambda
        # print('Erro: lambda function terminada sem sucesso')
        return {
            'statusCode': 400,
            'body': json.dumps('Erro ao tentar recuperar mensagens')
        }