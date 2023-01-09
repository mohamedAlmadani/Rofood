pipeline{
    agent any 

    parameters{
        string(name:'SPEC',defaultValue:"cypress/e2e/all.cy.js",description:"Enter the script path you want to ececute")
        choice(name:'BROWSER',choices:['chrome','edge','firefox'],description:"choice the browser yo want to execute ypur scripts")

    }
    
    stages{
       stage('Building'){
        steps{
            echo "Building the application"


        }
       } 
       stage('Testing'){
        steps{
            bat "npm i"
            bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
        }
       }
       stage('Deploying'){
        steps{
            echo "Deploy the application"

        }
        
       }
    }
   post{
    always{
     publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
    success {
            echo 'This will run only if successful'
        }
        failure {
            mail bcc: '', body: "<b>Example</b><br><br>Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER} <br> URL de build: ${env.BUILD_URL}", cc: '', charset: 'UTF-8', from: '', mimeType: 'text/html', replyTo: '', subject: "ERROR CI: Project name -> ${env.JOB_NAME}", to: "mzalmadany@gmail.com";
        }

    

    }
}
}
   
