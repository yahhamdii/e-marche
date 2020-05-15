Digest Router Service
=========

**[IMPORTANT]** This service support uploading only zip files.
> Use sFTP to upload zip files to Google Storage.

## Architecture
  This services talks only to:
   * Google Cloud Storage 
   * Monoprix digest category parser
   
## Setting up

* install dependencies

```bash
yarn install
```

* create gcs_keyfile.json file - ask one of your teammates for correct file

* update env variables
  - make sure that `SSH_PRIVATE_KEY_FILE` and `SSH_PUBLIC_KEY_FILES` has correct values - for running this app localy, you can create ssh_keys without passphrase
  - `GCS_` variables must correspond with gcs_keyfile.json

## Uploading with Sftp

* uploading file using `sftp` command

 ```bash
 sftp -oPort=PORT -oIdentityFile=PATH_TO_YOUR_PUB_KEY  SSH_USERNAME@localhost
 ```

## Uploading with HTTP POST [DEPRACATED]
To upload files to this service:

POST /upload/:type

Type can be any of the following values: media, selections, categories, products, stocks, stores

The request must have Content-Type: multipart/form-data, and contain exactly one file.
The file name provided will be the one used on google cloud storage.

## Env variables
```
APPLICATION_NAME=monoprix-digest-router
HTTP_PORT=4004
SFTP_PORT=4005
SSH_USERNAME=monoprix
SSH_PRIVATE_KEY_FILE=id_rsa
SSH_PUBLIC_KEY_FILES=user1.pub;user2.pub
GCS_PROJECT_ID=monoprix-ninja-rec <- Google Cloud project id
GCS_KEYFILE=gcs_keyfile.json <- Google Service Account json key
GCS_BUCKET=ninja-digest-files-dev <- Files path on Google storage ( bucket name )
MAX_CONCURENT_GCLOUD_UPLOADS=5 <- Limit the number of concurent uplaods to Google Storage

UPLOAD_MEDIA_ACK_URL=http://localhost:4042/media
# <-- Monoprix digest category parser URLs -->
UPLOAD_SELECTIONS_ACK_URL=http://localhost:4003/selection
UPLOAD_CATEGORIES_ACK_URL=http://localhost:4003/category
UPLOAD_PRODUCT_CATEGORIES_ACK_URL=http://localhost:4003/product-category

UPLOAD_GROCERY_STOCKS_ACK_URL=http://localhost:4003/grocery
UPLOAD_FASHION_STOCKS_ACK_URL=http://localhost:4003/fashion
UPLOAD_FRUITS_AND_VEGGIES_STOCKS_ACK_URL=http://localhost:4003/fruits-and-veggies
UPLOAD_STOCKS_RESERVE_ACK_URL=http://localhost:4003/reserve

UPLOAD_STORES_ACK_URL=http://localhost:4003/stores
UPLOAD_SIMPLE_ACK_URL=http://localhost:4003/simple
UPLOAD_COMPLEMENTARY_ACK_URL=http://localhost:4003/complementary
UPLOAD_FASHION_SIZE_ACK_URL=http://localhost:4003/import/size
UPLOAD_FASHION_COLOR_ACK_URL=http://localhost:4003/import/color
UPLOAD_EAN_ACK_URL=http://localhost:4003/ean
UPLOAD_PRICE_ACK_URL=http://localhost:4003/price
UPLOAD_PROMOTIONS_ACK_URL=http://localhost:4003/import/promotion
```
