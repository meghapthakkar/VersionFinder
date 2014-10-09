

This project finds the version of any application (on amazon app store) from its url.

Currently it uses non persistent hash-map for storing past versions. (This is recorded when user searches for the url for the first time)
It compares existing and new value for particular url and determines if the version has changed or not.
