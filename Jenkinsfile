pipeline{
    agent any
    parameters {
        booleanParam (
            defaultValue: true,
            description: '',
            name: 'TEST')

        booleanParam (
            defaultValue: true,
            description: '',
            name: 'DEPLOY')
    }
    stages{

        stage('Backend Tests'){
            when {
                expression { params.TEST == true }
            }
            steps {
                sh 'chmod +x ./Script/*'
                sh 'echo "backend testing"'
                sh './Script/tests-back.sh'
            }
        }

        stage('Frontend Tests'){
            when {
                expression { params.TEST == true }
            }
            steps {
                sh 'chmod +x ./Script/*'
                sh 'echo "frontend testing"'
                sh './Script/tests-front.sh'
            }
        }

        stage('Deploy'){
            when {
                expression { params.DEPLOY == true }
            }
            steps {
                sh 'chmod +x ./Script/*'
                sh 'echo "Begin Deployment!"'
                sh './Script/deployment.sh'
                sh './Script/deployment2.sh'
                sh 'echo "Deployment Complete!"'
            }
        }
    }
}