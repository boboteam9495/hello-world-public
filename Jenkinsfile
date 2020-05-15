pipeline {
         agent any
         stages {
                 stage('Build') {
                 	steps {
                                sh "./jenkins/build/mvn.sh mvn -B -DskipTests clean package"
                     		sh "./jenkins/build/build.sh"
                 	}
                 }
                 stage('Test') {
                	steps {
                    		sh  "./jenkins/test/mvn.sh mvn test"
                 	}
                 }
                 stage('Push') {
			 when {
				 expression {
					 GIT_BRANCH = 'origin/' + sh(returnStdout: true, script: 'git rev-parse --abbrev-ref HEAD').trim()
					 return GIT_BRANCH == 'origin/master'
				 }
			 }
			 steps {
				sh "./jenkins/push/push.sh"
			}
                 }
}
}
