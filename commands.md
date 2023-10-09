```sh
# document the entire journey of commands with this file

# brew update (update homebrew)
# brew upgrade node (upgrade node to latest version)


$ npm init --y

# add prettier
$ touch .prettierrc .prettierignore
$ npm i -D prettier

# add typescript
$ npm i -D typescript
$ touch tsconfig.json tsconfig-cjs.json tsconfig-esm.json

$ npm i -D react react-dom @types/react @types/react-dom


# add styling using tailwindcss cli
$ npm i -D tailwindcss
$ npx tailwindcss init
$ npm i -D prettier-plugin-tailwindcss

# eslint
$ npm init @eslint/config
$ npm i -D eslint-config-prettier


# shadcn library
$ npm i -D tailwindcss-animate
$ npm i class-variance-authority clsx tailwind-merge
# icon lib
$ npm install lucide-react

# use cli to add shadcn components
$ npx shadcn-ui@latest init
# remove path aliases, as this another hurdle for making build setup complex
# also removed components.json file

# add button component from shadcn manually
$ npm i @radix-ui/react-slot
# copy paste the button component code from https://ui.shadcn.com/docs/components/button

# add ag-grid component
$ npm i ag-grid-community ag-grid-react ag-grid-enterprise

# add Combobox component
$ npm install @radix-ui/react-popover
$ npm install cmdk
$ npm install @radix-ui/react-dialog


```
