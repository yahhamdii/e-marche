echo "Configuring SSH Key..."

git remote set-url origin https://$BB_USER:$BB_PASSWORD@bitbucket.org/${BITBUCKET_REPO_OWNER}/${BITBUCKET_REPO_SLUG}.git
eval `ssh-agent`
ssh-add /opt/atlassian/pipelines/agent/data/id_rsa
echo "Configuring NPM token..."
echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" >> ~/.npmrc
