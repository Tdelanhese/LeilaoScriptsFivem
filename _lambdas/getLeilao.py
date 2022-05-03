import json
import boto3

dynamodb = boto3.client('dynamodb')

def lambda_handler(event, context):
    try:
        response = dynamodb.scan(TableName='Leiloes')


        return {

            'statusCode': 200,
            'body': json.dumps(response["Items"])
        }

    except:
        return {
            'statusCode': 400,
            'body': json.dumps('Erro ao tentar recuperar mensagens')
        }