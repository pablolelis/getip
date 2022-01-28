

# Choose and name our temporary image
FROM alpine as intermediate

# Add metadata identifying these images as our build containers (this will be useful later!)
LABEL stage=intermediate

# Take an SSH key as a build argument.
ARG SSH_PRIVATE_KEY

# Install dependencies required to git clone.
RUN apk update && \
    apk add --update git && \
    apk add --update openssh 

# 1. Create the SSH directory.
# 2. Populate the private key file.
# 3. Set the required permissions.
# 4. Add github to our list of known hosts for ssh.
RUN mkdir -p /root/.ssh/ && \
    echo "$SSH_PRIVATE_KEY" > /root/.ssh/id_rsa && \
    chmod -R 600 /root/.ssh/ && \
    ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts

# Clone a repository (my website in this case)
RUN git clone git@github.com:pablolelis/getip.git 


# Choose the base image for our final imageFROM alpine
RUN apk update && \
    apk upgrade && \
    apk add --update nodejs npm && \
    npm install

# Copy across the files from our `intermediate` container
RUN mkdir app
COPY --from=intermediate /qualico/. /app/.

WORKDIR /app