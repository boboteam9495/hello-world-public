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
				 branch 'master'
			 }
			 steps {
				sh "./jenkins/push/push.sh"
			}
                 }
}
}
