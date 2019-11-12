---
id: basic-commands
title: Docker Commands Interview Questions
sidebar_label: Basic Commands
---

### How to check for Docker Client and Docker Server version?
The following command gives you information about Docker Client and Server versions:

```bash
$ docker version
```

### How do you get the number of containers running, paused and stopped?
You can use the following command to get detailed information about the docker installed on your system.

```bash
$ docker info
```
---
###  If you vaguely remember the command and you’d like to confirm it, how will you get help on that particular command?
The following command is very useful as it gives you help on how to use a command, the syntax, etc.

```bash
$ docker --help
```

The above command lists all Docker commands. If you need help with one specific command, you can use the following syntax:

```bash
$ docker <command> --help
```

### How to login into docker repository?
You can use the following command to login into hub.docker.com:

```bash
$ docker login
```

You’ll be prompted for your username and password, insert those and congratulations, you’re logged in.

### If you wish to use a base image and make modifications or personalize it, how do you do that?
You pull an image from docker hub onto your local system

It’s one simple command to pull an image from docker hub:

```bash
$ docker pull <image_name>
```

### How do you create a docker container from an image?
Pull an image from docker repository with the above command and run it to create a container. Use the following command:

```bash 
$ docker run -it -d <image_name>
```

Most probably the next question would be, what does the ‘-d’ flag mean in the command?

-d means the container needs to start in the detached mode. Explain a little about the detach mode. Have a look at this blog to get a better understanding of different docker commands.

### How do you list all the running containers?
The following command lists down all the running containers:

$ docker ps

### Suppose you have 3 containers running and out of these, you wish to access one of them. How do you access a running container?
The following command lets us access a running container:

```bash
$ docker exec -it <container id> bash
```

The exec command lets you get inside a container and work with it.

### How to start, stop and kill a container?

The following command is used to start a docker container:

```bash
$ docker start <container_id>
```

and the following for stopping a running container:

```bash
$ docker stop <container_id>
```

kill a container with the following command:

```bash
$ docker kill <container_id>
```

### Can you use a container, edit it, and update it? Also, how do you make it a new and store it on the local system?
Of course, you can use a container, edit it and update it. This sounds complicated but its actually just one command.


```bash
$ docker commit <conatainer id> <username/imagename>
```

26. Once you’ve worked with an image, how do you push it to docker hub?

```bash
$ docker push <username/image name>
```

### How to delete a stopped container?
Use the following command to delete a stopped container:

```bash
$ docker rm <container id>
```

DevOps Training
### How to delete an image from the local storage system?
The following command lets you delete an image from the local system:

```bash
$ docker rmi <image-id>
```

### How to build a Dockerfile? 
Once you’ve written a Dockerfile, you need to build it to create an image with those specifications. Use the following command to build a Dockerfile:

```bash
$ docker build <path to docker file>
```

The next question would be when do you use “.dockerfile_name” and when to use the entire path?

Use “.dockerfile_name” when the dockerfile exits in the same file directory and you use the entire path if it lives somewhere else.

### Do you know why docker system prune is used? What does it do?

```bash
$ docker system prune
```

The above command is used to remove all the stopped containers, all the networks that are not used, all dangling images and all build caches. It’s one of the most useful docker commands.

Docker Advanced Questions
Once the interviewer knows that you’re familiar with the Docker commands, he/she will start asking about practical applications This section of Docker Interview Questions consists of questions that you’ll only be able to answer when you’ve gained some experience working with Docker.
