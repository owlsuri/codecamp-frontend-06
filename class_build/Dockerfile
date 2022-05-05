FROM node:14

# 명령어 실행시킬 위치
WORKDIR /class_build/
# RUN mkdir class_build 굳이 따로 만들 필요 없음 copy

COPY . /class_build/
# . 은 모든파일 노드모듈즈 포함 제외해야함


RUN yarn install
# 노드모듈즈때문에 여기서 yarn install 여기서 해줘야함
RUN yarn build:ssr
CMD yarn start

# CMD RUN 둘다 써도 되지만 CMD는 한번밖에 못씀