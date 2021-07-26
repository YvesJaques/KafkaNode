# Micro-serviço com node.js

- Utilizando Kafka.
- Utilizando Node;

## Fluxo da aplicação

- API principal (Station);
- Geração de certificado;

## Fluxo

- API principal envia uma mensagem pro serviço de certificado para gerar o certificado;
- Micro-serviço de certificado devolve uma resposta (síncrona/assíncrona);

Se conseguir síncrona/assíncrona:
- Receber uma resposta assíncrona de quando o e-mail com o certificado foi enviado;

## Informações extra

- REST (latência)
- Redis / RabbitMQ / **Kafka**;

- Nubank, Uber, Paypal, Netflix;