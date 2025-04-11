# Project00 のコードベースについて

Project00 は全て TypeScript により記述されます JavaScript は一部の例外を除き認められません。

コードベースは日本語でコメントされますが、オブジェクト名などは英語が使われます。

コードベースは全て `/code` 以下にあり、 turborepo により monorepo 化されています。

formatter/linter は biome が使われ、 `npm run format-and-lint:fix` で自動フォーマットされます。

プロジェクトは主に Cloudflare Workers にデプロイされ、サーバレスとして実行されます。

デプロイされた関数は WebSocket/WebTransport をサポートします。

一人でも開発出来るように、仮想の BOT ユーザーをローカルサーバに参加させることが出来ます。

UI は日本語を基準としつつ、様々な言語に変換出来る前提にします。

Progressive Web Apps に準拠し、インストールして遊ぶことが出来ます。

基本的に PC ブラウザでのプレイを推奨とし、モバイルアプリは今後のロードマップで追加される可能性があります。

## Project00 とは

Project00 とは、ブラウザで遊べる MMORPG のプロジェクトです。

WebSocket や WebTransport などの双方向通信を行い、リアルタイムでサーバ(ランタイム問わず)とクライアント(Vite)が通信します。

レンダリングエンジンは Babylon.js 8 を用います。
