resource "aws_security_group" "group-project" {
  name        = "terraform-eks-group-project"
  description = "Cluster communication with worker nodes"
  vpc_id      = "${aws_vpc.vpc.id}"

  ingress {
    description = "TLS from VPC"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "TLS from VPC"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "terraform-eks-group-project"
  }
}

resource "aws_security_group_rule" "group-project-ingress-node-https" {
  description              = "Allow pods to communicate with the cluster API Server"
  from_port                = 443
  protocol                 = "tcp"
  security_group_id        = aws_security_group.group-project.id
  source_security_group_id = aws_security_group.nodes.id
  to_port                  = 443
  type                     = "ingress"
}






