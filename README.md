# CareerNav iPhone / Android 앱 프로젝트

## 1. 준비
- macOS
- Node.js LTS
- iPhone 앱 빌드: Xcode
- Android 앱 빌드: Android Studio (선택)

## 2. 설치
압축을 풀고 `CareerNav_Capacitor` 폴더에서 터미널을 연 뒤:

```bash
npm install
```

## 3. iOS 앱 프로젝트 생성
처음 한 번만 실행:

```bash
npx cap add ios
```

그다음 웹 코드를 빌드하고 iOS 프로젝트에 반영:

```bash
npm run cap:sync
npx cap open ios
```

Xcode에서 시뮬레이터 또는 연결한 iPhone을 선택해 실행합니다. 실제 iPhone 설치/배포에는 Apple 서명 설정이 필요합니다.

## 4. Android 앱 프로젝트 생성 (선택)
처음 한 번만 실행:

```bash
npx cap add android
```

그다음:

```bash
npm run cap:sync
npx cap open android
```

## 5. 웹 브라우저 미리보기
```bash
npm run start
```

## 코드 수정
화면 코드는 `www/index.html`에 있습니다. 수정한 뒤 앱에 반영할 때마다 `npm run cap:sync`를 실행하세요.

## 현재 구현 범위
스케치 기반 UI, 화면 이동, 공고 검색/필터, 관심 공고, 이력서/문의의 브라우저 로컬 저장 등 프론트엔드 데모가 포함되어 있습니다.
실제 회원 인증, 서버 DB 동기화, 기업 공고 API, 결제, 푸시 알림, 실제 AI 분석은 별도 백엔드/서비스 연동이 필요합니다.
