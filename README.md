# Scully Blog Test

Test project for troubleshooting Scully blog support config issues.

## Get Meta Information
```
const getMeta = () =>  {
    const title = document.querySelector("meta[property='og:title'").getAttribute('content');
    const desc = document.querySelector("meta[property='og:description'").getAttribute('content');
    const image = document.querySelector("meta[property='og:image'").getAttribute('content');
    const url = document.querySelector("meta[property='og:url'").getAttribute('content');
    return {title, desc, image, url};
}
getMeta();
```