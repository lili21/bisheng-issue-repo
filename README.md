bisheng-issue-repo
==================

Issue
-----

`ReactDOM.render(...)` return null

Reproduct Steps
---------------

- `yarn`
- `npm start`
- `browse http://localhost:8283/components/Locker`
- uncomment line 10-11 in **compoennts/Locker/demo/basic.md**
- Have Fun


I need to wrap it with `setTimeout` to avoid the error. Guessing It's a bug related to [bisheng](https://github.com/benjycui/bisheng/)