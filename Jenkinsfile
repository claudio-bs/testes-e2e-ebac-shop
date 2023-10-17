pipeline {
    agent any

    stages {
        stage('Clonar o repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/claudio-bs/testes-e2e-ebac-shop.git'
            }
        }
        stage('Instalar as dependencias') {
            steps {
                bat 'npm install'
            }
        }
        stage('Executar Testes') {
            steps {
                bat 'npm run cy:run'
            }
        }
    }
}
