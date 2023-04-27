# eslint-config-redlotus

![RedLotus-Logo-Dark](.github/base-logo-dark-mode.svg#gh-dark-mode-only)
![RedLotus-Logo-Light](.github/base-logo-light-mode.svg#gh-light-mode-only)

Package to standardize eslint across all your projects. **Get a super boost to your development** 🚀

# Quickstart

## For react + typescript projects
    
    npm i -D eslint-config-redlotus-react
    
    yarn add -D eslint-config-redlotus-react

## For node + typescript projects
    
    npm i -D eslint-config-redlotus-base
    
    yarn add -D eslint-config-redlotus-base
    
## For next projects
    
    npm i -D eslint-config-redlotus-next
    
    yarn add -D eslint-config-redlotus-next

#### Inside your .eslintrc.yaml add the following:

```
   extends:
        - "./eslint-config-redlotus-base/dist/main"
        or
   extends:
        - "./eslint-config-redlotus-react/dist/main"
      or
   extends:
        - "./eslint-config-redlotus-next/dist/main"
        
 ```

---

## License

[MIT](./LICENSE)

Copyright (c) 2022, tomimarkus991
