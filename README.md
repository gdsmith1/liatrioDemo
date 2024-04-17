# liatrioDemo
[![Liatrio Apprentice Tests](https://github.com/gdsmith1/liatrioDemo/actions/workflows/main.yml/badge.svg)](https://github.com/gdsmith1/liatrioDemo/actions/workflows/main.yml)

Setting up node app (In environment with Node.js already installed):
1) npm init 
2) npm install express
3) write code on "index.js"
4) use node index.js to run

Setting up Docker Container
1) write Dockerfile (import version image, pick working directory, copy necessary files for app into container, write commands to run)
2) docker build -t jstest . (jsTest is the dockerhub repo we are working on)
3) docker run -p 80:80 --name myinstance -d jstest (80 is the port we want to use, -d tells it to run in the background)
4) docker stop myinstance

CI/CD with Github Actions
1) write a workflow file (.yml) in .github/workflows
2) give triggers (on push, pr to main)
3) define jobs, each job is isolated and will need commands to move to the right directory
4) upload the container build as an artifact to be able to download and use it in other jobs
5) after running the container, add a sleep to give the container time to start (can be picky about this, 10 seconds worked best for me)
6) use a version tag when using a third-party action (Liatrio apprentice action) to ensure that new changes to the action don't affect your tests
7) write github actions secrets to hold dockerhub username and token
8) use docker login command with your secret values (use pipe and --password-stdin to pass in password)
8) push the image with docker push
