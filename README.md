# `Myflix frontend`
This application was created as a netflix clone for my "Dev-ops and microservices" module, the technologies used within its frontend are:
- React
- Nginx
- Docker 
- Github Actions
- Kubernetes

### `Application description`
This application allows the user to create an account or to login to their existing account, from there the user is welcomed into the homescreen of the application where they are presented with tiles detailing movies sorted by genre. Upon interacting with one of these movie tiles the user is moved to a video player that loads and streams the video to them.

### `Deployment`
This application is deployed using Github Actions, Docker and Kubernetes. For this I used a kube cluster hosted with Linode that I could manipulate using my kube config as a github secret as well as my docker hub login using an access token. This meant that I could upload the updated docker build straight to dockerhub and update my kubernetes deployment with this new docker image.

### `Module takeaways`
At the time of creating this application all of these technologies were new to me and required a steep learning curve but in the end after this assignment was finished I felt that I had a much greater understanding of all of these technologies involved and really saw the impact that docker can have.

### Backend: https://github.com/Stuflo19/Myflix-backend