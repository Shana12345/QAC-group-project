#EKS Cluster
resource "aws_eks_cluster" "QAC-group-project" {
  name     = var.cluster-name
  role_arn = aws_iam_role.group-project.arn

  vpc_config {
    security_group_ids = [aws_security_group.group-project.id]
    subnet_ids         = ["${aws_subnet.subnet1.id}", "${aws_subnet.subnet2.id}"]
  }

  # Ensure that IAM Role permissions are created before and deleted after EKS Cluster handling.
  # Otherwise, EKS will not be able to properly delete EKS managed EC2 infrastructure such as Security Groups.
  depends_on = [
    aws_iam_role_policy_attachment.group-project-AmazonEKSClusterPolicy,
    aws_iam_role_policy_attachment.group-project-AmazonEKSServicePolicy,
  ]
}

output "endpoint" {
  value = "${aws_eks_cluster.QAC-group-project.endpoint}"
}

output "kubeconfig-certificate-authority-data" {
  value = "${aws_eks_cluster.QAC-group-project.certificate_authority.0.data}"
}





