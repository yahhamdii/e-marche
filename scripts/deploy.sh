source './scripts/common.sh'
source './scripts/configure.sh'

#
# legacy deployment, delete when switch is ok
#

git remote add gitlab git@gitlab.monoprix.fr:ninja/$BITBUCKET_REPO_SLUG.git
git push --tags gitlab $BITBUCKET_BRANCH

#
# new deployment method
#

# retrieve autodeploy scripts and k8s configuration
git clone git@gitlab.monoprix.fr:ninja/devops.git
cd devops

# set namespaces name
# a branch can be deployed on many namespaces (eg: master => ninja and mode)
if [[ $BITBUCKET_BRANCH == "master" ]]
then
  __NAMESPACES__=("ninja")
else
  __NAMESPACES__=($BITBUCKET_BRANCH)
fi

for __NAMESPACE__ in "${__NAMESPACES__[@]}"
do
  # run autodeploy on specified namespace
  echo "Deploying $BITBUCKET_REPO_SLUG on $__NAMESPACE__"
  bash -e scripts/auto-deploy.sh -e dev -i $__NAMESPACE__ -s $BITBUCKET_REPO_SLUG -I "teamoyez/$BITBUCKET_REPO_SLUG:$BITBUCKET_BRANCH-$BITBUCKET_COMMIT"
done
