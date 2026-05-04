pipeline {
    agent any

    environment {
        IMAGE_NAME = "lavender-coast"
    }

    stages {

        stage('Clone Repo') {
            steps {
                git 'https://github.com/YOUR_USERNAME/YOUR_REPO.git'
            }
        }

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
                sh 'docker build -t $IMAGE_NAME .'
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
