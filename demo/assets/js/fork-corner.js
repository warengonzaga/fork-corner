/*!
 * Fork Corner - https://github.com/WarenGonzaga/fork-corner#readme
 * A modern and global open source fork corner label for your project's landing page.
 * Version: 1.0.0-rc.1
 * Github: https://github.com/WarenGonzaga/fork-corner
 * Licensed Under The MIT License: http://opensource.org/licenses/MIT
 * Copyright (c) 2020 Waren Gonzaga
 *
 * Facebook: @warengonzagaofficial
 * Twitter: @warengonzaga
 * Github: @warengonzaga
 * Website: warengonzaga.com
 */

const fchead = document.getElementsByTagName('head')[0];
const fcController = document.getElementById('fork-corner');
const fcIcon = document.createElement('i');

const fcDevicon = document.createElement('link');
        fcDevicon.rel = 'stylesheet';
        fcDevicon.type = 'text/css';
        fcDevicon.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css';

const fcElement = document.createElement('div');

if(document.querySelector('.fc-theme-default')){
    fcIcon.setAttribute('class','devicon-git-plain');
}

if(document.querySelector('.fc-theme-github')){
    fcIcon.setAttribute('class','devicon-github-plain');
}

if(document.querySelector('.fc-theme-gitlab')) {
    fcIcon.setAttribute('class','devicon-gitlab-plain');
}

if(document.querySelector('.fc-theme-bitbucket')) {
    fcIcon.setAttribute('class','devicon-bitbucket-plain');
}

fchead.appendChild(fcDevicon)
fcController.appendChild(fcIcon);
fcController.parentNode.insertBefore(fcElement, fcController.nextSibling);