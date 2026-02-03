# LogViewer error

Updated contents to reflect (minimally) our application configuration and setup to reproduce the error. 

By running:

```
npm install
npm start
```

Everything should work, and window with the plot should appear.

---

Then, to reproduce the error, update `@equinor/videx-wellog` in `package.json` to any newer version (1.2.6+) and:

```
npm install
npm start
```

Window should now open, but with the type error
