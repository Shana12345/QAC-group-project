variable "ami_id" {
  default = "ami-08c757228751c5335"

}

variable "t2_micro" {
  default = "t2.micro"
}

variable "key_name" {
  default = "hifza-zaheer"
}



variable "network_address_space" {
  default = "10.1.0.0/16"
}

variable "subnet1_address_space" {
  default = "10.1.0.0/24"
}

variable "subnet2_address_space" {
  default = "10.1.1.0/24"
}

variable "cluster-name" {
  default = "terraform-eks-group-project"
  type    = string
}
