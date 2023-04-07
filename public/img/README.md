## Rules for adding static files in the public folder

1. Dont scatter static images files in the `public/img/` directory.
2. Create folder which can seperate the images.
3. If images are found in multiple pages in the app then keep it under the `public/img/common/` folder.
4. There may be cases for lots of assets for common as well so what we can do is create folder again based on components.
5. If image is found only on a certain page than make the folder page wise and keep them there ie: `public/img/profile/`.
