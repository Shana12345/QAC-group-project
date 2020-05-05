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

        stage('Tests'){
            when {
                expression { params.TEST == true }
            }
            steps {
                sh 'echo "Begin Tests!"'
                sh 'echo "backend testing"'
                sh './script/tests-back.sh'
                sh 'echo "frontend testing"'
                sh './script/tests-front.sh'
            }
        }

        stage('Deploy'){
            when {
                expression { params.DEPLOY == true }
            }
            steps {
                sh 'echo "Begin Deployment!"'
                sh './script/deployment.sh'
                sh 'echo "Deployment Complete!"'
            }
        }
    }
}