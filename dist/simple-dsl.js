/**
 * simple-dsl - Simple DSL based on <key,value> designed to work together fulltext search engines
 * @version v1.0.0
 * @link    https://github.com/Kikobeats/simple-dsl
 * @license MIT
 */require=function r(t,n,e){function i(o,f){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!f&&a)return a(o,!0);if(u)return u(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var s=n[o]={exports:{}};t[o][0].call(s.exports,function(r){var n=t[o][1][r];return i(n?n:r)},s,s.exports,r,t,n,e)}return n[o].exports}for(var u="function"==typeof require&&require,o=0;o<e.length;o++)i(e[o]);return i}({"simple-dsl":[function(r,t,n){"use strict";function e(r){return-1!==r.indexOf(":")}function i(r){return-1!==r.toString().indexOf('"')}function u(r,t){t=t.split(":");var n=t[0],e=t[1];r[n]?Array.isArray(r[n])?r[n].push(e):r[n]=[r[n],e]:r[n]=e}function o(r,t){if(!i(t))return void(r.text?r.text+=t:r.text=t);var n=c?c+" ":"";c=n+t,2===++s&&(u(r,c.replace(a.TRIM_QUOTES,"")),c=null,s=0)}function f(r){r=r.split(" ");for(var t=-1,n={};r[++t];){var f=r[t];e(f)&&!i(f)?u(n,f):o(n,f)}return n}var a={TRIM_QUOTES:/"/g},c="",s=0;t.exports=f},{}]},{},[]);