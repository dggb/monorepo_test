# Monorepo Test Project

이 프로젝트는 모노레포 설정을 테스트하기 위해 Vue.js와 React.js를 사용하여 만든 개인적인 실험 프로젝트입니다.

## 프로젝트 목적

- **모노레포 테스트**: 단일 리포지토리 내에서 여러 프로젝트를 관리하기 위한 구조를 실험.
- **Vue와 React 통합**: Vue와 React 프로젝트를 한 리포지토리에서 관리하는 방법을 테스트.
- **Docker 및 Nginx 통합**: Docker와 Nginx를 사용하여 개발 환경을 설정하고 배포를 테스트.
  
## 프로젝트 구조
monorepo/
├── nginx/ # Nginx 설정
│ ├── conf.d/
│ │ └── default.conf # Nginx 서버 블록 설정 파일
│ └── nginx.conf # Nginx 메인 설정 파일
├── projects/
│ ├── react-ts-project/ # React 프로젝트 (TypeScript 사용)
│ │ └── Dockerfile # React 프로젝트의 Docker 설정 파일
│ └── vue2-project/ # Vue 2 프로젝트
│ │ └── Dockerfile # Vue 프로젝트의 Docker 설정 파일
└── docker-compose.yml # Docker Compose 설정 파일

## 사용한 기술 스택

- **React**: 리액트 라이브러리와 타입스크립트를 사용한 프로젝트.
- **Vue**: Vue 2를 사용한 프로젝트.
- **Nginx**: 웹 서버 설정 및 Reverse Proxy로 사용.
- **Docker**: 컨테이너화된 환경 설정 및 관리.
