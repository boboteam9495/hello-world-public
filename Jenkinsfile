pipeline {
         agent any
         stages {
                 stage('Print Env Variable'){
			steps {
				echo sh(script: 'env|sort', returnStdout: true)
			}
                 }
                 stage('Maven-Build-Test-Parallel') {
                 	steps {
			  parallel(
			    build: {
                              sh "./jenkins/build/mvn.sh mvn -B -DskipTests clean package"
                              sh "./jenkins/build/build.sh"
                            },
                            test: {
                              sh "./jenkins/test/mvn.sh mvn test"
                            }
                         }
                 }
                 stage('Push') {
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
