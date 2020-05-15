source './scripts/common.sh'
source './scripts/configure.sh'

RELEASE_VERSION=`getReleaseVersion`

echo "tagging version"
RELEASE_VERSION=`getReleaseVersion`
git tag automated/$BITBUCKET_BRANCH-$BITBUCKET_COMMIT
git push --tags origin $BITBUCKET_BRANCH

echo "Building Docker Image teamoyez/$BITBUCKET_REPO_SLUG:$BITBUCKET_BRANCH-$BITBUCKET_COMMIT"
docker login --username $DOCKER_LOGIN --password $DOCKER_PASSWORD
docker build --build-arg NPM_TOKEN=$NPM_TOKEN -t "teamoyez/$BITBUCKET_REPO_SLUG:$BITBUCKET_BRANCH-$BITBUCKET_COMMIT" .
docker push "teamoyez/$BITBUCKET_REPO_SLUG:$BITBUCKET_BRANCH-$BITBUCKET_COMMIT"
