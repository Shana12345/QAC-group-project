# QACFinalProject

## Contents 
* [Introduction](#Introduction)  
  * [Project Brief](#Brief)
  * [Our Solution](#Solution)
* [Deployment Pretequisites](#prerequisites)
* [Planning](#planning)
* [Risk Analysis](#Risk) 
  * [Initial Risk Analysis](#InitialRisk)
  * [Final Risk Analysis](#FinalRisk)
  * [Risk Analysis Matrix](#RiskMatrix)
* [Architecture](#Architecture)
  * [Feature Branch Model](#FeatureBranch)
  * [Environments](#Environments)
  * [Technologies Used](#Technology) 
* [Testing](#Testing)
  * [Front End Testing](#Frontend)
  * [Back End Testing](#Backend)
  * [Coverage Report](#Coverage)
* [Deployment](#Deployment)
  * [Deployment Pipeline](#Pipeline)
* [Costs](#Costs) 
* [Retrospective](#Conclusion) 
  * [What Went Well](#Good)
  * [What Went Wrong](#Bad)
  * [Future Improvements](#Improvements) 
* [Installation Guide](#InstallationGuide)
* [Authors](#Authors)

<a name="Introduction"></a>
## Introduction 
<a name="Brief"></a>
### Project Brief
+ Deploying frontend (Angular js) and backend (Restful API) applications.
+ The general outline of this project was to use all the concepts learnt out to this point, design and implement a solution for automating the deployments and development workflows for the projects that is linked below: 
 
**Backend of the client's application:** https://github.com/spring-petclinic/spring-petclinic-rest
 
**Frontend of the client's application:** https://github.com/spring-petclinic/spring-petclinic-angular
 
As a group of 5 individuals we would have to either use the tools we had been taught during our training such as **Terraform, Kubernetes, Ansible and Jenkins** or utilise other tools that would work in a similar fashion to these justifying why they would be the most preferable for deployment. 

The deployment of this project would require automated building and re-deployment to testing and live environments upon any GitHub changes, whilst also keeping track of running costs.   

<a name="Solution"></a>
### Our Solution:
+ Deploying infrastructure including EKS Cluster and Jenkins Server via Terraform
+ Utilising Docker to build images based on the applications
+ Containerising applications via Kubernetes 
+ Utilising Ansible for infrastructure configuration
+ Deploying Jenkins for CI/CD with Github Webhook integration 


<a name="prerequisites"></a>
## Deployment Prerequisites
A unix-machine with Terraform and Ansible installed along with subscription to a cloud provider. In this case the cloud provider used is Amazon Web Service (AWS), but this can be configured with any other provider.

### Terraform
Terraform needs to be configured with a provider to manage resources. In this case a service principal is set up, allowing Terraform to connect to our AWS subscription with full AWS access and a secret access key.

### Ansible
A Unix based system is required in order to run Ansible (we used Ubuntu 18.04 LTS), and configure the virtual machines created by Terraform.

<a name="planning"></a>
## Planning

As this is a group project composed of 5 members, there will need to be adequate planning measures in place so that all individuals can work efficiently and coherently towards the main goal which is the successful deployment of the application.  

Therefore, throughout the duration of this project we chose to employ **Scrum** as our project management framework. Unlike conventional methods of project planning, Scrum promotes and encourages teams to learn through experiences, self-organise and share ideas whilst working towards resolving a problem.

To follow best practice within industry, we use a Kanban board to manage the project. We chose to use the Trello application to create the Kanban board, due to familiarity with the software. The MoSCow Prioritisation Method has been used in order to identify key areas of development, thus allowing for a functional product to be presented as early as possible, increasing the complexity of the project once the minimum viable product is met.

The board is designed around the continous deployment and implementation of the application, along with other features needed for the specifics of the project. 

The product backlogs also serve as user stories, which are then further broken down into the sprint backlog, a multitude of tasks, work in progress and done tasks. All these entries allow for dynamic progress update of the project as well as maintenance of the obtainable objectives in order to be able to deliver the final product by the deadline. The image below represents the Kanban board at the beginning of the project. 

![Group-Trello-1](https://i.imgur.com/022Y2UG.png?1)

We defined "done" as to mean that the feature had been successfully implemented into the application and had no negative effects. Any implemented feature that negatively effected the performance of the application were logged into the bugs column, which can be seen in the image below, representing the end of the project.  


![Group-Trello-2](https://i.imgur.com/lbRDB87.png?1)


Throughout the duration of the project the group had daily standup meetings where we would inform each other what we have been working on, review what was left to do and make a suitable plan of action for the rest of the day, filling in the tasks we had discussed under each sprint, as well as assigining new tasks to invdividuals.


<a name="Risk"></a>
## Risk Analysis 

<a name="InitialRisk"></a>
## Initial Risk Analysis
The project started by creating an initial risk assessment as shown below. As the project went on, new risks started appearing as well as current risks changing their likelyhood of occurrence at it got closer to the end of the project.

| Risk ID       | Risk Description   | Mitigation     | Likelyhood of occurrence |  Possible Impact  | Impact at occurrence| 
|:-------------:|:------------------:|:--------------:|:------------------------:|:-----------------:|:-------------------:|
| 1    | Unstable internet connection | Work on the project during early hours, avoid working on the online parts of the project late at night, as it has been observed that this is when the internet connection is slowest. If the connection is constantly unstable, attempt to hot-spot from a 4G network to your laptop. | 4 | Not being able to deliver parts of the project in the desired time. Slowing down the team, and hence having a delaying impact upon the project deadline. | 5|
| 2    | Data compromised on the workstations | Make frequent back ups of the project and ensure computer is locked when leaving the station unattended. Ensure version controlling any changes at the end of each day.  | 2 | Having to start the project/parts of the project from scratch, missing out on possible crucial information previously included. | 3|
| 3    | Security breach of the main AWS account | Ensure a strong password is selected, encrypt the data and set up strong firewall rules.  | 2 | Having to re-create the entire architecture from scratch, not being able to present much on the day. Potentially extremely high impact, especially if combined with data being compromised on the workstations. | 5|
| 4    | Using up the free tier resources  | Ensure the instances are swithched off at the end of the day, do not leave anything running overnight, and make sure you thoroughly check for any missed instances before logging off for the day.  Ensure the billing alert is set to alert you whenever a certain amount of money is spent. Although we have an allowence, it is advised we do not overuse it.  | 5 | Being charged, and not being able to pay the money back if a certain amount of resources are used for a long period of time.  | 4 |
| 5    | Falling Ill  | Work from home, do not leave the house unless necessary. If the house has been left, ensure hands are thoroughly washed upon return.  | 4 | Not being able to work, lacking focus, potentially getting admitted into hospital, and therefore not being able to deliver a project. | 5|
| 6    | Not getting along with the other teammates | Ensure communication throughout the team at all times, if there is something that the teammates do not agree upon, it should be discussed as a group and resolved immediately, avoiding future conflict.  | 1 | Not being able to work as a team. Working individually, creating unnecessary tension and making it a stressful environment to be working in.  | 4|
| 7    | Difficulty understanding the material  | Make use of all the resources and of the daily scrum meetings. Ask questions all the time, do not be afraid to ask the teammates for help when needed.   | 4 | Struggling to deliver your part of the project and hence dragging te team down.   | 3|
| 8    | Not understanding the project brief | Always ask questions. Make sure you are on the same page as your team mates when it comes to the objective of the project. Constant checks such as daily scrum meetings help keep in contact and making sure everyone  understands their brief | 4 | Delivering something unrelated to the task you were given, hence potentially costing the team precious time by having to re-build it.  | 3|

<a name="FinalRisk"></a>
## Final Risk Analysis

| Risk ID       | Risk Description   | Mitigation     | Likelyhood of occurrence |  Possible Impact  | Impact at occurrence| 
|:-------------:|:------------------:|:--------------:|:------------------------:|:-----------------:|:-------------------:|
| 1    | Unstable internet connection | Work on the project during early hours, avoid working on the online parts of the project late at night, as it has been observed that this is when the internet connection is slowest. If the connection is constantly unstable, attempt to hot-spot from a 4G network to your laptop. | 5 | Not being able to deliver parts of the project in the desired time. Slowing down the team, and hence having a delaying impact upon the project deadline. | 5|
| 2    | Data compromised on the workstations | Make frequent back ups of the project and ensure computer is locked when leaving the station unattended. Ensure version controlling any changes at the end of each day.  | 3 | Having to start the project/parts of the project from scratch, missing out on possible crucial information previously included. | 4|
| 3    | Security breach of the main AWS account | Ensure a strong password is selected, encrypt the data and set up strong firewall rules.  | 2 | Having to re-create the entire architecture from scratch, not being able to present much on the day. Potentially extremely high impact, especially if combined with data being compromised on the workstations. | 5|
| 4    | Using up the free tier resources  | Ensure the instances are swithched off at the end of the day, do not leave anything running overnight, and make sure you thoroughly check for any missed instances before logging off for the day.  Ensure the billing alert is set to alert you whenever a certain amount of money is spent. Although we have an allowence, it is advised we do not overuse it.  | 5 | Being charged, and not being able to pay the money back if a certain amount of resources are used for a long period of time.  | 2 |
| 5    | Falling Ill  | Work from home, do not leave the house unless necessary. If the house has been left, ensure hands are thoroughly washed upon return.  | 3 | Not being able to work, lacking focus, potentially getting admitted into hospital, and therefore not being able to deliver a project. | 5|
| 6    | Not getting along with the other teammates | Ensure communication throughout the team at all times, if there is something that the teammates do not agree upon, it should be discussed as a group and resolved immediately, avoiding future conflict.  | 1 | Not being able to work as a team. Working individually, creating unnecessary tension and making it a stressful environment to be working in.  | 4|
| 7    | Difficulty understanding the material  | Make use of all the resources and of the daily scrum meetings. Ask questions all the time, do not be afraid to ask the teammates for help when needed.   | 4 | Struggling to deliver your part of the project and hence dragging te team down.   | 3|
| 8    | Not understanding the project brief | Always ask questions. Make sure you are on the same page as your team mates when it comes to the objective of the project. Constant checks such as daily scrum meetings help keep in contact and making sure everyone  understands their brief | 4 | Delivering something unrelated to the task you were given, hence potentially costing the team precious time by having to re-build it.  | 3|
| 9    | Not being able to connect the two parts of the project together| Ask teammates for help. Work together to achieve the main goal of the project. If in doubt, ask other colleagues from different teams for help when getting stuck. Keep asking the trainer for help as well. | 5 | Not being able to deliver the most important part of the project, therefore delivering an incomplete project and not meeting the brief.  | 5|

<a name="RiskMatrix"></a>
## Risk Analysis Matrix

A risk matrix is a matrix that is used during the risk assessment process to define the level of risk by considering the category of probability or likelihood against the category of consequence severity. This is a simple mechanism to increase visibility of risks and assist management decision making.

![Risk Assessment Matrix](https://i.imgur.com/dgm9rDZ.png)


<a name="Architecture"></a>
## Architecture

<a name="FeatureBranch"></a>
## Feature Branch Model
The project consists of 7 branches, to ensure code quality across the duration of the project. As this is a group project, it has been decided that each member would have their own branch, as shown in the image below. The developer branch has been kept alongside the master branch for any last minute changes, when the members' branches are all merged into it. 

![Feature Branch Model](https://i.imgur.com/QMEGqRH.png)

All the branches presented above have now been merged into the master branch, ready for the delivery of the project. 


<a name="Environments"></a>
## Environments
In this project we used multiple environments and tools to test, build and deploy the applications. The image below shows the initial deployment diagram we started building the project around. We have decided to have Terraform and Ansible installed on the local machine, a Jenkins server on AWS platform, and the EKS cluster on AWS. 

![Initial Diagram](https://i.imgur.com/uidsHny.png)

As the project started progressing, the diagram changed shape to a closer representation of the project. This can be seen in the image below. 

![Final Diagram](https://i.imgur.com/MWmSKn9.png)

Terraform was used to create our deployment infrastructure as code, in this case to create two environements: Staging and Production. The environments have 1 Kubernetes Cluster and all its dependencies, 1 Virtual Machine for controlling the clusters using kubernetes commands and testing the application, and finally a Jenkins CI/CD server which executes the pipeline by building, testing and deploying the application on the Kubernetes cluster.

We chose Terraform as it allows us write infrastructure as code in a quicker and easier manner than using the conventional way. The infrastructure configurations can be versioned and maintained, so if another environment needs to be created, you can ensure the latest configurations are used, thus avoiding environment drift.

Ansible was used to provision and configure the dependencies required to test and build our application on our remote hosts. This has been done so that our app could be deployed seamlessly after Terrafform creates the infrastructure needed. We created multiple custom roles inside Ansible that install Docker, install the dependencies our application needs, configure Jenkins and more.

We chose Ansible for this project as it is a very useful automation tool that lets you configure, manage and deploy applications. It can easily configure Windows machines as well as Linux machines, the YAML language is easy to read and understand and gives a clear view of the process. 

The Kubernetes cluster has been created using Terraform in the testing and production environments. Kubernetes helped deploy the application containers and was used because it is able to manage, scale and deploy large applications.

<a name="Technology"></a>
## Technologies Used

| Technology       |  Description    |
|:-------------:|:------------------:|
| GitHub    | Due to familiarity, cost and ease of access, the group decided to use GitHub to aid with the version control of the application. It also provides ease when integrating with the deployment pipeline, allowing us to seamlessly apply changes and implement them.  | 
| Docker | Used to create an image of the front end application. |
| Terraform | Enables us to create the base infrastructure and configure virtual machines for Jenkins and Kubernetes. |
| Ansible | Allows us to provision, manage and automate the deployment of containers across nodes. |
| Jenkins | Used to implement continuous integration within our application. Used alongside GitHub to implement the pipeline. |
| Kubernetes | Used to create multiple nodes that will manage, scale and run the final application. |


<a name="Testing"></a>
## Testing


<a name="Backend"></a>
## Backend Testing

[backend1]: https://i.imgur.com/uJ8MyA1.png

![backend1][backend1]

<a name="Frontend"></a>
## Frontend Testing

[frontend1]:  https://i.imgur.com/k97xgf0.png

![frontend1][frontend1]

[frontend2]:  https://i.imgur.com/5prY8Jm.png

![frontend2][frontend2]

<a name="Coverage"></a>
## Coverage Report



<a name="Deployment"></a>
## Deployment


The App was deployed using Ansible,Jenkins and Nginx.

 + Ansible Configuration Management tool is used to install the dependencies onto the Jenkins server by deploying Ansible Playbook
+ This prevents human error as ansible is a configuration management tool therefore, it deploys the same software to as many worker nodes automatically without installing them manually which not only saves time but also prevents human error.
+ Jenkins server updates kubeconfig for EKS Cluster and deploys Kubernetes where the pods are created.
+ Nginx then conducts a Reverse Proxy into Frontend.

Below is the diagram demonstrating the **Deployment Process**:

[deployment]:  https://i.imgur.com/22uffu5.png

![deployment][deployment]

<a name="Pipeline"></a>
## Deployment Pipeline

As previously mentioned, Terraform has been used to create the infrastructure. The next step was to use Ansible to install all the dependencies on the Virtual Machines. The build process is then triggered, Jenkins starts, tests the application and if the test succeeds, the deployment stage of the pipeline is triggered. The application would then be deployed on the Kubernetes cluster within AWS. 

![deployment](https://i.imgur.com/NM5hLSI.png)


<a name="Costs"></a>
## Costs
We used Pricing Calculator to configure and estimate the monthly running costs for the AWS services used. We have decided we needed 2 Virtual Machines and the AWS Kubernetes Service. The application has been deployed in the eu-west-3 region, meaning that the virtual resources we have used are based in Paris, Europe. We have been allocated a budget of £20 at the beginning of the project however, as the time went on, we have spent a very small amount of the allocated budget. The cost had been minimised by stopping the resources at the end of each working day and by setting up a billing alert when the cost increased to more than £5. 

![Pricing](https://i.imgur.com/nE7eKnb.png)

The initial estimate came to just under £5 for the 9 days we had allocated for the project, for 8 hours a day, thus the low limit of the billing alert. The cost has been calculated based on the use of only two t2.medium instances, however another two t2.small instances have been used. The final cost has not reached the billing alert across the team, and therefore we believed we have delivered a very cost efficient solution.   


<a name="Conclusion"></a>
## Retrospective

<a name="Good"></a>
## What went well
* Using terraform to create the infrastructure went swiftly without many issues. 
* Team meetings were helpful and orientating.
* Good team communication throughout the duration of the project. 
* Created the Ansible and Jenkins files without much difficulty.
* Delivered a cost efficient solution.

<a name="Bad"></a>
## What went wrong
* Running the frontend application came with some issues that requiered the help of our trainer.
* Creating the pods for the cluster took longer than expected.
* Issues when using the AWS free tier service, so had to pay for running the simple Virtual Machines. 
* The backend and frontend of the application not communicating, wasted a lot of time on trying to fix the issue. 

<a name="Improvements"></a>
## Future improvements
* Add the CloudWatch alert.
* Implement the Lambda function to take daily snapshots.
* XRay to be implemented on the spring application so we can monitor the API level request.
* CodePipeline as a serverless solution and replace Jenkins.

A Future Sprint has been displayed on the Trello Board below:

[future]:  https://i.imgur.com/YT2bohn.png?1

![future][future]


<a name="InstallationGuide"></a>
## Installation Guide
## Pre-requisites
* AWS account
* AWS CLI account
* Terraform knowledge
* Kubernetes knowledge

## Steps
* Clone the project from this repository using the git clone command. 
* Log in to you AWS account. 
* Create an AWS .pem key, if you don't already have one. This needs to be created in the same region as the one you intend to deploy your project, in this case it would be in the eu-west-3 region.
* Log in on the terminal using your AWS CLI account. 
* Using [this](https://learn.hashicorp.com/terraform/getting-started/install.html) link, install terraform on your local machine.
*	Navigate into the terraform folder within this repository. Run terraform init to initialize a working directory containing Terraform configuration files.
*	Run the terraform plan command to verify the integrity of the code.
*	If no errors show up, use the command terraform apply to build the infrastructure. This will last around 10 minutes.
*	Navigate to the ansible folder within this repository and run the ansible playbook to install dependencies onto Jenkins server.
*	Navigate to AWS web console and shh into the Jenkins server that has been created via terraform.
*	Run sudo su jenkins command
*	Run aws configure
*	Input your Access_key and Secret Access key here (Remember IAM user to have EKS full access)
*	Manually create kubeconfig file and add the following for the cluster:
    1.  endpoint-url
    2.	base64-encoded-ca-cert
    3.	cluster-name (Follow this [link]( https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html) for further guidance)
*	Update kubeconfig for the cluster
*	Get the IP address of the server you're on.
*	Open a web browser and paste it on the address bar with :8080 at the end of the URL.
*	Log into Jenkins.
* Install plugins and sign up to Jenkins as directed.
*	Run the Jenkins Pipeline and Press build. This should deploy the Kubernetes automatically and create pods to deploy the app.



<a name="Authors"></a>
## Authors
* [Nicolas Abadi](https://github.com/nic116)
* [Adelina Bronda](https://github.com/Adelina09)
* [Shana Charlery](https://github.com/Shana12345)
* [Finn Macrae](https://github.com/Finn969) 
* [Hifza Zaheer](https://github.com/HifzaZaheer96)
