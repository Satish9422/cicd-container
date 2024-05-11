pipeline {
    agent any

    stages {
        stage('Pre-build') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'aws-credentials', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                        def dockerLogin = "aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/k5c6v6o7"
                        sh dockerLogin
                    }
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    sh 'docker build -t youtube:latest .'
                    sh 'docker tag youtube:latest public.ecr.aws/k5c6v6o7/youtube:latest'
                }
            }
        }
        stage('Post-build') {
            steps {
                script {
                    sh 'docker push public.ecr.aws/k5c6v6o7/youtube:latest'
                    writeFile file: 'imagedefinitions.json', text: '[{"name":"HelloWorld","imageUri":"public.ecr.aws/k5c6v6o7/youtube:latest"}]'
                }
            }
        }
    }
}
