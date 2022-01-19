---
id: advanced
title: Docker Advance Interview Questions
sidebar_label: Docker Advance
---

### Will you lose your data, when a docker container exists?
No, you won’t lose any data when Docker container exits. Any data that your application writes to the container gets preserved on the disk until you explicitly delete the container. The file system for the container persists even after the container halts.

---

### Where all do you think Docker is being used?
When asked such a question, respond by talking about applications of Docker. Docker is being used in the following areas:

Simplifying configuration: Docker lets you put your environment and configuration into code and deploy it.
Code Pipeline Management: There are different systems used for development and production. As the code travels from development to testing to production, it goes through a difference in the environment. Docker helps in maintaining the code pipeline consistency.
Developer Productivity: Using Docker for development gives us two things – We’re closer to production and development environment is built faster.
Application Isolation: As containers are applications wrapped together with all dependencies, your apps are isolated. They can work by themselves on any hardware that supports Docker.
Debugging Capabilities: Docker supports various debugging tools that are not specific to containers but work well with containers.
Multi-tenancy: Docker lets you have multi-tenant applications avoiding redundancy in your codes and deployments.
Rapid Deployment: Docker eliminates the need to boost an entire OS from scratch, reducing the deployment time.

---

### How is Docker different from other containerization methods?
Docker containers are very easy to deploy in any cloud platform. It can get more applications running on the same hardware when compared to other technologies, it makes it easy for developers to quickly create, ready-to-run containerized applications and it makes managing and deploying applications much easier. You can even share containers with your applications.

If you have some more points to add you can do that but make sure the above explanation is there in your answer.

---
### Can I use JSON instead of YAML for my compose file in Docker?
You can use JSON instead of YAML for your compose file, to use JSON file with compose, specify the JSON filename to use, for eg:

$ docker-compose -f docker-compose.json up

---
### How have you used Docker in your previous position?
Explain how you have used Docker to help rapid deployment. Explain how you have scripted Docker and used it with other tools like Puppet, Chef or Jenkins. If you have no past practical experience in Docker and instead have experience with other tools in a similar space, be honest and explain the same. In this case, it makes sense if you can compare other tools to Docker in terms of functionality.

---
### How far do Docker containers scale? Are there any requirements for the same?
Large web deployments like Google and Twitter and platform providers such as Heroku and dotCloud, all run on container technology. Containers can be scaled to hundreds of thousands or even millions of them running in parallel. Talking about requirements, containers require the memory and the OS at all the times and a way to use this memory efficiently when scaled.

---
### What platforms does docker run on?
This is a very straightforward question but can get tricky. Do some company research before going for the interview and find out how the company is using Docker. Make sure you mention the platform company is using in this answer.

Docker runs on various Linux administration:

Ubuntu 12.04, 13.04 et al
Fedora 19/20+
RHEL 6.5+
CentOS 6+
Gentoo
ArchLinux
openSUSE 12.3+
CRUX 3.0+
It can also be used in production with Cloud platforms with the following services:

Amazon EC2
Amazon ECS
Google Compute Engine
Microsoft Azure
Rackspace
### Is there a way to identify the status of a Docker container?
There are six possible states a container can be at any given point – Created, Running, Paused, Restarting, Exited, Dead.

Use the following command to check for docker state at any given point:

$ docker ps

The above command lists down only running containers by default. To look for all containers, use the following command:

$ docker ps -a

### Can you remove a paused container from Docker?
The answer is no. You cannot remove a paused container. The container has to be in the stopped state before it can be removed.

### Can a container restart by itself?
No, it’s not possible for a container to restart by itself. By default the flag -restart is set to false.

### Is it better to directly remove the container using the rm command or stop the container followed by remove container?
Its always better to stop the container and then remove it using the remove command.

$ docker stop <coontainer_id>
$ docker rm -f <container_id>

Stopping the container and then removing it will allow sending SIG_HUP signal to recipients. This will ensure that all the containers have enough time to clean up their tasks. This method is considered a good practice, avoiding unwanted errors.

### Will cloud overtake the use of Containerization?
Docker containers are gaining popularity but at the same time, Cloud services are giving a good fight. In my personal opinion, Docker will never be replaced by Cloud. Using cloud services with containerization will definitely hype the game. Organizations need to take their requirements and dependencies into consideration into the picture and decide what’s best for them. Most of the companies have integrated Docker with the cloud. This way they can make the best out of both the technologies.

### How many containers can run per host?
There can be as many containers as you wish per host. Docker does not put any restrictions on it. But you need to consider every container needs storage space, CPU and memory which the hardware needs to support. You also need to consider the application size. Containers are considered to be lightweight but very dependant on the host OS.

### Is it a good practice to run stateful applications on Docker?
The concept behind stateful applications is that they store their data onto the local file system. You need to decide to move the application to another machine, retrieving data becomes painful. I honestly would not prefer running stateful applications on Docker.

### Suppose you have an application that has many dependant services. Will docker compose wait for the current container to be ready to move to the running of the next service?
The answer is yes. Docker compose always runs in the dependency order. These dependencies are specifications like depends_on, links, volumes_from, etc.

### How will you monitor Docker in production?
Docker provides functionalities like docker stats and docker events to monitor docker in production. Docker stats provides CPU and memory usage of the container. Docker events provide information about the activities taking place in the docker daemon.

### Is it a good practice to run Docker compose in production?
Yes, using docker compose in production is the best practical application of docker compose. When you define applications with compose, you can use this compose definition in various production stages like CI, staging, testing, etc.

### What changes are expected in your docker compose file while moving it to production?
These are the following changes you need make to your compose file before migrating your application to the production environment:

Remove volume bindings, so the code stays inside the container and cannot be changed from outside the container.
Binding to different ports on the host.
Specify a restart policy
Add extra services like log aggregator
### Have you used Kubernetes? If you have, which one would you prefer amongst Docker and Kubernetes?
Be very honest in such questions. If you have used Kubernetes, talk about your experience with Kubernetes and Docker Swarm. Point out the key areas where you thought docker swarm was more efficient and vice versa. Have a look at this blog for understanding differences between Docker and Kubernetes.

You Docker interview questions are not just limited to the workarounds of docker but also other similar tools. Hence be prepared with tools/technologies that give Docker competition. One such example is Kubernetes.

### Are you aware of load balancing across containers and hosts? How does it work?
While using docker service with multiple containers across different hosts, you come across the need to load balance the incoming traffic. Load balancing and HAProxy is basically used to balance the incoming traffic across different available(healthy) containers. If one container crashes, another container should automatically start running and the traffic should be re-routed to this new running container. Load balancing and HAProxy works around this concept.
