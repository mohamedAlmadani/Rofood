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
     post {
            always{
              
                
                emailext to: "mzalmadany@gmail.com",
                subject: "jenkins build:${currentBuild.currentResult}: ${env.JOB_NAME}",
                body: "${currentBuild.currentResult}: Job ${env.JOB_NAME}\nMore Info can be found here: ${env.BUILD_URL}"
               
                 }
        }

}
   
