import c from '/public/svg/skills/c.png';
import canva from '/public/svg/skills/canva.svg';
import csharp from '/public/svg/skills/csharp.png';
import css from '/public/svg/skills/css.svg';
import figma from '/public/svg/skills/figma.svg';
import git from '/public/svg/skills/git.svg';
import html from '/public/svg/skills/html.svg';
import javascript from '/public/svg/skills/javascript.svg';
import kotlin from '/public/svg/skills/kotlin.svg';
import msoffice from '/public/svg/skills/msoffice.svg';
import mysql from '/public/svg/skills/mysql.svg';
import photoshop from '/public/svg/skills/ps.png';
import picsart from '../public/svg/skills/picsart.svg';
import nodejs from '/public/svg/skills/nodejs.png';
import php from '/public/svg/skills/php.png';
import express from '/public/svg/skills/express.png';
import vbnet from '/public/svg/skills/vbnet.png';
import restapi from '/public/svg/skills/rest.png';
import jira from '/public/svg/skills/jira.png';
import postman from '/public/svg/skills/postman.png';
import vscode from '/public/svg/skills/vscode.png';
import json from '/public/svg/skills/json.png';
import xampp from '/public/svg/skills/xampp.png';
import vercel from '/public/svg/skills/vercel.png';
import netlify from '/public/svg/skills/netlify.png';
import navicat from '/public/svg/skills/navicat.png';
import go from '/public/svg/skills/go.svg';
import docker from '/public/svg/skills/docker.svg';
import typescript from '/public/svg/skills/typescript.svg';
import nginx from '/public/svg/skills/nginx.svg';

export const skillsImage = (skill: string): {src: string} => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'nginx':
      return nginx;
    case 'docker':
      return docker;
    case 'xampp':
      return xampp;
    case 'vercel':
      return vercel;
    case 'netlify':
      return netlify;
    case 'navicat':
      return navicat;
    case 'restapi':
      return restapi;
    case 'jira':
      return jira;
    case 'postman':
      return postman;
    case 'vscode':
      return vscode;
    case 'json':
      return json;
    case 'html':
      return html;
    case 'go':
      return go;
    case 'photoshop':
      return photoshop;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'mysql':
      return mysql;
    case 'c':
      return c;
    case 'csharp':
      return csharp;
    case 'kotlin':
      return kotlin;
    case 'php':
      return php;
    case 'git':
      return git;
    case 'figma':
      return figma;
    case 'msoffice':
      return msoffice;
    case 'picsart':
      return picsart;
    case 'canva':
      return canva;
    case 'nodejs':
      return nodejs;
    case 'express':
      return express;
    case 'vbnet':
      return vbnet;
    case 'typescript':
      return typescript;
    default:
      return {
        src: "nothing.svg"
      };
  }
}
