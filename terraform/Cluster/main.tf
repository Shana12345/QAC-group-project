#EKS Cluster
resource "aws_eks_cluster" "group-project" {
  name     = var.cluster-name
  role_arn = "arn:aws:iam::792774100790:root"

  vpc_config {
    security_group_ids = [var.aws_security_group.id]
    subnet_ids         = ["${var.aws_subnet1.id}", "${var.aws_subnet2.id}"]
  }

  # Ensure that IAM Role permissions are created before and deleted after EKS Cluster handling.
  # Otherwise, EKS will not be able to properly delete EKS managed EC2 infrastructure such as Security Groups.
  depends_on = [
    aws_iam_role_policy_attachment.group-project-AmazonEKSClusterPolicy,
    aws_iam_role_policy_attachment.group-project-AmazonEKSServicePolicy,
  ]
}

output "endpoint" {
  value = "${aws_eks_cluster.group-project.endpoint}"
}

output "kubeconfig-certificate-authority-data" {
  value = "${aws_eks_cluster.group-project.certificate_authority.0.data}"
}


resource "aws_eks_node_group" "group-project" {
  cluster_name    = aws_eks_cluster.group-project.name
  node_group_name = "Nodes"
  node_role_arn   = "aws:iam::792774100790:group/DevTeam"
  subnet_ids      = ["${var.aws_subnet1.id}", "${var.aws_subnet2.id}"]
  istance_type    = "t2.micro"
  ec2_ssh_key = "hifza-zaheer"
  source_security_group_ids = [aws_security_group.group-project.id]

  scaling_config {
    desired_size = 1
    max_size     = 1
    min_size     = 1
  }

  # Ensure that IAM Role permissions are created before and deleted after EKS Node Group handling.
  # Otherwise, EKS will not be able to properly delete EC2 Instances and Elastic Network Interfaces.
  depends_on = [
    aws_iam_role_policy_attachment.group-project-AmazonEKSWorkerNodePolicy,
    aws_iam_role_policy_attachment.group-project-AmazonEKS_CNI_Policy,
    aws_iam_role_policy_attachment.group-project-AmazonEC2ContainerRegistryReadOnly,
  ]
}


