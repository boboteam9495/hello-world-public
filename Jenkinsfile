pipeline {
         agent any
         stages {
                 stage('Build') {
                 	steps {
				echo 'origin/' + sh(returnStdout: true, script: 'git rev-parse --abbrev-ref HEAD').trim()
				echo GIT_BRANCH
				final scmVars = checkout(scm)
                                echo "scmVars: ${scmVars}"
                                echo "scmVars.GIT_COMMIT: ${scmVars.GIT_COMMIT}"
                                echo "scmVars.GIT_BRANCH: ${scmVars.GIT_BRANCH}"
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
				 branch "master"
			 }
			 steps {
				sh "./jenkins/push/push.sh"
			}
                 }
	}
}
