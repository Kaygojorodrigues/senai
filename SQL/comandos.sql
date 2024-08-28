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

/*Ir atrás de um campo*/
SELECT obra FROM personagem_favorito WHERE nome = 'jujutsu';

/*Nesse caso, tem o operador lógico AND (TEM QUE TÁ ESCRITO CERTINHO IGUAL NA LISTA)*/

SELECT * FROM personagem_favorito WHERE nome = 'Nobara (OBVIO)' AND obra = 'Jujutsu';

/*Nesse caso, o OR foi usado*/

SELECT * FROM personagem_favorito WHERE nome = 'Nobara (OBVIO)' AND obra = 'Jujutsu';

/*NOTE é usado para negar uma condição*/

SELECT * FROM usuarios WHERE NOTE nome = "teste2"

/*
- ORDER BY serve para organizar os resultados de uma consulta em ordem crescente (ASC) ou decrescente (DESC) com base em uma ou mais colunas;
- DESC é um termo usado com o ORDER BY para indicar que a ordenaçõ deve ser em ordem decrescente.
*/
 
 SELECT nome FROM usuarios ORDER BY nome DESC

/*se colocar o ORDER BY sozinho ele automaticamente coloca em ordem crescente*/


/*chave estrangeira*/
CREATE TABLE usuarios ( id INT AUTO_INCREMENT PRIMARY KEY,
 nome VARCHAR(255) NOT NULL,
 endereco_id INT,
 FOREIGN KEY(endereco_id)REFERENCES endereco(endereco_id) 
 );

