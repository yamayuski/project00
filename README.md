# PROJECT00

- Browser MMORPG
- via WebSocket
- [microsoft/TypeScript: TypeScript is a superset of JavaScript that compiles to clean JavaScript output.](https://github.com/microsoft/TypeScript)
- [BabylonJS/Babylon.js: Babylon.js is a powerful, beautiful, simple, and open game and rendering engine packed into a friendly JavaScript framework.](https://github.com/BabylonJS/Babylon.js)
- monorepo managed by [Introduction | Turborepo](https://turbo.build/repo/docs)

## Installation

### Windows

```s
$ winget.exe FiloSottile.mkcert
$ powershell.exe -NoProfile -ExecutionPolicy unrestricted -Command "start notepad C:\Windows\System32\drivers\etc\hosts" -verb runas
# Add 127.0.0.1 project00.test
```

### macOS/Linux

```s
$ sudo vi /etc/hosts
# Add 127.0.0.1 project00.test
```

```sh
$ git clone https://github.com/yamayuski/project00.git
$ cd project00
$ mkcert -cert-file h3_cert.pem -key-file h3_key.pem localhost "project00.test"
$ pnpm install
$ npm run build
```
