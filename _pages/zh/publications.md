---
layout: page
title: 论文发表
permalink: /zh/publications/
nav: false
---

以下为我的研究论文与会议报告一览，书目信息与英文版论文页相同。

<div class="publications">

<h2>期刊与会议论文</h2>
{% bibliography -f {{ site.scholar.bibliography }} --query @*[type=article]%}

<h2>会议报告</h2>
{% bibliography -f {{ site.scholar.bibliography }} --query @*[type=inproceedings]%}

</div>
