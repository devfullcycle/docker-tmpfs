<p align="center">
  <a href="https://fullcycle.com.br/" target="blank"><img src="https://fullcycle.com.br/wp-content/themes/fullcycle/assets/images/fullcycle-logo.svg"/></a>
</p>


# Acelere seus testes com banco de dados usando o Docker tmpfs

## Sobre o repositório
Esse repositório contém todo código utilizado durante a aula: 

O tmpfs (temporary file system) é um sistema de arquivos que em vez de ser armazenados em disco, é armazenado diretamente na memóriam RAM. Qualquer leitura e escrita será feita na memória, o que acelera e muito o processo de I/O, já que a memória RAM é mais rápida com o disco.

Muitas pastas que acessamos no Linux, como /tmp, /run, /dev/shm podem estar sendo executadas na memória RAM.

Ele permitirá via Docker que você crie um banco de dados em memória RAM, o que acelerará muito seus testes.

## Rodando o projeto

Suba os containers sempre com um Node.js e uma dupla de banco de dados:
    
### Para MySQL    
```bash 
docker compose --profile mysql up -d
```
### Para PostgreSQL
```bash
docker compose --profile postgres up -d
```

### Para MongoDB
```bash
docker compose --profile mongo up -d
```

Entre no container do Node.js com o comando:
```bash
docker compose exec app bash
```

Dentro do container, instale as dependências do projeto:
```bash
npm install
```

Rode os testes:
```bash
# mysql
CONNECTION=mysql node --test --require ts-node/register src/entities.spec.ts

# postgres
CONNECTION=postgres node --test --require ts-node/register src/entities.spec.ts

# mongo
CONNECTION=mongo node --test --require ts-node/register src/entities.spec.ts
```
