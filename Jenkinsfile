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
    }
}
   
}