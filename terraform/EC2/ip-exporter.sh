#!/bin/bash

echo "[jenkins]" > ../ansible/inventory.cfg
echo $(terraform output public_ip) >> ../ansible/inventory.cfg
echo "" >> ../ansible/inventory.cfg
echo "[jenkins:vars]" >> ../ansible/inventory.cfg
echo "ansible_user=root" >> ../ansible/inventory.cfg
echo "ansible_ssh_common_args='-o StrictHostKeyChecking=no'" >> ../ansible/inventory.cfg
echo "ansible_ssh_private_key_file=~/.ssh/id_rsa" >> ../ansible/inventory.cfg