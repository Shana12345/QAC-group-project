# resource "aws_instance" "instance_1" {
#   ami                    = var.ami_id
#   instance_type          = var.t2_micro
#   subnet_id              = "${aws_subnet.subnet1.id}"
#   vpc_security_group_ids = ["${aws_security_group.group-project.id}"]
#   key_name               = var.key_name
# }
