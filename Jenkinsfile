pipeline {
    agent any

    environment {
        IMAGE_NAME = "lavender-coast"
    }

    stages {

        stage('Clone Repo') {
            steps {
                git 'https://github.com/Disha-Goyal1/lavender-coast-creations-13.git'
            }
        }

        stage('Install Frontend') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Install Backend') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker stop lavender || true
                docker rm lavender || true
                docker run -d -p 3000:80 --name lavender $IMAGE_NAME
                '''
            }
        }
    }
}
