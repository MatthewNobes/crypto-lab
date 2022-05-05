# Crypto-Lab

Crypto lab is a one stop shop for cryptographic decoders and cipher tools.

The application has been built as a test platforming, enabling me to become more familiar with [Svelte](https://kit.svelte.dev/ "Svelte Documentation"), the JS compiler behind this project and [Tailwind CSS](https://tailwindcss.com/ "Tailwind Homepage"), the styling tool for this project.


## Plan

The plan for this project is to start with a few simple encipher and deciphering tools. Later cipher cracking tools will be explored, such as brute forcing tools, and frequency analysis ones. Table 1 lists some of the elements being considered. 

| Feature      | Stage         | Issue  |
| ------------- |:-------------:| -----:|
| Caesar cipher (encipher/decipher)     | Planning | n/a |
| Vigenere cipher (encipher/decipher)    | Early planning      |   n/a |
Table 1 - The planned features for this tool. 

## Developing

Once you've cloned the project and installed dependencies with `npm install` (or `npm i`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

It is important to note that this application uses port 3000 by default (as do many web apps). It is recommended to change this if you plan to run or develop this alongside other JS front-end applications. 


## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

