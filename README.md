# liatrioDemo

Setting up node app (In environment with Node.js already installed):
1) npm init 
2) npm install express
3) write code on "index.js"
4) use node index.js to run

Setting up Docker Container
1) write Dockerfile (import version image, pick working directory, copy necessary files for app into container, write commands to run)
2) docker build -t jstest . (jsTest is just a placeholder for the name)
3) docker run -p 80:80 jstest (80 is the port we want to use)
4) docker stop [instance name] (from seperate terminal instance)