#!/bin/bash

echo "[jenkins]" > ../ansible/inventory.cfg
cat ip_address.txt >> ../ansible/inventory.cfg # Calls the pub IP of EC2 created by terraform and pastes into inventory file
echo "" >> ../ansible/inventory.cfg
echo "[jenkins:vars]" >> ../ansible/inventory.cfg
echo "ansible_user=root" >> ../ansible/inventory.cfg
echo "ansible_ssh_common_args='-o StrictHostKeyChecking=no'" >> ../ansible/inventory.cfg
echo -e "\n\n\n" | ssh-keygen #generates ssh-keys if they don't already exist
echo "ansible_ssh_private_key_file=~/.ssh/id_rsa" >> ../ansible/inventory.cfg