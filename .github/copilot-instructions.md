# Project00 のコードベースについて

Project00 は全て TypeScript により記述されます。コードベースは日本語でコメントされますが、オブジェクト名などは英語が使われます。

コードベースは `/code` 以下にあり、 turborepo により monorepo 化されています。

tsconfig.json のベースファイルは [base.json](/code/packages/typescript-config/base.json) です。ブラウザで動作するフロントエンドの tsconfig.json のベースファイルは [vite.json](/code/packages/typescript-config/vite.json) です。

formatter/linter は biome が使われ、 `npm run format` で自動フォーマットされます。

プロジェクトは Cloudflare Workers にデプロイされ、サーバレスとして実行されます。

デプロイされた関数は WebSocket をサポートします。

## Project00 とは

Project00 とは、ブラウザで遊べる MMORPG のプロジェクトです。

WebSocket をサポートしたモダンブラウザで、主に PC を対象としています。

## プロジェクト一覧

- [client](/code/apps/client): client はブラウザクライアントのエントリポイントです
- [docs](/code/apps/docs): docs は VitePress ベースの markdown で記述された public documents です
- [server](/code/apps/server): server は Cloudflare Workers のエントリポイントです
- [browser](/code/packages/browser/): browser はブラウザクライアントのライブラリパッケージです
- [node](/code/packages/node/): node は Cloudflare Workers のライブラリパッケージです
- [shared](/code/packages/shared/): shared は Cloudflare Workers およびブラウザクライアントで共有されるライブラリパッケージです

各プロジェクトは `src` ディレクトリに TypeScript ソースコードが置かれます。
