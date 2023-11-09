import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


(async () => {
  const pessoasEndereco = await prisma.pessoa.create({
    data: {
      name: "Luis8",
      email: "teste9@teste.gmail",
      enderecos: {
        create: {
          rua: "Exemplo",
        },
      },
    },
  });
  console.log(pessoasEndereco);
})();


/*
(async () => {
    const pessoas = await prisma.pessoa.count();
    console.log(pessoas);
})();

(async () => {
    const pessoa1 = await prisma.pessoa.count();
    const enderecos = await prisma.endereco.count();
    console.log({pessoas,enderecos});
})();

(async () => {
  const pessoas = await prisma.pessoa.findMany({
    select:{
      id: true,
      email: true,
      name: true,
      enderecos: true
    },
  });
  console.log(pessoas);
})();

(async () => {
  const pessoasEndereco = await prisma.pessoa.create({
    data: {
      name: "Luis8",
      email: "teste9@teste.gmail",
      enderecos: {
        create: {
          rua: "Exemplo",
        },
      },
    },
  });
  console.log(pessoasEndereco);
})();

(async () => {
    const pessoa1 = await prisma.pessoa.create({
        data: {
            name: "Luis",
            email: "teste@teste.gmail",
            enderecos: {
                connectOrcreate: { Se o valor existir na tabela ele fará a busca,se não existir não fará
                    where: {
                        id:1

                    }
                }
            }
        }
    });
    console.log(pessoa1);
})();

(async () => {
    const pessoas = await prisma.pessoa.findMany({
        select: {
            id:true,
            name: true,
            email:true,
            endereco:true,
        },
    });
    console.log(pessoas);
})();

(async () => {
    const pessoas = await prisma.pessoa.findMany({
        where: {
            name: "L"
        }
    });
    console.log(pessoas);
})();

// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

model Pessoa {
  id       Int        @id @default(autoincrement()) //Estou criando um atributo id do tipo inteiro que é nossa chave primária(@id) e passamos como valor padrão o autoincrement para que para cada novo valor seja adicionado +1 ao atributo id
  email    String     @unique //Atributo email do tipo string e de valor unico(@unique),ou seja não terá duplicatas
  name     String? //Atributo nome do tipo string onde não é obrigatório ter(?)
  Endereco Endereco[]
}

model Endereco {
  id       Int     @id @default(autoincrement())
  rua      String
  Pessoa   Pessoa? @relation(fields: [pessoaId], references: [id])
  pessoaId Int?
}

//npx prisma generate:Gera um modelo em typescript 
//import { PrismaClient } from '@prisma/client' const prisma = new PrismaClient()
//import { PrismaClient } from '@prisma/client/edge'const prisma = new PrismaClient()

*/
