import json
import boto3

dynamodb = boto3.client('dynamodb')


def lambda_handler(event, context):
    # Dados da mensagem vindos via HTTP GET
    # As chaves de event[] devem bater com os ids do formulário

    try:

        response = dynamodb.scan(TableName='lances')


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