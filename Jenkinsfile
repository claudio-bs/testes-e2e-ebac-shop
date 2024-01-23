pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                bat 'npm run cy:run'
            }
        }
        stage('Deploy') {
            steps {
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'mochawesome-report', reportFiles: 'index.html', reportName: 'EBAC Report', reportTitles: 'mochawesome.html', useWrapperFileDirectly: true])
            }
        }
    }
}