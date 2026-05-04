pipeline {
    agent any

    environment {
        IMAGE_NAME = "lavender-coast"
    }

    stages {

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build --no-cache -t $IMAGE_NAME .'
            }
        }

        stage('Run') {
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
