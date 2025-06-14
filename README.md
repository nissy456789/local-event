## ■ セットアップ手順

### ・Npde.jsをインストール

・homebrewを使用する場合
```
brew install node
```
インストール後は以下のコマンドを実行して下さい。
```
node -v
```
バージョン番号がでてきたら Node.js のインストール完了です。

---

### ・雛形作成
viteを使用してプロジェクトの雛形を作成して下さい。
```
npm create vite@latest
```
コマンドを実行するとプロジェクト名や使用するフレームワーク等を聞かれるので以下を選択します。<br>
・プロジェクト名：任意の名前<br>
・フレームワーク：react<br>
・バリアントの選択：JavaScript<br>
次のコマンドを実行しプロジェクトのディレクトリに移動して、必要なパッケージをインストールして下さい。
```
cd プロジェクト名
npm install
```

最後に以下のコマンドを実行して
ターミナル上にLocal:   http://localhost:5173/ が表示されたら完了です。
```
npm run dev
```
---

## ■ 使用技術

フレームワーク：React（Vite）

CSS：フレームワーク無し

状態管理：useState

ルーティング：React Router v6

仮データ：静的なJSONを使ってイベント表示

## ライブラリ

ページ遷移：react Router v6

---

## ■ 機能説明
| イベント一覧 |
| :---: | 
| ![](https://i.gyazo.com/fa3a43eaddea6cc5adf6b9e6f2292885.png) |
| <p align="left">イベント情報をカード型にして画像と一緒にタイトルや場所、日付を表示します。<p>|
| <p align="left">ホバー時に少し上に上がる為、何を選択しているのか分かりやすくなっています。</p> |
<br>

| イベント詳細 |
| :---: | 
| ![](https://i.gyazo.com/b3f60770696dc12dc75e506ba85f373e.png) |
| <p align="left">イベント一覧画面のカードをクリックするとこちらの画面に遷移します。</p> |
| <p align="left">イベントの基本的な情報から参加者、主催者を明確にする事で参加者側の敷居を下げる目的があります。</p>|
| <p align="left">参加するボタンを押すとイベントに参加することができるようになっています</p>|
<br>

---

## ■ 機能確認方法
1. イベント一覧画面の確認手順
ターミナルで以下のコマンドを実行し、開発サーバーを起動します：
```
npm run dev
```
ブラウザで http://localhost:5173/ にアクセスしてください。

ページ上に以下の内容が正しく表示されていることを確認してください：

・タイトル「イベント一覧」

・事前に登録された4つのイベント情報

・各イベントにマウスホバーした際、カードが少し上に移動するホバーアニメーション

<br>
2. イベント詳細画面の確認手順
イベント一覧画面から、任意のイベントをクリックして詳細画面へ遷移してください。

詳細画面にて、以下の情報が表示されていることを確認してください：

・イベントのタイトル

・日時

・開催場所

・参加者

・主催者

・イベント説明

・「参加する」ボタン（青色）

・「参加する」ボタンをクリックすると、ボタンが **グレー色の「参加済み」** に変化することを確認してください。

※ 現時点ではデータ保存機能は未実装のため、ページをリロードするとボタンの状態は元に戻ります。
