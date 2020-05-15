getReleaseVersion() {
  if [ "$BITBUCKET_BRANCH" = "master" ]
  then
    VERSION=`cat VERSION`
    RELEASE_VERSION="$BITBUCKET_BRANCH-$VERSION.$BITBUCKET_BUILD_NUMBER"
    echo $RELEASE_VERSION
  else
    VERSION=`git describe --tags | sed 's/automated\/master-//g'`
    HOTFIX=`echo $VERSION | grep '[0-9]-g.......'`
    if [ ! -z $HOTFIX ]
    then
      HOTFIX_NUMBER="${HOTFIX::-9}"
      HOTFIX_NUMBER="${HOTFIX: -1}"
      VERSION="${HOTFIX::-11}.${HOTFIX_NUMBER}"
    fi
    RELEASE_VERSION="$BITBUCKET_BRANCH-$VERSION"
    echo $RELEASE_VERSION
  fi
}
