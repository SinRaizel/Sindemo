stage('Deploy to K3s') {
    steps {
        withEnv(["KUBECONFIG=/var/lib/jenkins/kubeconfig"]) {
            sh 'kubectl apply -f deployment.yaml'
        }
    }
}
