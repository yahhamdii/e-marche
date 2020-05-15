# Constants
HOST=sonarqube.monoprix.ninja
KEYSTOREFILE=/usr/lib/jvm/java-1.8-openjdk/jre/lib/security/cacerts
KEYSTOREPASS=changeit

# Recover certificate and add it to the JVM trusted keystore
apk update
apk add openssl
openssl s_client -connect ${HOST}:443 </dev/null | sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p' > ${HOST}.cert
keytool -import -noprompt -trustcacerts -alias ${HOST} -file ${HOST}.cert -keystore ${KEYSTOREFILE} -storepass ${KEYSTOREPASS}
keytool -list -v -keystore ${KEYSTOREFILE} -storepass ${KEYSTOREPASS} -alias ${HOST}

# Analyse code
PROJECT_NAME=$(node -p "require('./package.json').name")
PROJECT_VERSION=$(node -p "require('./package.json').version")
sonar-scanner \
  --define sonar.projectKey=gta-${BITBUCKET_REPO_SLUG} \
  --define sonar.projectName=$PROJECT_NAME \
  --define sonar.projectVersion=$PROJECT_VERSION \
  --define sonar.sources=src \
  --define sonar.tests=test \
  --define sonar.host.url=https://${HOST} \
  --define sonar.login=$SONARQUBE_TOKEN \
  --define sonar.javascript.lcov.reportPaths=coverage/lcov.info
