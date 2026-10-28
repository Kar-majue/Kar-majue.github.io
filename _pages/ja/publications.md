---
layout: page
title: 業績
permalink: /ja/publications/
nav: false
---

研究業績の一覧です。書誌情報は英語版の業績ページと共通です。

<div class="publications">

<h2>学術誌論文・会議プロシーディングス</h2>
{% bibliography -f {{ site.scholar.bibliography }} --query @*[type=article]%}

<h2>学会発表</h2>
{% bibliography -f {{ site.scholar.bibliography }} --query @*[type=inproceedings]%}

</div>
