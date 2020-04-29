provider "aws" {
  region                  = "eu-west-3"
  shared_credentials_file = "~/.aws/credentials"
  version                 = "~> 2.0"

}

module "aws_vpc" {
  source = "./VPC"
}

module "aws_sg" {
  source = "./Security-Group"
  aws_vpc = "${module.aws_vpc.vpc_id}"
}


module "cluster" {
  source = "./Cluster"
  aws_security_group = "${module.aws_sg.aws_sg}"
  aws_subnet1 = "${module.aws_vpc.subnet1}"
  aws_subnet2 = "${module.aws_vpc.subnet2}"
}

