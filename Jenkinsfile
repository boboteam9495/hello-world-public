pipeline {
         agent any
         stages {
                 stage('Build') {
                 	steps {
                                sh "./jenkins/build/mvn.sh mvn -B -DskipTests clean package"
                     		sh "./jenkins/build/build.sh"
				echo 'origin/' + sh(returnStdout: true, script: 'git rev-parse --abbrev-ref HEAD').trim()
				echo env.BRANCH
                 	}
                 }
                 stage('Test') {
                	steps {
                    		sh  "./jenkins/test/mvn.sh mvn test"
                 	}
                 }
                 stage('Push') {
			 when {
				 branch "master"
			 }
			 steps {
				sh "./jenkins/push/push.sh"
			}
                 }
	}
}
