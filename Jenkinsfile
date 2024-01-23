pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run cy:run'
            }
        }
        stage('Deploy') {
            steps {
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'mochawesome-report', reportFiles: 'index.html', reportName: 'EBAC Report', reportTitles: 'mochawesome.html', useWrapperFileDirectly: true])
            }
        }
    }
}
git branch: 'ci-cbs', url: 'https://github.com/claudio-bs/testes-e2e-ebac-shop.git'