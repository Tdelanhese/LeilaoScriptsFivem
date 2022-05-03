import json
import boto3

dynamodb = boto3.resource('dynamodb')

tableLances = dynamodb.Table('lances')


def lambda_handler(event, context):

    idLance = str(event['idLance'])
    idLeilao = str(event['idLeilao'])
    loginUser = str(event['loginUser'])
    valor = str(event['valor'])

    print(idLance, idLeilao, loginUser, valor)


    try:
        tableLances.put_item (
            Item = {
                'idLances': idLance,
                'idLeilao': idLeilao,
                'loginUser': loginUser,
                'valor': valor
            }
        )

        return {
            'statusCode': 200,
            'body': json.dumps('Lance para Leilao ' + idLeilao + ' inserido com sucesso no Banco de Dados')
        }

    except:
        print('Erro: LambdaZO terminada sem sucesso')

        return {
            'statusCode': 400,
            'body': json.dumps('Erro ao tentar processar mensagem')
        }