pipeline {
    agent any

    environment {
        IMAGE_NAME = "lavender-coast"
    }

    stages {

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

        stage('Run') {
            steps {
                sh '''
                docker stop lavender || true
                docker rm lavender || true
                docker run -d -p 3000:3000 -p 5000:5000 --name lavender $IMAGE_NAME
                '''
            }
        }
    }
}
