#!/usr/bin/env sh
 
# ȷ���ű��׳������Ĵ���
set -e
 
# ���ɾ�̬�ļ� , yarn docs:build
npm run docs:build

# git��ʼ����ÿ�γ�ʼ����Ӱ������
git add -A
git commit -m 'deploy'

# �������Ҫ���� https://USERNAME.github.io
git push -u origin "master"