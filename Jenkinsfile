pipeline {
         agent none
         stages {
                 stage('Print Env Variable'){
			agent any
			steps {
				echo sh(script: 'env|sort', returnStdout: true)
			}
                 }
                 stage('Maven-Build-Test-Parallel') {
			agent any
                 	steps {
			  parallel(
			    build: {
                              sh "./jenkins/build/mvn.sh mvn -B -DskipTests clean package"
                              sh "./jenkins/build/build.sh"
                            },
                            test: {
                              sh "./jenkins/test/mvn.sh mvn test"
                            })
                         }
                 }
                 stage ('Approve') {
			steps {
				timeout(time:15, unit:'SECONDS') {
				input message:'Approve deployment?'
			      	}
			}
		 }
                 stage('Push') {
			agent any
			when {
				 expression {
					GIT_BRANCH == "origin/master"
				}
			}
			steps {
				sh "./jenkins/push/push.sh"
			}
		}
	}
}
