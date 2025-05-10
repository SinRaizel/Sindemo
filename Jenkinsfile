stage('Deploy to K3s') {
    steps {
        withEnv(["KUBECONFIG=/etc/rancher/k3s/k3s.yaml"]) {
            sh 'kubectl apply -f /var/lib/jenkins/ci-cd/k8s/deployment.yaml'
        }
    }
}
