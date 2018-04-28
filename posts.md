---
layout: page
title: Blog
permalink: /blog/
---

I spend a lot of time thinking about tech industry culture, empathy, design, and career development. Occasionally I write and speak about these topics. You can can check out my thoughts below.

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
