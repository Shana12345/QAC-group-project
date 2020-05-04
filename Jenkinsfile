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
                sh './script/tests-back.sh'
                sh './script/tests-front.sh'
            }
        }

        stage('Deploy'){
            when {
                expression { params.DEPLOY == true }
            }
            steps {
                sh './script/deployment.sh'
            }
        }
    }
}