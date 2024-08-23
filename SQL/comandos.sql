/*Comandos para criar database (bando de dados)*/

CREATE DATABASE senai;


/*Comandos para criar tabela*/

CREATE TABLE Alunos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255)
)

/*Alterando o campo de uma tabela*/

ALTER TABLE alunos
CHANGE nome nome_pessoal VARCHAR(255)

/*Mudar o nome de uma tabela*/
RENAME TABLE aluno TO alunos

/*comando para apagar o campo de uma tabela*/
ALTER TABLE alunos DROP COLUMN nome;

/*adicionar um campo na tabela criada*/

ALTER TABLE alunos
ADD descrição VARCHAR(255);

/*adicionar itens nos campos*/
INSERT INTO produtos

/*caso você não colocou tudo junto e precise editar, use o UPDATE*/

UPDATE produtos
SET formula = 'hidratante', cor 'roxo'
WHERE id = 1;

UPDATE Clientes
SET Nome = 'CLIENTES VIP'
WHERE Idade > 30;

/*Comando para deletar um campo*/
DELETE FROM alunos WHERE id = 1;