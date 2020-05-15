source './scripts/configure.sh'

git config --global push.default simple
git remote add gitlab-mirror git@gitlab.monoprix.fr:ninja/${BITBUCKET_REPO_SLUG}.git
git fetch --unshallow origin
git push gitlab-mirror
